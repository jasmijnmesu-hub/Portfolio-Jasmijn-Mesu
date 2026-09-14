import React, { useEffect, useState } from 'react';
import { Bot, LoaderCircle, MessageCircle, Send, X } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

const apiKey = import.meta.env.GEMINI_API_KEY || '';

export const GeminiChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isHistoryLoading, setIsHistoryLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadChatHistory = async () => {
      if (!supabase) {
        setIsHistoryLoading(false);
        return;
      }

      const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
      let userId = sessionData.session?.user.id;
      let authError = null;

      if (!userId) {
        const { data: authData, error } = await supabase.auth.signInAnonymously();
        userId = authData.user?.id;
        authError = error;
      }

      if (sessionError || authError || !userId) {
        setError('De chat kon niet veilig worden gestart.');
        setIsHistoryLoading(false);
        return;
      }

      const { data, error: historyError } = await supabase
        .from('chat_messages')
        .select('role, message')
        .eq('user_id', userId)
        .order('created_at', { ascending: true })
        .order('id', { ascending: true });

      if (historyError) {
        setError('De opgeslagen chat kon niet worden geladen.');
      } else {
        setMessages((data || []).map((message) => ({ role: message.role, text: message.message })));
      }
      setIsHistoryLoading(false);
    };

    void loadChatHistory();
  }, []);

  const sendMessage = async (event: React.FormEvent) => {
    event.preventDefault();
    const prompt = input.trim();

    if (!apiKey.trim() || !prompt || isLoading || isHistoryLoading) return;

    const nextMessages = [...messages, { role: 'user' as const, text: prompt }];
    setMessages(nextMessages);
    setInput('');
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-pro-preview:generateContent',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-goog-api-key': apiKey.trim(),
          },
          body: JSON.stringify({
            systemInstruction: {
              parts: [{ text: 'Je bent een behulpzame assistent voor het portfolio van Jasmijn Mesu. Antwoord kort en duidelijk in het Nederlands.' }],
            },
            contents: nextMessages.map((message) => ({
              role: message.role,
              parts: [{ text: message.text }],
            })),
          }),
        },
      );

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error?.message || 'De Gemini-aanvraag is mislukt.');
      }

      const answer = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!answer) throw new Error('Gemini gaf geen antwoord terug.');
      if (supabase) {
        const { data: sessionData } = await supabase.auth.getSession();
        const userId = sessionData.session?.user.id;
        if (!userId) throw new Error('De veilige chatsessie ontbreekt.');

        const { error: saveError } = await supabase.from('chat_messages').insert([
          { user_id: userId, role: 'user', message: prompt },
          { user_id: userId, role: 'model', message: answer },
        ]);
        if (saveError) throw new Error('Het antwoord kon niet in de chatgeschiedenis worden opgeslagen.');
      }
      setMessages((current) => [...current, { role: 'model', text: answer }]);
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : 'Er ging iets mis bij het versturen.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen && (
        <section className="mb-3 flex h-[min(32rem,calc(100vh-7rem))] w-[min(22rem,calc(100vw-2rem))] flex-col border border-[#1B2A24]/15 bg-[#EDE6D8] shadow-2xl" aria-label="Portfolio chatbot">
          <div className="flex items-center justify-between border-b border-[#1B2A24]/10 bg-[#D6D2C4] p-4">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-[#9C4A32]" />
              <div>
                <h2 className="font-serif text-lg">Portfolio assistent</h2>
                <p className="text-[10px] uppercase tracking-wider opacity-60">Gemini</p>
              </div>
            </div>
            <button type="button" onClick={() => setIsOpen(false)} className="p-1.5 hover:bg-[#EDE6D8]" aria-label="Chat sluiten">
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {isHistoryLoading && <p className="text-xs text-[#1B2A24]/60">Opgeslagen chat laden...</p>}
            {!isHistoryLoading && messages.length === 0 && (
              <p className="text-xs leading-relaxed text-[#1B2A24]/70">Stel een vraag over dit portfolio. Je chat wordt bewaard voor je volgende bezoek.</p>
            )}
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={`max-w-[90%] p-3 text-xs leading-relaxed ${message.role === 'user' ? 'ml-auto bg-[#9C4A32] text-[#EDE6D8]' : 'bg-[#D6D2C4]'}`}>
                {message.text}
              </div>
            ))}
            {isLoading && <LoaderCircle className="h-4 w-4 animate-spin text-[#9C4A32]" aria-label="Antwoord laden" />}
            {error && <p className="border border-[#9C4A32]/30 bg-[#D8B7A6]/30 p-2 text-xs text-[#7E3A26]">{error}</p>}
          </div>

          <div className="space-y-3 border-t border-[#1B2A24]/10 p-3">
            <form onSubmit={sendMessage} className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder={apiKey ? 'Stel een vraag...' : 'Gemini-key ontbreekt in .env'}
                disabled={!apiKey || isLoading || isHistoryLoading}
                className="min-w-0 flex-1 border border-[#1B2A24]/15 bg-white/30 px-3 py-2 text-xs outline-none focus:border-[#9C4A32] disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Chatbericht"
              />
              <button type="submit" disabled={!apiKey || !input.trim() || isLoading || isHistoryLoading} className="accent-btn p-2 disabled:cursor-not-allowed disabled:opacity-40" aria-label="Bericht versturen">
                <Send className="h-4 w-4" />
              </button>
            </form>
            <p className="text-[10px] leading-relaxed text-[#1B2A24]/50">Je chat wordt lokaal herkenbaar opgeslagen, zodat je geschiedenis bij een volgend bezoek terugkomt.</p>
          </div>
        </section>
      )}

      <button type="button" onClick={() => setIsOpen((open) => !open)} className="accent-btn flex h-12 w-12 items-center justify-center rounded-full shadow-lg" aria-label={isOpen ? 'Chat sluiten' : 'Chat openen'}>
        {isOpen ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
      </button>
    </div>
  );
};