export function toRoman(aNumber: number): String {
    if (aNumber === 0) {
        return "";
    }
    return "I" + toRoman(aNumber-1)
}