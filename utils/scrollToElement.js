export const scrollToElement = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};
