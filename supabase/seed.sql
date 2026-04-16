-- AiAsista Seed Data
-- Demo company with realistic Slovak data

-- Demo Company
insert into companies (id, name, industry, address, phone, email, plan, settings) values
  ('11111111-1111-1111-1111-111111111111', 'Demo Firma s.r.o.', 'Realitná kancelária', 'Štefánikova 15, 811 05 Bratislava', '+421 2 1234 5678', 'info@demofirma.sk', 'business', '{"voice_enabled": true, "language": "sk"}');

-- Calls
insert into calls (company_id, caller_number, duration, transcript, sentiment, status, created_at) values
  ('11111111-1111-1111-1111-111111111111', '+421 905 123 456', 184, 'Dobrý deň, volám ohľadom bytu na Dunajskej. Je ešte voľný? ... Áno, 3-izbový je stále dostupný. Môžem vám dohodnúť obhliadku...', 'positive', 'completed', now() - interval '2 hours'),
  ('11111111-1111-1111-1111-111111111111', '+421 911 234 567', 45, 'Chcel by som sa opýtať na cenu prenájmu kancelárie...', 'neutral', 'completed', now() - interval '4 hours'),
  ('11111111-1111-1111-1111-111111111111', '+421 903 345 678', 0, null, null, 'missed', now() - interval '6 hours'),
  ('11111111-1111-1111-1111-111111111111', '+421 917 456 789', 312, 'Dobrý deň, som záujemca o rodinný dom v Petržalke. Videl som ho na vašom webe...', 'positive', 'completed', now() - interval '1 day'),
  ('11111111-1111-1111-1111-111111111111', '+421 908 567 890', 67, 'Zavolal som kvôli faktúre za sprostredkovanie...', 'negative', 'completed', now() - interval '1 day'),
  ('11111111-1111-1111-1111-111111111111', '+421 902 678 901', 0, null, null, 'voicemail', now() - interval '2 days');

-- Contacts
insert into contacts (company_id, name, email, phone, value, status, notes) values
  ('11111111-1111-1111-1111-111111111111', 'Ján Kováč', 'jan.kovac@email.sk', '+421 905 123 456', 185000, 'active', 'Záujem o 3-izbový byt na Dunajskej, rozpočet do 200k'),
  ('11111111-1111-1111-1111-111111111111', 'Mária Horváthová', 'maria.h@gmail.com', '+421 911 234 567', 45000, 'lead', 'Hľadá prenájom kancelárie, 50-80m2'),
  ('11111111-1111-1111-1111-111111111111', 'Peter Novák', 'peter.novak@firma.sk', '+421 917 456 789', 320000, 'active', 'Rodinný dom Petržalka, seriózny záujemca'),
  ('11111111-1111-1111-1111-111111111111', 'Anna Szabová', 'anna.sz@email.sk', '+421 903 345 678', 0, 'lead', 'Volala, nestihli sme zdvihnúť'),
  ('11111111-1111-1111-1111-111111111111', 'Tomáš Varga', 'tomas.varga@email.sk', '+421 908 567 890', 95000, 'inactive', 'Kúpil byt minulý mesiac, spokojný klient');

-- Calendar Events
insert into calendar_events (company_id, title, start_time, end_time, type, attendees) values
  ('11111111-1111-1111-1111-111111111111', 'Obhliadka - Dunajská 3-izb', now() + interval '2 hours', now() + interval '3 hours', 'meeting', '{"Ján Kováč", "Marek (maklér)"}'),
  ('11111111-1111-1111-1111-111111111111', 'Telefonát - Horváthová prenájom', now() + interval '4 hours', now() + interval '4 hours 30 minutes', 'call', '{"Mária Horváthová"}'),
  ('11111111-1111-1111-1111-111111111111', 'Tímový meeting', now() + interval '1 day', now() + interval '1 day 1 hour', 'meeting', '{"Celý tím"}'),
  ('11111111-1111-1111-1111-111111111111', 'Obhliadka - RD Petržalka', now() + interval '1 day 3 hours', now() + interval '1 day 4 hours', 'meeting', '{"Peter Novák", "Jana (maklérka)"}');

-- Invoices
insert into invoices (company_id, amount, status, client_name, due_date) values
  ('11111111-1111-1111-1111-111111111111', 5500, 'paid', 'Tomáš Varga', now() - interval '15 days'),
  ('11111111-1111-1111-1111-111111111111', 8200, 'pending', 'Ján Kováč', now() + interval '14 days'),
  ('11111111-1111-1111-1111-111111111111', 3100, 'overdue', 'Martin Černý', now() - interval '7 days'),
  ('11111111-1111-1111-1111-111111111111', 12000, 'pending', 'Peter Novák', now() + interval '30 days');

