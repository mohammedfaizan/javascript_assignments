function islandPerimeter(grid) {
  let perimeter = 0;
  const rows = grid.length;
  const cols = grid[0].length;

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) {
        directions.forEach((direction) => {
          const nr = r + direction[0];
          const nc = c + direction[1];

          if (
            nr < 0 ||
            nr >= rows ||
            nc < 0 ||
            nc >= cols ||
            grid[nr][nc] === 0
          ) {
            perimeter += 1;
          }
        });
      }
    }
  }

  return perimeter;
}

function handleCalculate() {
  const gridInput = document.getElementById("gridInput").value.trim();
  const outputDiv = document.getElementById("output");

  const grid = JSON.parse(gridInput);

  if (!Array.isArray(grid) || grid.length === 0 || !Array.isArray(grid[0])) {
    alert("Invalid input format. Please enter a valid 2D grid.");
  }

  const perimeter = islandPerimeter(grid);

  outputDiv.innerHTML = `<strong>Perimeter:</strong> ${perimeter}`;
}

document
  .getElementById("calculateBtn")
  .addEventListener("click", handleCalculate);
