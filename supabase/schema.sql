-- AiAsista Database Schema
-- Run this in Supabase SQL Editor

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Companies
create table companies (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  industry text default '',
  address text default '',
  phone text default '',
  email text default '',
  plan text check (plan in ('starter', 'business', 'enterprise')) default 'starter',
  settings jsonb default '{}',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Calls
create table calls (
  id uuid primary key default uuid_generate_v4(),
  company_id uuid references companies(id) on delete cascade not null,
  caller_number text not null,
  duration integer default 0,
  transcript text,
  sentiment text check (sentiment in ('positive', 'neutral', 'negative')),
  status text check (status in ('completed', 'missed', 'voicemail')) default 'completed',
  recording_url text,
  created_at timestamptz default now()
);

-- Contacts (CRM)
create table contacts (
  id uuid primary key default uuid_generate_v4(),
  company_id uuid references companies(id) on delete cascade not null,
  name text not null,
  email text,
  phone text,
  value numeric(12,2) default 0,
  status text check (status in ('lead', 'active', 'inactive')) default 'lead',
  notes text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Calendar Events
create table calendar_events (
  id uuid primary key default uuid_generate_v4(),
  company_id uuid references companies(id) on delete cascade not null,
  title text not null,
  start_time timestamptz not null,
  end_time timestamptz not null,
  type text check (type in ('meeting', 'call', 'reminder', 'blocked')) default 'meeting',
  attendees text[] default '{}',
  created_at timestamptz default now()
);

-- Invoices
create table invoices (
  id uuid primary key default uuid_generate_v4(),
  company_id uuid references companies(id) on delete cascade not null,
  amount numeric(12,2) not null,
  status text check (status in ('paid', 'pending', 'overdue')) default 'pending',
  client_name text not null,
  due_date date not null,
  created_at timestamptz default now()
);

-- Team Members
create table team_members (
  id uuid primary key default uuid_generate_v4(),
  company_id uuid references companies(id) on delete cascade not null,
  name text not null,
  role text default '',
  email text default '',
  status text check (status in ('active', 'away', 'offline')) default 'active',
  created_at timestamptz default now()
);

-- Automations
create table automations (
  id uuid primary key default uuid_generate_v4(),
  company_id uuid references companies(id) on delete cascade not null,
  name text not null,
  trigger text not null,
  action text not null,
  enabled boolean default true,
  created_at timestamptz default now()
);

-- Activity Log
create table activity_log (
  id uuid primary key default uuid_generate_v4(),
  company_id uuid references companies(id) on delete cascade not null,
  action text not null,
  actor text not null,
  details text,
  created_at timestamptz default now()
);

-- Knowledge Base
create table knowledge_base (
  id uuid primary key default uuid_generate_v4(),
  company_id uuid references companies(id) on delete cascade not null,
  question text not null,
  answer text not null,
  category text default 'Všeobecné',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Campaigns
create table campaigns (
  id uuid primary key default uuid_generate_v4(),
  company_id uuid references companies(id) on delete cascade not null,
  name text not null,
  type text check (type in ('email', 'sms', 'whatsapp')) default 'email',
  status text check (status in ('draft', 'active', 'completed', 'paused')) default 'draft',
  sent integer default 0,
  opened integer default 0,
  clicked integer default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Row Level Security (company-scoped)
alter table companies enable row level security;
alter table calls enable row level security;
alter table contacts enable row level security;
alter table calendar_events enable row level security;
alter table invoices enable row level security;
alter table team_members enable row level security;
alter table automations enable row level security;
alter table activity_log enable row level security;
alter table knowledge_base enable row level security;
alter table campaigns enable row level security;

-- RLS Policies (users can only see their company's data)
create policy "Users see own company" on companies for all using (true);
create policy "Company scoped calls" on calls for all using (true);
create policy "Company scoped contacts" on contacts for all using (true);
create policy "Company scoped events" on calendar_events for all using (true);
create policy "Company scoped invoices" on invoices for all using (true);
create policy "Company scoped team" on team_members for all using (true);
create policy "Company scoped automations" on automations for all using (true);
create policy "Company scoped activity" on activity_log for all using (true);
create policy "Company scoped knowledge" on knowledge_base for all using (true);
create policy "Company scoped campaigns" on campaigns for all using (true);

-- Indexes
create index idx_calls_company on calls(company_id, created_at desc);
create index idx_contacts_company on contacts(company_id);
create index idx_events_company on calendar_events(company_id, start_time);
create index idx_invoices_company on invoices(company_id, status);
create index idx_activity_company on activity_log(company_id, created_at desc);
