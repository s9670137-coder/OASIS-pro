// مصدر بيانات موحّد لكل الطبقات الخمس
// المنطق: كل طبقة تغذي التالية (closed-loop)
// لاحقاً: نستبدل mockMetrics ببيانات حقيقية من API/قاعدة بيانات

export interface LayerMetric {
  label: string;
  value: string;
  unit: string;
}

export interface Layer {
  id: string;            // يُستخدم في الرابط: /layer/:id
  order: number;
  name: string;
  nameAr: string;
  tagline: string;
  color: 'water' | 'energy' | 'carbon';
  icon: string;           // اسم Tabler icon
  description: string;
  mockMetrics: LayerMetric[];
}

export const layers: Layer[] = [
  {
    id: 'sensing',
    order: 1,
    name: 'Sensing Layer',
    nameAr: 'طبقة الاستشعار',
    tagline: 'Real-time data collection from the field',
    color: 'water',
    icon: 'ti-antenna',
    description:
      'تجمع هذه الطبقة بيانات حية لحظية من الحساسات الموزعة — استهلاك المياه، الطاقة، ومستويات الانبعاثات من المصدر مباشرة، لتغذية بقية النظام ببيانات دقيقة ومحدثة.',
    mockMetrics: [
      { label: 'Active Sensors', value: '142', unit: 'units' },
      { label: 'Data Points / Day', value: '18.4K', unit: 'points' },
      { label: 'Uptime', value: '99.2', unit: '%' },
    ],
  },
  {
    id: 'data',
    order: 2,
    name: 'Data Layer',
    nameAr: 'طبقة البيانات',
    tagline: 'Unified storage and processing core',
    color: 'water',
    icon: 'ti-database',
    description:
      'كل القراءات القادمة من طبقة الاستشعار تُخزّن وتُعالج هنا — قاعدة بيانات موحدة تنظّم المعلومات وتجهزها لتحليل الذكاء الاصطناعي في الطبقة التالية.',
    mockMetrics: [
      { label: 'Records Stored', value: '2.1M', unit: 'rows' },
      { label: 'Processing Time', value: '340', unit: 'ms avg' },
      { label: 'Storage Used', value: '4.8', unit: 'GB' },
    ],
  },
  {
    id: 'intelligence',
    order: 3,
    name: 'Intelligence Layer',
    nameAr: 'طبقة الذكاء',
    tagline: 'AI-driven pattern analysis and prediction',
    color: 'energy',
    icon: 'ti-brain',
    description:
      'هنا يعمل الذكاء الاصطناعي — يحلل الأنماط في البيانات المخزّنة، يتوقع الأعطال قبل حدوثها، ويقترح القرارات المثلى لتحسين استهلاك الموارد.',
    mockMetrics: [
      { label: 'Predictions Made', value: '1,204', unit: 'this month' },
      { label: 'Accuracy Rate', value: '94.7', unit: '%' },
      { label: 'Faults Prevented', value: '23', unit: 'incidents' },
    ],
  },
  {
    id: 'optimization',
    order: 4,
    name: 'Optimization Layer',
    nameAr: 'طبقة التحسين',
    tagline: 'Translating insights into real action',
    color: 'carbon',
    icon: 'ti-adjustments',
    description:
      'تطبّق هذه الطبقة قرارات الذكاء الاصطناعي فعلياً — تقليل هدر المياه، إعادة توزيع الطاقة بكفاءة أعلى، وخفض الانبعاثات الكربونية تلقائياً.',
    mockMetrics: [
      { label: 'Water Saved', value: '12.3', unit: '%' },
      { label: 'Energy Optimized', value: '8.6', unit: '%' },
      { label: 'CO₂ Reduced', value: '340', unit: 'kg/month' },
    ],
  },
  {
    id: 'feedback',
    order: 5,
    name: 'Feedback Layer',
    nameAr: 'طبقة التغذية الراجعة',
    tagline: 'Closing the loop back to sensing',
    color: 'energy',
    icon: 'ti-refresh',
    description:
      'تقيس هذه الطبقة نتائج التحسين وترجعها إلى طبقة الاستشعار — لتُغلق الحلقة وتجعل النظام يتعلم ويتحسّن باستمرار دون تدخل بشري.',
    mockMetrics: [
      { label: 'Loop Cycles / Day', value: '288', unit: 'cycles' },
      { label: 'System Improvement', value: '+3.1', unit: '% / week' },
      { label: 'Response Time', value: '1.8', unit: 'sec' },
    ],
  },
];

export function getLayerById(id: string): Layer | undefined {
  return layers.find((l) => l.id === id);
}
