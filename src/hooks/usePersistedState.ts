import { useState } from 'react';

function usePersistedState<T>(key: string, defaultValue: T): [T, (value: T) => void] {
    const [state, setState] = useState<T>(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (error) {
            console.error(`Error loading ${error} from localstorage:`, error);
            return defaultValue;
        }
    });
    const setValue = (value: T) => {
        try {
            setState(value);
            if (value === null || value === undefined) {
                localStorage.removeItem(key);
            } else {
                localStorage.setItem(key, JSON.stringify(value));
            }
        } catch (error) {
            console.error(`Error saving ${key} to localstorage: `, error);
        }
    };
    return [state, setValue];
}

export default usePersistedState;
