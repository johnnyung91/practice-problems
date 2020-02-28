function biggerWords(string, array) {
    var bigWordsArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > string.length) {
            bigWordsArray.push(array[i]);
        }
    }
    return bigWordsArray;
}