-- Team Members
insert into team_members (company_id, name, role, email, status) values
  ('11111111-1111-1111-1111-111111111111', 'David Vaško', 'Konateľ', 'david@demofirma.sk', 'active'),
  ('11111111-1111-1111-1111-111111111111', 'Marek Tóth', 'Senior maklér', 'marek@demofirma.sk', 'active'),
  ('11111111-1111-1111-1111-111111111111', 'Jana Kráľová', 'Maklérka', 'jana@demofirma.sk', 'away'),
  ('11111111-1111-1111-1111-111111111111', 'AiAsista', 'AI Asistentka', 'ai@demofirma.sk', 'active');

-- Automations
insert into automations (company_id, name, trigger, action, enabled) values
  ('11111111-1111-1111-1111-111111111111', 'Zmeškaný hovor → SMS', 'Zmeškaný hovor', 'Poslať SMS: "Prepáčte, nestihli sme zdvihnúť. Zavoláme vám späť do 15 minút."', true),
  ('11111111-1111-1111-1111-111111111111', 'Nový lead → Notifikácia', 'Nový kontakt v CRM', 'Poslať push notifikáciu maklérovi', true),
  ('11111111-1111-1111-1111-111111111111', 'Po obhliadke → Follow-up', '24h po obhliadke', 'Poslať email s ďakovačkou a ďalšími ponukami', true),
  ('11111111-1111-1111-1111-111111111111', 'Meškajúca faktúra → Pripomienka', 'Faktúra po splatnosti 3 dni', 'Poslať email pripomienku klientovi', false),
  ('11111111-1111-1111-1111-111111111111', 'Nový hovor → Prepis', 'Dokončený hovor', 'Vygenerovať prepis a uložiť do CRM', true),
  ('11111111-1111-1111-1111-111111111111', 'Víkendový hovor → Auto-odpoveď', 'Hovor cez víkend', 'Zdvihnúť a ponúknuť termín v pondelok', true);

-- Activity Log
insert into activity_log (company_id, action, actor, details, created_at) values
  ('11111111-1111-1111-1111-111111111111', 'Hovor prijatý', 'AiAsista', 'Ján Kováč - záujem o byt, dohodnutá obhliadka', now() - interval '2 hours'),
  ('11111111-1111-1111-1111-111111111111', 'Kontakt vytvorený', 'AiAsista', 'Anna Szabová pridaná do CRM', now() - interval '4 hours'),
  ('11111111-1111-1111-1111-111111111111', 'Faktúra uhradená', 'System', 'Tomáš Varga - 5 500€', now() - interval '15 days'),
  ('11111111-1111-1111-1111-111111111111', 'Obhliadka dohodnutá', 'AiAsista', 'Dunajská 3-izb, zajtra 14:00', now() - interval '1 day');

-- Knowledge Base
insert into knowledge_base (company_id, question, answer, category) values
  ('11111111-1111-1111-1111-111111111111', 'Aké sú otváracie hodiny?', 'Kancelária je otvorená Po-Pi od 9:00 do 18:00. AiAsista je dostupná 24/7.', 'Všeobecné'),
  ('11111111-1111-1111-1111-111111111111', 'Aká je provízia za sprostredkovanie?', 'Štandardná provízia je 3% z kúpnej ceny, minimálne 2 000€.', 'Ceny'),
  ('11111111-1111-1111-1111-111111111111', 'Ako prebieha obhliadka?', 'Dohodneme termín, maklér vás stretne na mieste, obhliadka trvá cca 30-45 minút.', 'Proces'),
  ('11111111-1111-1111-1111-111111111111', 'Pomáhate aj s hypotékou?', 'Áno, spolupracujeme s finančnými poradcami, ktorí vám bezplatne poradia s financovaním.', 'Služby'),
  ('11111111-1111-1111-1111-111111111111', 'Kde pôsobíte?', 'Pôsobíme v Bratislave a okolí, primárne mestské časti Staré Mesto, Ružinov, Petržalka a Nové Mesto.', 'Všeobecné');

-- Campaigns
insert into campaigns (company_id, name, type, status, sent, opened, clicked) values
  ('11111111-1111-1111-1111-111111111111', 'Jarná ponuka bytov 2026', 'email', 'active', 342, 187, 45),
  ('11111111-1111-1111-1111-111111111111', 'Reaktivácia - neaktívni 6+ mesiacov', 'email', 'completed', 128, 41, 12),
  ('11111111-1111-1111-1111-111111111111', 'SMS pripomienka obhliadok', 'sms', 'active', 56, 56, 0);
