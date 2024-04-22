export const animatePropForTitle = {
    visible: { scale: 1, transition: { duration: 1 } },
    hidden: { scale: 0 },
};

export const animatePropForArticle = {
    visible: { scale: 1, opacity: 1, y: "0px", transition: { duration: 1.5 } },
    hidden: { scale: 0, opacity: 0, y: "400px" },
};
  
export const animatePropForImageFrom = {
    visible: { scale: 1, opacity: 1, transition: { duration: 1.5 } },
    hidden: { scale: 0, opacity: 0 },
}