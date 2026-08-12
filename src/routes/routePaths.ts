export const routePaths = {
  home: '/',
  objectives: '/objectifs',
  taskWheel: '/objectifs/roue-des-taches',
  icebreaker: '/objectifs/brise-glace',
  moodBarometer: '/objectifs/barometre-humeur',
  process: '/demarche',
  about: '/about-me',
  objective: (objectiveId: string) => `/objectifs/${objectiveId}`,
} as const
