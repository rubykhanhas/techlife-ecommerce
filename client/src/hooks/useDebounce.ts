import { useEffect, useState } from "react";

function useDebounce(watch: any, delay: number) {
    const [value, setValue] = useState(watch);

    useEffect(() => {
        const timer = setTimeout(() => {
            setValue(watch);
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    }, [watch, delay]);

    return value;
}

export default useDebounce;
