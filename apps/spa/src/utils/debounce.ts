export const debounce = <A,R>(callback: (args: A) => R, wait: number) => {
    let timeoutId: number | undefined;

    return (...args: A[]) => {
        window.clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => {
            callback(args as A);
        }, wait);
    };
};