let input = 'Riaz is going to be a developer, believe that.';

const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for (let i = 0; i < input.length; i++) {
    // console.log(input([i]));
    let inputIndex = input[i];
    // console.log(inputIndex);
    // console.log(inputIndex[i]);
    for (let j = 0; j < vowels.length; j++){
        // console.log([j]);
        let vowelsIndex = vowels[j];
        console.log(inputIndex);
        console.log(vowelsIndex);
        if(inputIndex === vowelsIndex){
            if(inputIndex === vowelsIndex){
                resultArray.push(vowelsIndex);
                console.log(resultArray);
            }
        }
        
    }
}

