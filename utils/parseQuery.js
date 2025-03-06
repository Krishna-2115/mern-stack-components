export const parseQuery = (query) => {
    return new URLSearchParams(query).toString();
};
