//
// File: main.js
// Date: 5/24/2022
// 

const ex1 = () => {
    const array = [1, '2', 3, 'test', 1.2];
    console.log(countNumbers(array));
}

const ex2 = () => {
    const array = [12, 55, 2, 55, 11];
    console.log(minNumber (array));
    // TODO...
}

const ex3 = () => {
    // TODO...
    const array1 = [1, 2, 3, 4, 5];
    const array2 = ['a', 'b', 'c', 'd', 'e'];
    console.log(interLeave(array1, array2));
}

const ex4 = () => {
    //TODO...
}

const ex5 = () => {

}

const ex6 = () => {
    

}
//
// Your functions here...
//

//Exercise1
const countNumbers = (array) => {
    let numberCounter = 0;
    // TODO...3
    for (let i = 0; i < array.length; i++) {
        if (typeof(array[i]) === 'number')  numberCounter++;
        console.log (typeof(array[i]));
    }
    return numberCounter;
} 

//Exercise2

const minNumber = (array) => {
    let min = array[0]
    for (let i = 1; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i] 
        }
        
    }
    // done 
    return min;
    
}

//Exercise 3
const interLeave = (array1, array2) => {
    if (array1.length !== array2.length) {
        return "ERROR: Array length mismatch"   
    }
    
    let  result = "";
    for (let i = 0; i < array1.length; i++) {
        result += array1[i];
        result += array2[i];
    }
    
    return result;
    
}

//Exercise 4
const palindrome = (string) => {
    const pal = string.length;
    for (let i = 0; i < pal; i++) {
        if (string[i] !== string[pal -1 -i]){
            
            return false}
        }
        
        return true
        
    }
    console.log(palindrome('radar'));
    console.log(palindrome('month')); 

//Exercise 5

let str = "today this is a this is a this is a test.";
console.log(str.split("this").length -1);

//Exercise 6
const array = ['this', 'is', 'a', 'test', 'happy'];

let longestWord = array[0];
const longestString = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > array[0].length)
            
            longestWord = array[i]
        
    }

    return longestWord
}

console.log(longestString(array));

//Exercise 7
    let n = [1, 3, 6, 3, 6, 10];
  n.sort(function(a,b){return a-b});
  console.log(n)




const main = async () => {
    //ex1();
    // ex2();
    // ex3();
    // ex4()
    // ex5()
    //ex6()
    //ex7()

}



main();



