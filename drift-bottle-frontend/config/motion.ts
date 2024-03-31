export function slideInFromLeft(delay:number = 0.2) {
  return {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay,
        duration: 0.5,
      }
    }
  }
}

export function slideInFromRight(delay:number = 0.2) {
  return {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay,
        duration: 0.5,
      }
    }
  }
}
export function slideInFromTop(delay:number = 0.2) {
  return {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay,
        duration: 0.5,
      }
    }
  }
}
export function slideInFromBottom(delay:number = 0.2) {
  return {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        delay,
        duration: 0.5,
      }
    }
  }
}