export function toRoman(aNumber: number): String {
    let romanNumber: String = "";
    while (aNumber > 0) {
        aNumber --;
        romanNumber += "I";
    }
    return romanNumber;
}