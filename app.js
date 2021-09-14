console.log("tests")

const factor = function(num){
    let outputString = ""

    if (num % 3 === 0 ){
        outputString += "Pling";
    }  
    if (num % 5 === 0){
        outputString += "Plang";
    }
    if (num % 7 === 0) {
        outputString += "Plong";
    }
    return outputString === "" ? num : outputString

}

console.log(factor(28))
console.log(factor(1755))
console.log(factor(34))