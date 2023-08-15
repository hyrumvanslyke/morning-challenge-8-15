function nextSquare(n){// function to find the next perfect square
    if(Math.sqrt(n) % 1 !== 0)// if number is not a perfect square return -1
    {
        return -1
    }else {
       let newSquare = Math.sqrt(n) + 1// set the square root + 1 equal to a new variable 
       return newSquare * newSquare// return the new variable squared to give you the next perfect square
    }
}
console.log(nextSquare(9))// logged for testing
console.log(nextSquare(16))// logged for testing
console.log(nextSquare(25))// logged for testing
console.log(nextSquare(36))// logged for testing