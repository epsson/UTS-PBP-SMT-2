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

console.log(field);
console.log(weather);

// Main logic (check how much good field and whether if it's a good time to plant)
// Hint for Main logic : use map funtion and forEach loop
let petakDiTanam = 0;

// Output
