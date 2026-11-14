import { createClient } from '@supabase/supabase-js';

const STORAGE_KEY_URL = 'nro_supabase_url';
const STORAGE_KEY_KEY = 'nro_supabase_key';

let supabaseInstance = null;

export const getSupabaseConfig = () => {
  const url = localStorage.getItem(STORAGE_KEY_URL) || import.meta.env.VITE_SUPABASE_URL || '';
  const key = localStorage.getItem(STORAGE_KEY_KEY) || import.meta.env.VITE_SUPABASE_ANON_KEY || '';
  return { url, key };
};

export const saveSupabaseConfig = (url, key) => {
  if (url && key) {
    localStorage.setItem(STORAGE_KEY_URL, url.trim());
    localStorage.setItem(STORAGE_KEY_KEY, key.trim());
    supabaseInstance = createClient(url.trim(), key.trim());
    return true;
  }
  return false;
};

export const getSupabaseClient = () => {
  if (!supabaseInstance) {
    const { url, key } = getSupabaseConfig();
    if (url && key) {
      try {
        supabaseInstance = createClient(url, key);
      } catch (err) {
        console.warn('Không thể khởi tạo Supabase client:', err);
      }
    }
  }
  return supabaseInstance;
};

export const isSupabaseConfigured = () => {
  const { url, key } = getSupabaseConfig();
  return Boolean(url && key);
};

// Lưu dữ liệu nhân vật lên Supabase (với fallback LocalStorage)
export const saveCharacterData = async (player) => {
  // Luôn lưu bản sao vào LocalStorage trước
  localStorage.setItem(`nro_char_${player.name}`, JSON.stringify(player));
  localStorage.setItem('nro_last_character', player.name);

  const client = getSupabaseClient();
  if (!client) return { success: true, localOnly: true };

  try {
    const payload = {
      name: player.name,
      planet: player.planet,
      power: player.power,
      potential: player.potential,
      hp: player.hp,
      max_hp: player.maxHp,
      ki: player.ki,
      max_ki: player.maxKi,
      attack: player.attack,
      defense: player.defense,
      crit_rate: player.crit,
      senzu_count: player.senzuCount,
      senzu_level: player.senzuLevel,
      map_id: player.mapId,
      pos_x: Math.round(player.x),
      pos_y: Math.round(player.y),
      quest_id: player.questId,
      quest_progress: player.questProgress,
      updated_at: new Date().toISOString()
    };

    const { data, error } = await client
      .from('characters')
      .upsert(payload, { onConflict: 'name' })
      .select();

    if (error) {
      console.error('Lỗi lưu nhân vật lên Supabase:', error);
      return { success: false, error: error.message };
    }
    return { success: true, data };
  } catch (err) {
    console.warn('Ngoại lệ khi lưu Supabase:', err);
    return { success: false, error: err.message };
  }
};

// Tải dữ liệu nhân vật
export const loadCharacterData = async (charName) => {
  const client = getSupabaseClient();
  if (client) {
    try {
      const { data, error } = await client
        .from('characters')
        .select('*')
        .eq('name', charName)
        .single();

      if (data && !error) {
        return {
          name: data.name,
          planet: data.planet,
          power: Number(data.power),
          potential: Number(data.potential),
          hp: data.hp,
          maxHp: data.max_hp,
          ki: data.ki,
          maxKi: data.max_ki,
          attack: data.attack,
          defense: data.defense,
          crit: data.crit_rate,
          senzuCount: data.senzu_count,
          senzuLevel: data.senzu_level,
          mapId: data.map_id,
          x: data.pos_x,
          y: data.pos_y,
          questId: data.quest_id,
          questProgress: data.quest_progress
        };
      }
    } catch (err) {
      console.warn('Lỗi đọc dữ liệu từ Supabase, chuyển sang bộ nhớ cục bộ:', err);
    }
  }

  // Fallback đọc LocalStorage
  const localSaved = localStorage.getItem(`nro_char_${charName}`);
  if (localSaved) {
    try {
      return JSON.parse(localSaved);
    } catch (e) {
      console.error('Lỗi parse local saved character:', e);
    }
  }
  return null;
};

// Lấy bảng xếp hạng cao thủ toàn server
export const fetchLeaderboard = async () => {
  const client = getSupabaseClient();
  if (client) {
    try {
      const { data, error } = await client
        .from('characters')
        .select('name, planet, power, attack, max_hp, quest_id')
        .order('power', { ascending: false })
        .limit(10);

      if (!error && data && data.length > 0) {
        return data;
      }
    } catch (err) {
      console.warn('Lỗi tải bảng xếp hạng từ Supabase:', err);
    }
  }

  // Mock dữ liệu bảng xếp hạng nếu chưa kết nối database
  return [
    { name: 'SonGoku_SSJ', planet: 0, power: 150000000, attack: 45000, max_hp: 850000, quest_id: 4 },
    { name: 'Vegeta_Prince', planet: 2, power: 148000000, attack: 48000, max_hp: 750000, quest_id: 4 },
    { name: 'Piccolo_Namek', planet: 1, power: 120000000, attack: 38000, max_hp: 990000, quest_id: 4 },
    { name: 'Gohan_Beast', planet: 0, power: 95000000, attack: 41000, max_hp: 600000, quest_id: 3 },
    { name: 'Broly_Legend', planet: 2, power: 85000000, attack: 49000, max_hp: 800000, quest_id: 3 },
    { name: 'Krillin_Destructo', planet: 0, power: 45000000, attack: 22000, max_hp: 350000, quest_id: 2 },
    { name: 'Nail_Hero', planet: 1, power: 38000000, attack: 21000, max_hp: 420000, quest_id: 2 }
  ];
};

// Gửi tin nhắn lên kênh chat
export const sendChatMessage = async (characterName, planet, message) => {
  const client = getSupabaseClient();
  if (client) {
    try {
      await client.from('chat_messages').insert([
        { character_name: characterName, planet, message, channel: 'world' }
      ]);
    } catch (e) {
      console.warn('Không thể gửi chat lên Supabase:', e);
    }
  }
};
