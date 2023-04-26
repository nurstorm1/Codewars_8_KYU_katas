function uniTotal(string) {
    let suma = 0;
    for (let i = 0; i < string.length; i++) {
        let char_code = string[i].charCodeAt(0);
        suma += char_code;
    }
    return suma;
}