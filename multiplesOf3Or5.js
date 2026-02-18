function multiplesOf3Or5(number) {
  let multiples = []
  for(let i = 1; i< number; i++){
    if(i%3 === 0 || i%5 === 0){
      multiples.push(i);
    }
  }

//    console.log(multiples);

  let result = 0;

  for(let j = 0; j<multiples.length; j++){
    result += multiples[j];
  }

  return result;
}

multiplesOf3Or5(49);