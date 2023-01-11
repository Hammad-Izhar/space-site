import { useLayoutEffect, useState } from "react";

type Callback<T> = () => T;

export const useScrollCapture = <T,>(
    callback: Callback<T>,
    initialValue: T
): T => {
    const [val, setVal] = useState<T>(initialValue);

    useLayoutEffect(() => {
        const updateVal = () => {
            setVal(callback());
        };

        window.addEventListener("scroll", updateVal, true);
        updateVal();
        return () => window.removeEventListener("scroll", updateVal, true);
    }, [callback]);

    return val;
};
