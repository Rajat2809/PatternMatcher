

const { readFile } = require('fs/promises');

// Get strings from file
const getInput = async () => {
    const result = await readFile('input.txt', 'binary')
    const inputs = result.split('\n');
    return inputs;
}

// Return an object for strings inside bracket and outside bracket
const seperator = (row) => {
    const allStrings = row.trim().replace(']', '[').split('[');
    const map = { bracket: [], nonBracket: [] }
    allStrings.forEach((s, i) => {
        if (i % 2 == 0) map['nonBracket'].push(s);
        else map['bracket'].push(s)
    })

    return map;
}
// Check if string inside bracket is not palindrome
const isPalindromeBracket = (strs) => {
    for (let j = 0; j < strs.length; j++) {
        const checkPalindrome = isPalindrome(strs[j]);
        if (checkPalindrome) return false;
    }
    return true;
}

// Check if non bracket strings have palindrome
const isPalindromeNonBracket = (strs) => {
    for (let j = 0; j < strs.length; j++) {
        const checkPalindrome = isPalindrome(strs[j]);
        if (checkPalindrome) return true;
    }
    return false;
}

// Check if the sub-string of 4 is palindrome
const isPalindrome = (str) => {
    let i = 0;
    let fourLetterWord;
    while (i < (str.length - 3)) {
        fourLetterWord = str.substring(i, i + 4);
        if (fourLetterWord == [...fourLetterWord].reverse().join('')) return true;
        i += 1;
    }
    return false;
}

// Log if string is valid or not
const parseInput = (allRows) => {
    let isValid = true;
    for (let i = 0; i < allRows.length; i++) {
        let separateStrings = seperator(allRows[i]);
        const validBracket = isPalindromeBracket(separateStrings['bracket']);

        const validNonBracket = isPalindromeNonBracket(separateStrings['nonBracket'])
        if (validBracket && validNonBracket) {
            // Log with setting color as green
            console.log('\x1b[32m%s\x1b[0m', "Valid string: " + allRows[i]);
        }
        else {
            // Log with settting color red
            console.log('\x1b[31m%s\x1b[0m', "Invalid string: " + allRows[i])
        }
    }
}

// Main function
const main = async () => {
    const allRows = await getInput();
    parseInput(allRows);
}

main();
