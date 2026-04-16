export interface Database {
  public: {
    Tables: {
      companies: {
        Row: Company;
        Insert: Omit<Company, "id" | "created_at" | "updated_at">;
        Update: Partial<Omit<Company, "id">>;
      };
      calls: {
        Row: Call;
        Insert: Omit<Call, "id" | "created_at">;
        Update: Partial<Omit<Call, "id">>;
      };
      contacts: {
        Row: Contact;
        Insert: Omit<Contact, "id" | "created_at" | "updated_at">;
        Update: Partial<Omit<Contact, "id">>;
      };
      calendar_events: {
        Row: CalendarEvent;
        Insert: Omit<CalendarEvent, "id" | "created_at">;
        Update: Partial<Omit<CalendarEvent, "id">>;
      };
      invoices: {
        Row: Invoice;
        Insert: Omit<Invoice, "id" | "created_at">;
        Update: Partial<Omit<Invoice, "id">>;
      };
      team_members: {
        Row: TeamMember;
        Insert: Omit<TeamMember, "id" | "created_at">;
        Update: Partial<Omit<TeamMember, "id">>;
      };
      automations: {
        Row: Automation;
        Insert: Omit<Automation, "id" | "created_at">;
        Update: Partial<Omit<Automation, "id">>;
      };
      activity_log: {
        Row: ActivityLog;
        Insert: Omit<ActivityLog, "id" | "created_at">;
        Update: Partial<Omit<ActivityLog, "id">>;
      };
      knowledge_base: {
        Row: KnowledgeEntry;
        Insert: Omit<KnowledgeEntry, "id" | "created_at" | "updated_at">;
        Update: Partial<Omit<KnowledgeEntry, "id">>;
      };
      campaigns: {
        Row: Campaign;
        Insert: Omit<Campaign, "id" | "created_at" | "updated_at">;
        Update: Partial<Omit<Campaign, "id">>;
      };
    };
  };
}

export interface Company {
  id: string;
  name: string;
  industry: string;
  address: string;
  phone: string;
  email: string;
  plan: "starter" | "business" | "enterprise";
  settings: Record<string, unknown>;
  created_at: string;
  updated_at: string;
}

export interface Call {
  id: string;
  company_id: string;
  caller_number: string;
  duration: number;
  transcript: string | null;
  sentiment: "positive" | "neutral" | "negative" | null;
  status: "completed" | "missed" | "voicemail";
  recording_url: string | null;
  created_at: string;
}

export interface Contact {
  id: string;
  company_id: string;
  name: string;
  email: string | null;
  phone: string | null;
  value: number;
  status: "lead" | "active" | "inactive";
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface CalendarEvent {
  id: string;
  company_id: string;
  title: string;
  start_time: string;
  end_time: string;
  type: "meeting" | "call" | "reminder" | "blocked";
  attendees: string[];
  created_at: string;
}

export interface Invoice {
  id: string;
  company_id: string;
  amount: number;
  status: "paid" | "pending" | "overdue";
  client_name: string;
  due_date: string;
  created_at: string;
}

export interface TeamMember {
  id: string;
  company_id: string;
  name: string;
  role: string;
  email: string;
  status: "active" | "away" | "offline";
  created_at: string;
}

export interface Automation {
  id: string;
  company_id: string;
  name: string;
  trigger: string;
  action: string;
  enabled: boolean;
  created_at: string;
}

export interface ActivityLog {
  id: string;
  company_id: string;
  action: string;
  actor: string;
  details: string | null;
  created_at: string;
}

export interface KnowledgeEntry {
  id: string;
  company_id: string;
  question: string;
  answer: string;
  category: string;
  created_at: string;
  updated_at: string;
}

export interface Campaign {
  id: string;
  company_id: string;
  name: string;
  type: "email" | "sms" | "whatsapp";
  status: "draft" | "active" | "completed" | "paused";
  sent: number;
  opened: number;
  clicked: number;
  created_at: string;
  updated_at: string;
}
