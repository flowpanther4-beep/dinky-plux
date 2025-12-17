export const mockHome = {
  topStory: {
    title: 'Coalición anuncia pacto fiscal y pone a prueba la gobernabilidad',
    summary:
      'El bloque oficialista logró un acuerdo de último minuto para destrabar el paquete fiscal, mientras la oposición prepara condiciones para apoyar en el Senado.',
    image:
      'https://images.unsplash.com/photo-1529101091764-c3526daf38fe?auto=format&fit=crop&w=1400&q=80',
    source: 'Agencia Federal',
    publishedAt: '2024-06-02T14:30:00Z',
    category: 'Congreso',
    isBreaking: true,
  },
  trackerStats: [
    {
      id: 'mandate-1',
      label: 'Reformas aprobadas',
      value: '12/20',
      deltaText: '+2 esta semana',
      updatedAt: '2024-06-02T10:00:00Z',
      source: 'Oficina Legislativa',
      route: 'MandateTracker',
    },
    {
      id: 'mandate-2',
      label: 'Índice de apoyo',
      value: '61%',
      deltaText: '+3 pts',
      updatedAt: '2024-06-02T09:15:00Z',
      source: 'Barómetro Cívico',
      route: 'ApprovalIndex',
    },
    {
      id: 'mandate-3',
      label: 'Cumplimiento de agenda',
      value: '48%',
      deltaText: '-1.4 pts',
      updatedAt: '2024-06-02T08:45:00Z',
      source: 'Observatorio 360',
      route: 'AgendaProgress',
    },
  ],
  predictionsSummary: {
    accuracyPct: 78,
    activePredictionTitle: 'Gobierno asegurará 3 votos clave en comisión',
    leaderboardPreview: [
      { name: 'Analista_Ruta9', score: 942 },
      { name: 'CivicoLab', score: 875 },
      { name: 'DataPulse', score: 860 },
    ],
  },
  news: [
    {
      id: 'n1',
      title: 'La oposición define línea roja para la negociación del presupuesto',
      source: 'Diario Capital',
      publishedAt: '2024-06-02T12:40:00Z',
      category: 'Economía',
    },
    {
      id: 'n2',
      title: 'Gobernadores se reúnen para coordinar agenda federal y presionar por fondos',
      source: 'El Federal',
      publishedAt: '2024-06-02T11:20:00Z',
      category: 'Provincias',
    },
    {
      id: 'n3',
      title: 'Comisión bicameral adelanta dictamen sobre transparencia judicial',
      source: 'La Voz Pública',
      publishedAt: '2024-06-02T10:10:00Z',
      category: 'Justicia',
    },
    {
      id: 'n4',
      title: 'Oficialismo acelera cambios en ley de financiamiento electoral',
      source: 'Agencia Federal',
      publishedAt: '2024-06-02T08:50:00Z',
      category: 'Electoral',
    },
  ],
};
