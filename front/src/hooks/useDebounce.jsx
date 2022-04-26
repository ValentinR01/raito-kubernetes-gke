export default function useDebounce() {
    let timeout = null;

    return (func, delay, param) => {
        clearTimeout(timeout);

        timeout = setTimeout(() => {
            func(param);

            clearTimeout(timeout);
        }, delay);
    };
}
