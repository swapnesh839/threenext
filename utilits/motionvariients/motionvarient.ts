export function slideInFromLeft(delay: number) {
    return {
      hidden: { x: -90, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          delay: delay,
          duration: 0.8,
          type: "spring"
        },
      },
    };
  }
  
  export function slideInFromRight(delay: number) {
    return {
      hidden: { x: 90, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          delay: delay,
          duration: 0.8,
          type: "spring"
        },
      },
    };
  }
  
  export const slideInFromTop = {
    hidden: { y: -90, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.8,
        type: "spring"
      },
    },
  };