function strCount(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i];
        if (currentChar === letter) {
            count++;
        }
    }
    return count;
}