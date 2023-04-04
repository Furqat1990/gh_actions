let str = "AABBBCDEEEEE".split('');
let countOfChars = str.reduce((obj, char) => {
    obj[char] = obj[char] + 1 || 1;
    return obj;
}, {});
let selectedChars = "";
Object.entries(countOfChars).forEach(item => {
    if (item[1] > 1) {
        selectedChars += item[0] + item[1];
    }
});
console.log(selectedChars);