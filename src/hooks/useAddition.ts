import { useState } from 'react';

export const useAddition = () => {
    const [num1, setNum1] = useState<number | string>("");
    const [num2, setNum2] = useState<number | string>("");

    const calculateSum = () => {
        const sum = Number(num1) + Number(num2);
        alert(`The result is: ${sum}`);
    };

    return {
        num1,
        num2,
        setNum1,
        setNum2,
        calculateSum
    };
};