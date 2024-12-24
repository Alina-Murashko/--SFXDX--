export const trimString = (str: string, startChars: number, endChars: number) => {
    const strLength = str.length;

    if (startChars + endChars >= strLength) {
        return str;
    }
    const startPart = str.slice(0, startChars);
    const endPart = str.slice(strLength - endChars);

    return `${startPart}...${endPart}`;
}

export const getRandomInRange = (min: number, max: number): number => {
    return Math.random() * (max - min) + min;
};

export const copyToClipboard = async (text: string) => {
    try {
        await navigator.clipboard.writeText(text);
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
}
