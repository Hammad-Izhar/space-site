import { useLayoutEffect, useState } from "react";

type Callback<T> = () => T;

export const useResizeCapture = <T,>(
    callback: Callback<T>,
    initialValue: T
): T => {
    const [val, setVal] = useState<T>(initialValue);

    useLayoutEffect(() => {
        const updateVal = () => {
            setVal(callback());
        };

        window.addEventListener("resize", updateVal, true);
        updateVal();
        return () => window.removeEventListener("resize", updateVal, true);
    }, [callback]);

    return val;
};
