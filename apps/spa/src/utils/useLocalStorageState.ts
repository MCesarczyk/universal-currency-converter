import { useState, useEffect, Dispatch } from "react";

export const useLocalStorageState = (keyName: string, initialValue: string): [string, Dispatch<string>] => {
    const getInitialState = () => {
        const localStorageState = localStorage.getItem(keyName);
        if (localStorageState === null) {
            return initialValue;
        }

        const keyFromLocalStorage = localStorage.getItem(keyName);

        if (keyFromLocalStorage === null) {
            return initialValue;
        }

        return JSON.parse(keyFromLocalStorage);
    };
    const [state, setState] = useState(getInitialState);

    useEffect(() => {
        localStorage.setItem(keyName, JSON.stringify(state))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state]);

    return [state, setState];
};
