
/**
 * @description This function takes a string of numbers separated by a delimiter and returns their sum
 * @param {string} str a string of numbers separated by a delimiter. | e.g. "1\n2,3", "1,5", "//;\n1;2;3"(here ";" is the custom delimiter)
 * @returns {number} the sum of the numbers in the string
 * @throws {Error} if the string contains a non number
 */
function add(str) {
    let sum = 0;
    // Defining default delimiter
    const delimiter = [",", "\n"];
    if(str.startsWith("//")) {
        // if custom delimiter is provided in string we set it as delimiter
        delimiter.push(str.slice(2, 3));
        str = str.slice(3);
    }
    try {
        // Splitting the numbers into an array | e.g. "1\n2,3" -> [1,2,3]
        const regex = new RegExp(delimiter.join("|"), "g");
        const numbersArr = str.trim("").split(regex);
        
        // Looping on array to calculate the sum
        numbersArr.map((num) => {
            if(!num) {
                return;
            }
            // Parsing the number into an integer
            const parsedNum = parseInt(num);
            if (isNaN(parsedNum)) {
                // Throwing an error if the number is not a number
                throw new Error("Invalid number | Not a valid number");
            }
            // Adding the number to the sum
            sum += parsedNum;
        });
    } catch (err) {
        console.error(`Error while adding numbers | params: ${str} | Error: ${err.message}`);
        // Resetting sum in case of an error.
        sum = 0;
    }
    return sum;
}

const sum1 = add("");
const sum2 = add("1");
const sum3 = add("1,5");
const sum4 = add("1\n2,3");

console.log({ sum1, sum2, sum3, sum4 });
