export const animatePropsForSmallerPictures = {
    visible: { scale: 1, transition: { duration: 1 } },
    hidden: { scale: 0}
}

export const animatePropsForMediumPictures = {
    visible: { opacity: 1, rotate: 0, transition: { duration: 1} },
    hidden: { opacity: 0, rotate: 180 }
}

export const animatePropsForBiggerPictures = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 }
}

export const animatePropsForSmallerCircle = {
    visible: { x: '0px', transition: { duration: 1 } },
    hidden: { x: '-600px' }
}

export const animatePropsForBiggerCircle = {
    visible: { y: ['10px', '-100px', '0px'], opacity: 1, transition: { duration: 1 } },
    hidden: { y: '-20px', opacity: 0}
}