import React, { useState } from 'react';
import { X, Database, CheckCircle2, AlertCircle, Copy, ExternalLink, KeyRound } from 'lucide-react';
import { getSupabaseConfig, saveSupabaseConfig, getSupabaseClient } from '../services/supabase';

export const SupabaseModal = ({ onClose, onConnectionChanged }) => {
  const currentConfig = getSupabaseConfig();
  const [url, setUrl] = useState(currentConfig.url);
  const [key, setKey] = useState(currentConfig.key);
  const [testing, setTesting] = useState(false);
  const [statusMsg, setStatusMsg] = useState(null);
  const [copiedSql, setCopiedSql] = useState(false);

  const handleSaveAndTest = async () => {
    if (!url || !key) {
      setStatusMsg({ type: 'error', text: 'Vui lòng nhập đầy đủ Supabase URL và Anon Key!' });
      return;
    }

    setTesting(true);
    setStatusMsg(null);

    const saved = saveSupabaseConfig(url, key);
    if (!saved) {
      setTesting(false);
      setStatusMsg({ type: 'error', text: 'URL hoặc Key không hợp lệ.' });
      return;
    }

    try {
      const client = getSupabaseClient();
      const { data, error } = await client.from('characters').select('count', { count: 'exact', head: true });

      if (error && error.code !== 'PGRST116') {
        setStatusMsg({ 
          type: 'warning', 
          text: `Đã kết nối Supabase, nhưng chưa tìm thấy bảng 'characters' (${error.message}). Vui lòng chạy file 'schema.sql' trong Supabase SQL Editor!` 
        });
      } else {
        setStatusMsg({ type: 'success', text: 'Kết nối Supabase Cloud Database thành công rực rỡ!' });
      }
      if (onConnectionChanged) onConnectionChanged();
    } catch (err) {
      setStatusMsg({ type: 'error', text: `Lỗi kết nối: ${err.message}` });
    } finally {
      setTesting(false);
    }
  };

  const copySqlPath = () => {
    navigator.clipboard.writeText(`supabase/schema.sql`);
    setCopiedSql(true);
    setTimeout(() => setCopiedSql(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-gray-900 border-2 border-emerald-500 rounded-2xl w-full max-w-xl overflow-hidden shadow-2xl flex flex-col animate-in fade-in zoom-in-95 duration-150">
        {/* HEADER */}
        <div className="bg-gradient-to-r from-emerald-800 to-teal-950 px-5 py-3.5 flex justify-between items-center border-b border-emerald-700/50">
          <div className="flex items-center gap-2">
            <Database className="w-5 h-5 text-emerald-300" />
            <h3 className="font-bold text-lg text-white">Cấu Hình Supabase Cloud Database</h3>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-black/30 text-white transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* NỘI DUNG */}
        <div className="p-5 flex flex-col gap-4 text-xs">
          <p className="text-gray-300 leading-relaxed">
            Ngọc Rồng Web hỗ trợ lưu dữ liệu người chơi, chỉ số sức mạnh, hành trang và bảng xếp hạng trực tiếp trên <b>Supabase Cloud Database</b> (PostgreSQL).
          </p>

          {/* INPUT FORM */}
          <div className="space-y-3">
            <div>
              <label className="block text-gray-300 font-bold mb-1">
                Supabase Project URL:
              </label>
              <input 
                type="text" 
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://your-project.supabase.co"
                className="w-full bg-gray-950 border border-gray-700 focus:border-emerald-500 rounded-xl px-3 py-2 text-white font-mono outline-none transition"
              />
            </div>

            <div>
              <label className="block text-gray-300 font-bold mb-1">
                Supabase Anon / Public API Key:
              </label>
              <input 
                type="password" 
                value={key}
                onChange={(e) => setKey(e.target.value)}
                placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
                className="w-full bg-gray-950 border border-gray-700 focus:border-emerald-500 rounded-xl px-3 py-2 text-white font-mono outline-none transition"
              />
            </div>
          </div>

          {/* THÔNG BÁO TRẠNG THÁI */}
          {statusMsg && (
            <div className={`p-3 rounded-xl flex items-center gap-2 ${
              statusMsg.type === 'success' ? 'bg-emerald-950 border border-emerald-500 text-emerald-200' :
              statusMsg.type === 'warning' ? 'bg-amber-950 border border-amber-500 text-amber-200' :
              'bg-red-950 border border-red-500 text-red-200'
            }`}>
              {statusMsg.type === 'success' ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <AlertCircle className="w-4 h-4 text-amber-400" />}
              <span>{statusMsg.text}</span>
            </div>
          )}

          {/* HƯỚNG DẪN SQL TẠO BẢNG */}
          <div className="bg-gray-800/80 border border-gray-700 rounded-xl p-3 flex flex-col gap-2">
            <span className="font-bold text-yellow-400 flex items-center gap-1.5">
              <KeyRound className="w-4 h-4" /> File cấu trúc Database Supabase (Schema SQL):
            </span>
            <span className="text-gray-300 text-[11px] leading-relaxed">
              Dự án đã chuẩn bị sẵn file <code>supabase/schema.sql</code> chuyển đổi từ file <code>mad.sql</code> gốc. Bạn chỉ cần mở Supabase Dashboard ➜ SQL Editor ➜ Dán nội dung file và nhấn <b>RUN</b>.
            </span>
            <div className="flex items-center gap-2 mt-1">
              <button 
                onClick={copySqlPath}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-950 border border-gray-700 hover:border-gray-500 text-gray-200 font-mono transition"
              >
                <Copy className="w-3.5 h-3.5" /> {copiedSql ? 'Đã sao chép đường dẫn!' : 'supabase/schema.sql'}
              </button>
              <a 
                href="https://supabase.com/dashboard" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white font-bold transition ml-auto"
              >
                Mở Supabase <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="p-4 bg-gray-950 border-t border-gray-800 flex justify-between items-center">
          <span className="text-[11px] text-gray-400">
            * Nếu không điền, game vẫn lưu tự động vào LocalStorage trình duyệt.
          </span>
          <div className="flex items-center gap-2">
            <button 
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-gray-800 hover:bg-gray-700 text-white transition"
            >
              Hủy
            </button>
            <button 
              onClick={handleSaveAndTest}
              disabled={testing}
              className="px-5 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition shadow disabled:opacity-50"
            >
              {testing ? 'Đang kiểm tra...' : 'Lưu & Kết Nối'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
