function find(array, element) {
    if (array.includes(element)) {
        return array.indexOf(element);
    } else {
        return "Not found";
    }
}