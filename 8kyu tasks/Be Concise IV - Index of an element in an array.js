function find(array, element) {
    if (array.includes(element)) {
        return array.indexOf(element);
    } else {
        return "Not found";
    }
}

//function find(a, b) {
//return a.indexOf(b) >= 0 ? a.indexOf(b) : "Not found";
//}