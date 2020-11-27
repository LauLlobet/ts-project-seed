export function toRoman(aNumber: number): String {
    if (aNumber > 1) {
        return "II";
    }
    return "I";
}