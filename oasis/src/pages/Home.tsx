import { useNavigate } from 'react-router-dom';
import { layers } from '../data/layers';

const colorMap = {
  water: { text: 'text-water', border: 'border-water/30', bg: 'bg-water/10', glow: 'glow-water' },
  energy: { text: 'text-energy', border: 'border-energy/30', bg: 'bg-energy/10', glow: 'glow-energy' },
  carbon: { text: 'text-carbon', border: 'border-carbon/30', bg: 'bg-carbon/10', glow: 'glow-carbon' },
};

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-bg text-white">

      {/* ── Navbar ────────────────────────────────────────── */}
      <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-energy animate-pulse-soft" />
          <span className="font-syne font-700 text-lg tracking-wide">OASIS</span>
        </div>
        <div className="hidden sm:flex gap-6 text-sm text-white/50">
          <a href="#layers" className="hover:text-white transition">System</a>
          <a href="#about" className="hover:text-white transition">About</a>
        </div>
      </nav>

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-12 relative overflow-hidden">
        <div className="absolute -top-20 right-0 w-72 h-72 rounded-full bg-energy/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-0 w-64 h-64 rounded-full bg-water/15 blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-white/50 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-energy" />
            Omani Autonomous System for Intelligent Sustainability
          </div>

          <h1 className="font-syne font-700 text-4xl sm:text-5xl leading-tight mb-4 max-w-2xl">
            Water. Energy. Carbon.<br />
            <span className="text-energy">One closed loop.</span>
          </h1>

          <p className="text-white/50 text-base max-w-lg mb-8 leading-relaxed">
            نظام مستقل يربط دورة المياه والطاقة والكربون عبر خمس طبقات ذكية،
            مدعوم بالذكاء الاصطناعي لمراقبة وتحسين الاستدامة في عُمان لحظياً.
          </p>

          <div className="flex gap-3 flex-wrap">
            <a href="#layers" className="bg-energy text-bg font-medium px-5 py-2.5 rounded-lg text-sm hover:opacity-90 transition">
              استكشف النظام
            </a>
            <a href="#about" className="border border-white/15 px-5 py-2.5 rounded-lg text-sm text-white/70 hover:bg-white/5 transition">
              عن المشروع
            </a>
          </div>
        </div>
      </section>

      {/* ── Mini Dashboard ───────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-surface border border-white/10 rounded-2xl p-5 sm:p-6">
          <div className="flex items-center justify-between mb-5">
            <p className="text-xs text-white/35 uppercase tracking-wider">Live Overview</p>
            <span className="flex items-center gap-1.5 text-xs text-energy">
              <span className="w-1.5 h-1.5 rounded-full bg-energy animate-pulse-soft" />
              System Active
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white/[0.03] border border-water/20 rounded-xl p-4">
              <p className="text-xs text-white/40 mb-1">Water Efficiency</p>
              <p className="text-2xl font-syne font-700 text-water">87%</p>
            </div>
            <div className="bg-white/[0.03] border border-energy/20 rounded-xl p-4">
              <p className="text-xs text-white/40 mb-1">Energy Optimized</p>
              <p className="text-2xl font-syne font-700 text-energy">62%</p>
            </div>
            <div className="bg-white/[0.03] border border-carbon/20 rounded-xl p-4">
              <p className="text-xs text-white/40 mb-1">Carbon Reduced</p>
              <p className="text-2xl font-syne font-700 text-carbon">-34%</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5 Layer Cards ─────────────────────────────────────── */}
      <section id="layers" className="max-w-6xl mx-auto px-6 pb-20">
        <p className="text-xs text-white/35 uppercase tracking-wider mb-2">System Architecture</p>
        <h2 className="font-syne font-700 text-2xl mb-8">خمس طبقات، حلقة واحدة مغلقة</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {layers.map((layer) => {
            const c = colorMap[layer.color];
            return (
              <button
                key={layer.id}
                onClick={() => navigate(`/layer/${layer.id}`)}
                className={`text-left bg-surface border ${c.border} rounded-2xl p-5 hover:${c.glow} transition group relative overflow-hidden`}
              >
                <div className={`w-10 h-10 rounded-lg ${c.bg} flex items-center justify-center mb-4`}>
                  <i className={`ti ${layer.icon} text-lg ${c.text}`} aria-hidden="true" />
                </div>

                <p className="text-xs text-white/35 mb-1">Layer {layer.order} / 5</p>
                <h3 className="font-syne font-700 text-lg mb-1.5">{layer.name}</h3>
                <p className="text-sm text-white/45 mb-4 leading-relaxed">{layer.tagline}</p>

                <span className={`text-xs ${c.text} flex items-center gap-1 group-hover:gap-2 transition-all`}>
                  عرض التفاصيل
                  <i className="ti ti-arrow-left text-sm" aria-hidden="true" />
                </span>
              </button>
            );
          })}

          {/* AI Card — special */}
          <div className="bg-gradient-to-br from-energy/10 to-water/10 border border-energy/30 rounded-2xl p-5 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-energy/15 flex items-center justify-center mb-4">
                <i className="ti ti-sparkles text-lg text-energy" aria-hidden="true" />
              </div>
              <h3 className="font-syne font-700 text-lg mb-1.5">AI Assistant</h3>
              <p className="text-sm text-white/45 leading-relaxed">اسأل النظام مباشرة عن أي طبقة أو بيانات حية</p>
            </div>
            <p className="text-xs text-white/35 mt-4">اضغط على الأيقونة أسفل الصفحة ↘</p>
          </div>
        </div>
      </section>

      {/* ── About ─────────────────────────────────────────────── */}
      <section id="about" className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-surface border border-white/10 rounded-2xl p-6 sm:p-8">
          <p className="text-xs text-white/35 uppercase tracking-wider mb-2">About</p>
          <h2 className="font-syne font-700 text-2xl mb-4">عن المشروع</h2>
          <p className="text-white/55 leading-relaxed max-w-2xl">
            OASIS هو نظام مستقل يهدف لمعالجة العلاقة المترابطة بين المياه والطاقة والكربون في عُمان،
            من خلال معمارية خمس طبقات تعمل بحلقة مغلقة — من الاستشعار إلى التحليل بالذكاء الاصطناعي
            إلى التحسين الفعلي للموارد، دون الحاجة لتدخل بشري مستمر.
          </p>
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-6 pb-10 text-center text-xs text-white/25">
        OASIS — Omani Autonomous System for Intelligent Sustainability
      </footer>
    </div>
  );
}
