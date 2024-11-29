/**
 * Adds a series of comma-separated numbers.
 * 
 * @param {string} numbers - A string containing numbers separated by commas.
 * @returns {number} The sum of the numbers.
 * @throws Will throw an error if any of the inputs are not valid numbers.
 */
function add(numbers) {
    let sum = 0;
    try {
        // Splitting the numbers into an array | e.g. "1,2,3" -> [1,2,3]
        const numbersArr = numbers.trim("").split(",");
        // Looping on array to calculate the sum
        numbersArr.map((num) => {
            // Parsing the number into an integer
            const parsedNum = parseInt(num);
            if (isNaN(parsedNum)) {
                // Throwing an error if the number is not a number
                throw new Error("Invalid number | Not a number");
            }
            // Adding the number to the sum
            sum += parsedNum;
        });
    } catch (err) {
        console.error(`Error while adding numbers | Error: ${err.message}`);
        // Resetting sum in case of an error.
        sum = 0;
    }
    return sum;
}

const sum1 = add("");
const sum2 = add("1");
const sum3 = add("1,5");

console.log({ sum1, sum2, sum3 });
