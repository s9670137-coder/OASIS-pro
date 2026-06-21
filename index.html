import { useParams, useNavigate, Link } from 'react-router-dom';
import { getLayerById, layers } from '../data/layers';

const colorMap = {
  water: { text: 'text-water', border: 'border-water/30', bg: 'bg-water/10', glow: 'glow-water' },
  energy: { text: 'text-energy', border: 'border-energy/30', bg: 'bg-energy/10', glow: 'glow-energy' },
  carbon: { text: 'text-carbon', border: 'border-carbon/30', bg: 'bg-carbon/10', glow: 'glow-carbon' },
};

export default function LayerDetail() {
  // useParams يقرأ ":id" من الرابط — هذا سحر الـ dynamic routing
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const layer = getLayerById(id ?? '');

  // لو حد كتب رابط غلط مثل /layer/xyz
  if (!layer) {
    return (
      <div className="min-h-screen bg-bg text-white flex flex-col items-center justify-center gap-4">
        <p className="text-white/50">هذه الطبقة غير موجودة</p>
        <button onClick={() => navigate('/')} className="text-energy text-sm underline">
          الرجوع للرئيسية
        </button>
      </div>
    );
  }

  const c = colorMap[layer.color];

  // الطبقة السابقة والتالية — لتسهيل التنقل بين الطبقات (closed-loop UX)
  const currentIndex = layers.findIndex((l) => l.id === layer.id);
  const prevLayer = layers[(currentIndex - 1 + layers.length) % layers.length];
  const nextLayer = layers[(currentIndex + 1) % layers.length];

  return (
    <div className="min-h-screen bg-bg text-white">

      {/* Navbar */}
      <nav className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-energy animate-pulse-soft" />
          <span className="font-syne font-700 text-lg tracking-wide">OASIS</span>
        </Link>
        <button onClick={() => navigate('/')} className="text-sm text-white/50 hover:text-white transition flex items-center gap-1.5">
          <i className="ti ti-arrow-right text-base" aria-hidden="true" />
          الرئيسية
        </button>
      </nav>

      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 pt-8 pb-10">
        <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center mb-5`}>
          <i className={`ti ${layer.icon} text-xl ${c.text}`} aria-hidden="true" />
        </div>

        <p className={`text-xs ${c.text} uppercase tracking-wider mb-2`}>Layer {layer.order} / 5</p>
        <h1 className="font-syne font-700 text-3xl sm:text-4xl mb-2">{layer.name}</h1>
        <p className="text-white/45 mb-1">{layer.nameAr}</p>
        <p className="text-white/55 text-base max-w-xl leading-relaxed mt-4">{layer.description}</p>
      </section>

      {/* Live Metrics */}
      <section className="max-w-4xl mx-auto px-6 pb-10">
        <div className="bg-surface border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-5">
            <p className="text-xs text-white/35 uppercase tracking-wider">Live Metrics</p>
            <span className="text-[10px] text-white/30 bg-white/5 px-2 py-1 rounded-full">Mock data — sensor integration pending</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {layer.mockMetrics.map((m) => (
              <div key={m.label} className={`bg-white/[0.03] border ${c.border} rounded-xl p-4`}>
                <p className="text-xs text-white/40 mb-1.5">{m.label}</p>
                <p className={`text-2xl font-syne font-700 ${c.text}`}>{m.value}</p>
                <p className="text-[10px] text-white/30 mt-0.5">{m.unit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loop Navigation — prev / next layer */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <p className="text-xs text-white/35 uppercase tracking-wider mb-3">Closed Loop Navigation</p>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => navigate(`/layer/${prevLayer.id}`)}
            className="bg-surface border border-white/10 rounded-xl p-4 text-left hover:border-white/20 transition"
          >
            <p className="text-[10px] text-white/35 mb-1 flex items-center gap-1">
              <i className="ti ti-arrow-left text-xs" aria-hidden="true" />
              السابقة
            </p>
            <p className="text-sm font-medium">{prevLayer.name}</p>
          </button>
          <button
            onClick={() => navigate(`/layer/${nextLayer.id}`)}
            className="bg-surface border border-white/10 rounded-xl p-4 text-right hover:border-white/20 transition"
          >
            <p className="text-[10px] text-white/35 mb-1 flex items-center gap-1 justify-end">
              التالية
              <i className="ti ti-arrow-right text-xs" aria-hidden="true" />
            </p>
            <p className="text-sm font-medium">{nextLayer.name}</p>
          </button>
        </div>
      </section>
    </div>
  );
}
