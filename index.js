function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback){
  var cars = ["toyota", "ford", "bmw"]
  cars.forEach(callback);
  return cars;
}

function doToArray(array, callback){
  array.forEach(callback);
}
