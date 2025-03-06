export const uniqueId = () => {
    return `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
};
