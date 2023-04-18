function solution(players, callings) {
  const map = new Map();
  players.forEach((e, i) => {
    map.set(e, i);
  });

  callings.forEach((e) => {
    const curIndex = map.get(e);

    const overTake = players[curIndex - 1];

    [players[curIndex], players[curIndex - 1]] = [
      players[curIndex - 1],
      players[curIndex],
    ];

    map.set(e, map.get(e) - 1);
    map.set(overTake, map.get(e) + 1);
  });
  return players;
}

console.log(
  solution(
    ['mumu', 'soe', 'poe', 'kai', 'mine'],
    ['kai', 'kai', 'mine', 'mine']
  )
);
