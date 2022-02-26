function solution(id_list, report, k) {
  // answer을 list의 길이만큼 배열로 할당하고 0으로 초기화
  // [0,0,0,0]

  const answer = new Array(id_list.length);
  answer.fill(0);
  // 해쉬자료구조를 이용한 key, value 값을 담을 객체
  /* {
    [신고된 유저 ] : [신고한 유저 아이디]
    [신고된 유저 ] : [신고한 유저 아이디]
    [신고된 유저 ] : [신고한 유저 아이디]
    [신고된 유저 ] : [신고한 유저 아이디]
    muzi: [apeach]

  frodo: [muzi, apeach] - 정지

  apeach: []

  neo: [frodo, muzi] - 정지
  }
  */
  const hashObj = {};

  // list를 순회하며 hashObj에 빈배열을 value로 가진다.
  id_list.map((id) => (hashObj[id] = []));

  report.map((value) => {
    // 구조 분해 할당으로 report를 순회하며 공백을 기준으로 잘라서 각 신고한 유저아이디와 신고된 유저아이디로 할당
    const [user_id, declaration_id] = value.split(' ');

    // hashObj에 value에 순회한 유저아이디를 포함하고 있지않다면 해당 value에 추가
    if (!hashObj[declaration_id].includes(user_id)) {
      hashObj[declaration_id].push(user_id);
    }
  });
  for (const list in hashObj) {
    // hashObj의 배열의 길이가 k이상이면 정지된 유저
    if (hashObj[list].length >= k) {
      hashObj[list].map((user) => {
        // hashObj의 배열을 순회하며 id_list의 user가 포함되어 있다면 [0,0,0,0] -> [1,0,0,0] 신고한 유저의 카운터를 + 1해준다
        answer[id_list.indexOf(user)] += 1;
      });
    }
  }

  return answer;
}

console.log(
  solution(
    ['muzi', 'frodo', 'apeach', 'neo'],
    ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
    2
  )
);
