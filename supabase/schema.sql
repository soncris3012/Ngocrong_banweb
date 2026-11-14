-- ========================================================
-- NGỌC RỒNG ONLINE (NRO) - SUPABASE POSTGRESQL SCHEMA
-- Chuyển đổi từ `mad.sql` (KhanhNguyen9872/Nro-Offline_src)
-- Tối ưu cho Web Game ReactJS & Supabase Realtime
-- ========================================================

-- 1. BẢNG TÀI KHOẢN (PROFILES)
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    gold BIGINT DEFAULT 10000,
    gem INT DEFAULT 50,
    ruby INT DEFAULT 10,
    role INT DEFAULT 0, -- 0: Người chơi, 1: VIP, 2: Admin
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. BẢNG NHÂN VẬT (CHARACTERS / PLAYERS)
-- Tương ứng bảng `player` trong mad.sql
CREATE TABLE IF NOT EXISTS public.characters (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    profile_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    name TEXT UNIQUE NOT NULL,
    planet INT DEFAULT 0, -- 0: Trái Đất, 1: Namếc, 2: Xayda
    gender INT DEFAULT 0,
    
    -- Chỉ số sức mạnh & tiềm năng
    power BIGINT DEFAULT 2000,        -- Sức mạnh
    potential BIGINT DEFAULT 2000,    -- Tiềm năng
    
    -- Chỉ số sinh lực & chiến đấu
    hp INT DEFAULT 1000,
    max_hp INT DEFAULT 1000,
    ki INT DEFAULT 1000,
    max_ki INT DEFAULT 1000,
    stamina INT DEFAULT 100,
    max_stamina INT DEFAULT 100,
    attack INT DEFAULT 50,
    defense INT DEFAULT 10,
    crit_rate INT DEFAULT 5, -- Tỷ lệ chí mạng (%)
    
    -- Hệ thống Đậu Thần Karin
    senzu_level INT DEFAULT 1,
    senzu_count INT DEFAULT 10,
    senzu_max INT DEFAULT 10,
    last_harvest_time TIMESTAMPTZ DEFAULT NOW(),
    
    -- Vị trí & Bản đồ
    map_id INT DEFAULT 0, -- 0: Làng Aru, 1: Đảo Kame, 2: Rừng Nấm
    pos_x FLOAT DEFAULT 300,
    pos_y FLOAT DEFAULT 420,
    
    -- Nhiệm vụ hiện tại
    quest_id INT DEFAULT 1,
    quest_progress INT DEFAULT 0,
    
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. BẢNG HÀNH TRANG & TRANG BỊ (INVENTORY)
CREATE TABLE IF NOT EXISTS public.inventory (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    character_id UUID REFERENCES public.characters(id) ON DELETE CASCADE,
    item_id INT NOT NULL,
    item_name TEXT NOT NULL,
    item_type TEXT NOT NULL, -- 'shirt', 'pants', 'glove', 'shoes', 'rada', 'consumable', 'special'
    slot INT NOT NULL,       -- -1 to -5: Equipped slots, 0 to 19: Bag slots
    quantity INT DEFAULT 1,
    options JSONB DEFAULT '{}'::jsonb, -- Các chỉ số option (+HP, +Sát thương, v.v.)
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. BẢNG THÔNG BÁO VÀ CHAT THẾ GIỚI (WORLD CHAT)
CREATE TABLE IF NOT EXISTS public.chat_messages (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    character_name TEXT NOT NULL,
    planet INT DEFAULT 0,
    message TEXT NOT NULL,
    channel TEXT DEFAULT 'world', -- 'world', 'system', 'clan'
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. BẢNG XẾP HẠNG CAO THỦ (LEADERBOARD VIEW)
CREATE OR REPLACE VIEW public.leaderboard AS
SELECT 
    c.id,
    c.name,
    c.planet,
    c.power,
    c.max_hp,
    c.attack,
    c.quest_id,
    p.gold,
    p.gem,
    c.updated_at
FROM public.characters c
LEFT JOIN public.profiles p ON c.profile_id = p.id
ORDER BY c.power DESC
LIMIT 50;

-- 6. BẬT ROW LEVEL SECURITY (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.characters ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inventory ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;

-- Tạo các policy cho phép truy cập công khai (anon key cho web game)
CREATE POLICY "Public Read Profiles" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Public Insert Profiles" ON public.profiles FOR INSERT WITH CHECK (true);
CREATE POLICY "Public Update Profiles" ON public.profiles FOR UPDATE USING (true);

CREATE POLICY "Public Read Characters" ON public.characters FOR SELECT USING (true);
CREATE POLICY "Public Insert Characters" ON public.characters FOR INSERT WITH CHECK (true);
CREATE POLICY "Public Update Characters" ON public.characters FOR UPDATE USING (true);

CREATE POLICY "Public Read Inventory" ON public.inventory FOR SELECT USING (true);
CREATE POLICY "Public Insert Inventory" ON public.inventory FOR INSERT WITH CHECK (true);
CREATE POLICY "Public Update Inventory" ON public.inventory FOR UPDATE USING (true);
CREATE POLICY "Public Delete Inventory" ON public.inventory FOR DELETE USING (true);

CREATE POLICY "Public Read Chat" ON public.chat_messages FOR SELECT USING (true);
CREATE POLICY "Public Insert Chat" ON public.chat_messages FOR INSERT WITH CHECK (true);

-- 7. KÍCH HOẠT SUPABASE REALTIME CHO BẢNG CHAT VÀ XẾP HẠNG
BEGIN;
  DROP PUBLICATION IF EXISTS supabase_realtime;
  CREATE PUBLICATION supabase_realtime;
COMMIT;
ALTER PUBLICATION supabase_realtime ADD TABLE public.chat_messages;
ALTER PUBLICATION supabase_realtime ADD TABLE public.characters;
