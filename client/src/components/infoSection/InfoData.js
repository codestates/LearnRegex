export const homeObjOne = {
  id: 'tutorial',
  whiteBg: false,
  topLine: '학습하기 Tutorial',
  heading: '단계별 학습으로 정규표현식과 친해져요',
  description: '내가 입력하는 정규표현식에 따라 match & skip 학습하기 학습하기 학습하기 학습하기 학습하기 학습하기 학습하기 학습하기 학습하기 학습하기 학습하기 학습하기',
  buttonLabel: '학습하기 페이지로',
  imgStart: false,
  img: `${process.env.PUBLIC_URL}/assets/svg-1.svg`,
  alt: 'tutorial',
  link: '/tutorial',
};

export const homeObjTwo = {
  id: 'quiz',
  whiteBg: true,
  topLine: '퀴즈 quiz',
  heading: '어느 정도 이해했다면 문제를 직접 만들어봐요',
  description: '내가 낸 문제를 정답과 해설로 설명할 수도 있어야하겠죠? 출제하는 시간을 통해 한번 더 개념을 익혀보세요. 다른 사람들은 어떤 문제를 냈을까요? 도전하기 버튼을 클릭해보세요.',
  buttonLabel: '퀴즈 페이지로',
  imgStart: true,
  img: `${process.env.PUBLIC_URL}/assets/svg-2.svg`,
  alt: 'quiz',
  link: '/quizlist',
};
