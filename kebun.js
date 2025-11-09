// RNG logic function
function useRNG(n, j = 0) {
  let RNG = Math.floor(Math.random() * n);
  return RNG + j;
}

// Main array and weather object
let field = [[], [], [], []];
const fieldDataPossibility = ["subur", "kering", "tandus"];
let weather = {};

// Randomize logic for Main array and weather object
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    let generateFieldCondition = useRNG(3);

    field[i][j] = fieldDataPossibility[generateFieldCondition];
  }
}

weather.temp = useRNG(20, 15);
weather.humidity = useRNG(20, 40);
weather.windSpeed = useRNG(10, 10);

// Main logic (check how much good field and whether if it's a good time to plant)
let fertile = 0;

let rowStatus = field.map((row) => {
  let fertileField = 0;
  row.forEach((field) => {
    if (field === "subur") fertileField++;
  });
  if (fertileField >= 2) {
    fertile += fertileField;
  }
  fertileField = 0;
});

let weatherLogic =
  weather.temp >= 20 &&
  weather.temp <= 30 &&
  weather.humidity > 50 &&
  weather.windSpeed < 15;

// Output
console.log("Hasil perhitungan : ");
console.log(field);
console.log(weather);
console.log(`Total petak subur : ${fertile}`);
console.log(
  weatherLogic == true
    ? "Total petak ditanam : " + fertile
    : "Total petak ditanam : " + 0
);
console.log(
  weatherLogic == true
    ? "Cuaca cocok untuk bercocok bertanam"
    : "Cuaca tidak cocok untuk bercocok bertanam"
);
