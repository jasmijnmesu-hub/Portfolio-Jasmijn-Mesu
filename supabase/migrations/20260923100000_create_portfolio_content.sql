create table if not exists public.portfolio_content (
  id text primary key,
  profile jsonb not null,
  learning_outcomes jsonb not null default '[]'::jsonb,
  sprints jsonb not null default '[]'::jsonb,
  evidence jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.portfolio_content enable row level security;

drop policy if exists "Public portfolio content is readable" on public.portfolio_content;
create policy "Public portfolio content is readable"
  on public.portfolio_content
  for select
  to anon, authenticated
  using (true);

comment on table public.portfolio_content is 'Public portfolio content maintained as structured JSON sections.';