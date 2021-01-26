const _ = {
    clamp(number, lower, upper){
        let lowerClampedValue =
        Math.max(number, lower);
        let clampedValue = Math.min(lowerClampedValue, upper);
        // console.log(clampedValue);
        return clampedValue;
    }
  };
  console.log(_.clamp(16, 5, 10));
  console.log(_.clamp(6, 5, 10));
  console.log(_.clamp(-16, 5, 10));



// Do not write or modify code below this line.
module.exports = _;