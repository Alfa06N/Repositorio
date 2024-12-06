function getKnightMoves([x, y]) {
  const moves = [
    [x + 2, y + 1],
    [x + 2, y - 1],
    [x - 2, y + 1],
    [x - 2, y - 1],
    [x + 1, y + 2],
    [x + 1, y - 2],
    [x - 1, y + 2],
    [x - 1, y - 2],
  ];

  return moves.filter(([x, y]) => x >= 0 && x < 8 && y >= 0 && y < 8);
}

function findsTarget(current, target) {
  return current[0] === target[0] && current[1] === target[1];
}

function knightMoves(start = [], end = []) {
  const moves = getKnightMoves(start);
  if (moves.some((move) => findsTarget(move, end))) {
    return [start, end];
  } else {
    for (let move of moves) {
      if (getKnightMoves(move).some((newMove) => findsTarget(newMove, end))) {
        return [start, move, end];
      }
    }

    let path = [];
    for (let move of moves) {
      const newMoves = knightMoves(move);
      path =
        path.length === 0 || path.length > newMoves.length ? newMoves : path;
    }

    return [start, path];
  }
}

function knightMoves(start = [], end = []) {
  const queue = [[start]];
  const visited = new Set();
  let total = 0;

  while (queue.length > 0) {
    total += 1;

    const path = queue.shift();
    const current = path[path.length - 1];

    if (current[0] === end[0] && current[1] === end[1]) {
      console.log(total);
      return path;
    }

    const key = `${current[0]},${current[1]}`;
    if (!visited.has(key)) {
      visited.add(key);

      const moves = getKnightMoves(current);
      for (const move of moves) {
        queue.push([...path, move]);
      }
    }
  }
  return [];
}

console.log(knightMoves([0, 0], [7, 7]));
