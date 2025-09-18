-- Supabase schema for e-commerce
-- Run in Supabase SQL editor

create table if not exists users (
  id uuid primary key,
  email text unique not null,
  name text,
  role text not null default 'CUSTOMER',
  created_at timestamp with time zone default now()
);

create table if not exists addresses (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete set null,
  first_name text,
  last_name text,
  company text,
  address1 text,
  address2 text,
  city text,
  state text,
  zip_code text,
  country text,
  phone text,
  created_at timestamp with time zone default now()
);

create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  short_description text,
  description text,
  images text[] default '{}',
  price numeric(10,2) not null,
  active boolean not null default true,
  created_at timestamp with time zone default now()
);

-- Ensure extended columns exist for frontend UI compatibility
alter table products add column if not exists category text;
alter table products add column if not exists features text[] default '{}';
alter table products add column if not exists specifications jsonb default '{}'::jsonb;
alter table products add column if not exists benefits text[] default '{}';
alter table products add column if not exists whats_in_box text[] default '{}';
alter table products add column if not exists user_guides jsonb default '[]'::jsonb;
alter table products add column if not exists videos jsonb default '[]'::jsonb;
alter table products add column if not exists combined_products jsonb default '[]'::jsonb;
alter table products add column if not exists stock integer default 0;

create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  order_number text unique not null,
  user_id uuid references users(id) on delete set null,
  email text,
  phone text,
  subtotal numeric(10,2) not null default 0,
  tax numeric(10,2) not null default 0,
  shipping numeric(10,2) not null default 0,
  total numeric(10,2) not null default 0,
  status text not null default 'PENDING',
  payment_status text not null default 'PENDING',
  shipping_address_id uuid references addresses(id) on delete set null,
  billing_address jsonb,
  stripe_session_id text,
  stripe_payment_id text,
  created_at timestamp with time zone default now()
);

-- Shipment tracking and timestamps
alter table orders add column if not exists carrier text;
alter table orders add column if not exists tracking_number text;
alter table orders add column if not exists shipped_at timestamp with time zone;
alter table orders add column if not exists delivered_at timestamp with time zone;

create table if not exists order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid references orders(id) on delete cascade,
  product_id uuid references products(id) on delete set null,
  product_name text not null,
  product_image text,
  quantity integer not null,
  price numeric(10,2) not null,
  total numeric(10,2) not null,
  created_at timestamp with time zone default now()
);

-- RLS policies
alter table users enable row level security;
alter table addresses enable row level security;
alter table orders enable row level security;
alter table order_items enable row level security;
alter table products enable row level security;

-- Public can read active products
create policy if not exists "Public read active products" on products for select using (active = true);

create policy if not exists "Users can view their own profile" on users for select using (auth.uid() = id);
create policy if not exists "Users can update their own profile" on users for update using (auth.uid() = id);

create policy if not exists "Users can view own addresses" on addresses for select using (auth.uid() = user_id);
create policy if not exists "Users can insert own addresses" on addresses for insert with check (auth.uid() = user_id);

create policy if not exists "Users can view own orders" on orders for select using (auth.uid() = user_id);
create policy if not exists "Users can view own order items" on order_items for select using (
  exists(select 1 from orders o where o.id = order_id and o.user_id = auth.uid())
);

-- Admin writes use the service role key (bypasses RLS)