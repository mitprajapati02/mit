const numbersArray = [1, 2, 3, 4,1,2,1,5, 5];


const getUniqueNumbers = (numbersArray) => {
    let uniqueNumbers = [];
    numbersArray.forEach(number => {
        if (!uniqueNumbers.includes(number)) {
            uniqueNumbers.push(number);
        }
    });
    return uniqueNumbers;
}



console.log(getUniqueNumbers(numbersArray));
