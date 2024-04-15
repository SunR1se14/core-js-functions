function getIdGeneratorFunction(startFrom) {
  let id = startFrom;

  return function func() {
    const res = id;
    id += 1;
    return res;
  };
}

const getId4 = getIdGeneratorFunction(4);
const getId10 = getIdGeneratorFunction(10);
console.log(getId4()); //= > 4
console.log(getId10()); //= > 10
console.log(getId4()); //= > 5
console.log(getId4()); //= > 6
console.log(getId4()); //= > 7
console.log(getId10()); //= > 11
