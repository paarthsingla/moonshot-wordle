export const updateWordleState = () => {
    try {
        const savedState = localStorage.getItem('wordleState');
        if (savedState!==null) {
            return JSON.parse(savedState);
        }
        return undefined;
    } catch (error) {
        return undefined;
    }
};
export const saveWordleState = (payload) => {
    try {
        const saveState = JSON.stringify(payload);
        localStorage.setItem('wordleState', saveState);
    } catch (error) {
        console.log(error);
    }
};