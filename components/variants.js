const contentVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const childVariants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const opacityVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export { contentVariants, childVariants, opacityVariants };
