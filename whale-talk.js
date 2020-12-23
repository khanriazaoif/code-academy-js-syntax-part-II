let input = `Learning to code is fun.`;

const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for (let i = 0; i < input.length; i++) {
    let inputIndex = input[i];
    for (let j = 0; j < vowels.length; j++){
        let vowelsIndex = vowels[j];
        if(inputIndex === vowelsIndex){
            resultArray.push(vowelsIndex);
            if(inputIndex === 'e' || inputIndex === 'u'){
                resultArray.push(inputIndex);
            }
        }
    }
}

console.log(resultArray.join('').toUpperCase());
