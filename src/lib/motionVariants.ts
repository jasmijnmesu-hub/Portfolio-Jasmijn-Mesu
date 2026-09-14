export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export const cardStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export const fadeUpTransition = { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const };
