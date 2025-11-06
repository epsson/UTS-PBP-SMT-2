// RNG logic function
function useRNG(n, j = 0) {
  let RNG = Math.floor(Math.random() * n);
  return RNG + j;
}

// Main array (8x8) and fill the array
let grid = Array.from({ length: 8 }, () => Array(8).fill("."));

// use RNG function to determine the position of the rook and the king

// Main logic (check if the rook can capture the king)

// Output
console.log(
  grid.forEach((item) => console.log(" | " + item.join(" | ") + " | "))
);
