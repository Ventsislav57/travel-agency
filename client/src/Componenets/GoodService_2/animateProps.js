export const animatePropsForText = {
    visible: { x: '0px', transition: { duration: 1 } },
    hidden:  { x: '-800px' }
}

export const animatePropsForBigCircle = {
    visible: { scale: 1, transition: { duration: 1 } },
    hidden: { scale: 0 }
}

export const animatePropsForImg = {
    visible: { scale: 1, rotate: 0, transition: { duration: 1 } },
    hidden: { scale: 0, rotate: -120 }
}

export const animatePropsForSmallCircle = {
    visible: { scale: [0, 1.7, 1], transition: { duration: 1 } },
    hidden: { scale: 0 }
}