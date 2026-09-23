create table if not exists public.lesson_notes (
  id text not null,
  user_id uuid not null references auth.users(id) on delete cascade,
  date_iso date not null,
  label text,
  note text not null default '',
  is_custom boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (id, user_id)
);

create index if not exists lesson_notes_user_id_idx on public.lesson_notes (user_id);

alter table public.lesson_notes enable row level security;

drop policy if exists "Users can read their own lesson notes" on public.lesson_notes;
create policy "Users can read their own lesson notes"
  on public.lesson_notes for select to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "Users can insert their own lesson notes" on public.lesson_notes;
create policy "Users can insert their own lesson notes"
  on public.lesson_notes for insert to authenticated
  with check ((select auth.uid()) = user_id);

drop policy if exists "Users can update their own lesson notes" on public.lesson_notes;
create policy "Users can update their own lesson notes"
  on public.lesson_notes for update to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

drop policy if exists "Users can delete their own lesson notes" on public.lesson_notes;
create policy "Users can delete their own lesson notes"
  on public.lesson_notes for delete to authenticated
  using ((select auth.uid()) = user_id);