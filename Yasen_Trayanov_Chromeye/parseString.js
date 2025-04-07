/**
 * parseString outputs every word wrapped in <div> and if brackets wrap the word, they should wrap div
 * @param {str} string - string containing letters, digits and {}
 */

const parseString = (str) => {
    const notMatchingBrackets = (inp) => {
        const openings = inp.match(/{/g);
        const closings = inp.match(/}/g);

        if(openings.length !== closings.length) {
            throw new Error();
        }
    }

    const isInsideBrackets = (inp) => {
        return inp.startsWith("{") && inp.endsWith("}");
    }

    const removeBracket = (inp) => {
        return inp.substring(1, inp.length - 1);
    }

    try {
        notMatchingBrackets(str);
    } catch (error) {
        throw new Error("Invalid format");
    }

    str = str.trim();
    const insideBrackets = isInsideBrackets(str);
    let output = insideBrackets ? removeBracket(str) : str;

    output = output.split(" ").map((word) => {
        if (isInsideBrackets(word)) {
            return word.replace("{", "{<div>").replace("}", "</div>}");
            // return `{<div>${removeBracket(word)}</div>}`
        } else {
            return `<div>${word}</div>`
        }
    }).join(" ");

    return insideBrackets ? `{${output}}` : output;
}

console.log(parseString("word1 {word2}")); // „<div>word1</div> {<div>word2</div>}”
console.log(parseString("{word1 word2}")); // „{<div>word1</div> <div>word2</div>}“
console.log(parseString("{word1 {word2}}")); // „{<div>word1</div> {<div>word2</div>}}“