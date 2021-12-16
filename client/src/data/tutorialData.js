export const dummyData = [
  {
    id: 1,
    title: '찾고 싶은 단어를 직접 입력해보세요.',
    testCase: [
      {
        task: 'match',
        target: 'apple',
      },
    ],
    tip: [],
    answer: 'apple',
    explanation: `특정 단어를 직접 입력합니다`,
  },

  {
    id: 2,
    title: '찾고 싶은 숫자를 직접 입력해보세요.',
    testCase: [
      {
        task: 'match',
        target: '1024',
      },
    ],
    tip: [],
    answer: '1024',
    explanation: `특정 단어를 직접 입력합니다`,
  },

  {
    id: 3,
    title: `\d : 한 자리 숫자`,
    testCase: [
      {
        task: 'match',
        target: '3',
      },
      {
        task: 'match',
        target: '6',
      },
      {
        task: 'match',
        target: '9',
      },
    ],
    tip: [
      {
        characterSet: `\D`,
        explanation: '숫자를 제외한 한 자리 문자',
      },
    ],
    answer: `\d`,
    explanation: `\d 는 숫자 형태의 한 문자를 의미합니다.
                  한 개의 문자를 표현하려면 한 번 입력합니다.`,
  },

  {
    id: 4,
    title: `\w : 한 자리 문자, 숫자, _`,
    testCase: [
      {
        task: 'match',
        target: 'ab',
      },
      {
        task: 'match',
        target: 'c1',
      },
      {
        task: 'match',
        target: '_d',
      },
    ],
    tip: [
      {
        characterSet: `\W`,
        explanation: '문자, 숫자, _를 제외한 한 자리 문자',
      },
    ],
    answer: `\w\w`,
    explanation: `\w는 문자, 숫자, _형태의 한 문자를 의미합니다.
                  두자리 문자를 표현하려면 두 번 입력합니다.`,
  },

  {
    id: 5,
    title: '+ : 하나 또는 여러개',
    testCase: [
      {
        task: 'match',
        target: 'a',
      },
      {
        task: 'match',
        target: 'ab',
      },
      {
        task: 'skip',
        target: 'abc',
      },
    ],
    tip: [],
    answer: `\w+`,
    explanation: `+는 앞 문자가 하나 또는 여러개 존재함을 의미합니다.`,
  },

  {
    id: 6,
    title: '? : 없거나 한 개',
    testCase: [
      {
        task: 'match',
        target: 'cat',
      },
      {
        task: 'match',
        target: 'at',
      },
      {
        task: 'match',
        target: 'ca',
      },
    ],
    tip: [],
    answer: `c?at?`,
    explanation: `?는 앞 문자가 없거나 하나만 존재함을 의미합니다.`,
  },

  {
    id: 7,
    title: '* : 없거나 여러개',
    testCase: [
      {
        task: 'match',
        target: '',
      },
      {
        task: 'match',
        target: 'pen',
      },
      {
        task: 'match',
        target: 'pineapple',
      },
      {
        task: 'match',
        target: 'penpineappleapplepen',
      },
    ],
    tip: [],
    answer: `\w*`,
    explanation: `*는 앞 문자가 없거나 있다면 하나 이상 존재함을 의미합니다.`,
  },

  {
    id: 8,
    title: '{n,m} : n 이상 m 이하 반복',
    testCase: [
      {
        task: 'match',
        target: '010-1234-5678',
      },
      {
        task: 'match',
        target: '02-123-4567',
      },
      {
        task: 'skip',
        target: '1577-1577',
      },
      {
        task: 'skip',
        target: '3-69-369',
      },
    ],
    tip: [
      {
        characterSet: '{n}',
        explanation: '앞 문자가 n번 반복됨을 의미함',
      },
    ],
    answer: `\d{2,3}-\d{3,4}-\d{4}`,
    explanation: `{n,m}는 앞 문자가 n 이상 m 이하 반복됨을 의미합니다.
                  숫자를 입력해 반복 수를 지정합니다.
                  단어 사이에 필수적으로 들어가는 - 기호를 직접 입력합니다.`,
  },

  {
    id: 9,
    title: '{n,} : n 이상 반복',
    testCase: [
      {
        task: 'match',
        target: 'eeeeeeasy',
      },
      {
        task: 'match',
        target: 'eeeeeeeeeeeeeeeeeeeeasy',
      },
      {
        task: 'skip',
        target: 'easy',
      },
    ],
    tip: [],
    answer: `e{2,}asy`,
    explanation: `{n,}는 앞 문자가 n 반복됨을 의미합니다.
                  숫자를 입력해 반복 수를 지정합니다.`,
  },

  {
    id: 10,
    title: '[abc] : 가용 문자 목록',
    testCase: [
      {
        task: 'match',
        target: 'bat',
      },
      {
        task: 'match',
        target: 'cat',
      },
      {
        task: 'match',
        target: 'eat',
      },
      {
        task: 'skip',
        target: 'fat',
      },
    ],
    tip: [],
    answer: `[bce]at`,
    explanation: `[]는 괄호 안의 문자만 가용함을 의미합니다.
                  가용할 문자를 입력합니다.`,
  },

  {
    id: 11,
    title: '[a-c] : 가용 문자 범위',
    testCase: [
      {
        task: 'match',
        target: 'BAAAAAAAADboooooooy',
      },
      {
        task: 'match',
        target: 'REEEEEEEEEEGeeeeeeex',
      },
      {
        task: 'match',
        target: 'EEEEEEEEEat',
      },
      {
        task: 'skip',
        target: 'BAAAAAADb55555y',
      },
    ],
    tip: [
      {
        characterSet: 'A-Z',
        explanation: '알파벳 대문자 범위',
      },
      {
        characterSet: 'a-z',
        explanation: '알파벳 소문자 범위',
      },
    ],
    answer: `[A-Z]+[a-z]+`,
    explanation: `[]는 괄호 안의 문자만 가용함을 의미합니다.
                  가용할 범위를 입력합니다.
                  가용 문자가 하나 이상 존재하므로 +기호를 사용합니다.`,
  },

  {
    id: 12,
    title: '[가-힇] : 한글 문자 범위',
    testCase: [
      {
        task: 'match',
        target: 'binary는 호남선',
      },
      {
        task: 'match',
        target: 'num row col char에',
      },
      {
        task: 'match',
        target: '흔들리는 char char num alloc',
      },
    ],
    tip: [
      {
        characterSet: '가-힇',
        explanation: '한글 단어 범위',
      },
      {
        characterSet: `\s`,
        explanation: '공백 문자(space)',
      },
    ],
    answer: `[a-z가-힇 ]+`,
    explanation: `[]는 괄호 안의 문자만 가용함을 의미합니다.
                  가용할 범위를 입력합니다.
                  가용 문자가 하나 이상 존재하므로 +기호를 사용합니다.`,
  },

  {
    id: 13,
    title: '[^abc] : 예외 문자 목록',
    testCase: [
      {
        task: 'match',
        target: 'pat',
      },
      {
        task: 'match',
        target: '-at',
      },
      {
        task: 'match',
        target: 'qat',
      },
      {
        task: 'skip',
        target: 'cat',
      },
      {
        task: 'skip',
        target: 'eat',
      },
    ],
    tip: [],
    answer: `[^a-e]at`,
    explanation: `[^]는 괄호 안의 문자는 예외함을 의미합니다.
                  예외처리 할 범위를 입력합니다.
                  공통으로 들어가는 at를 직접 입력합니다.`,
  },

  {
    id: 14,
    title: `\s, \(, \-, \. : 특수 문자`,
    testCase: [
      {
        task: 'match',
        target: '^ 0 ^',
      },
      {
        task: 'match',
        target: `\('_^)/`,
      },
      {
        task: 'match',
        target: '...?',
      },
      {
        task: 'skip',
        target: '486',
      },
      {
        task: 'skip',
        target: 'computer',
      },
    ],
    tip: [
      {
        characterSet: 'a-z',
        explanation: '괄호 안 문자들을 제외',
      },
    ],
    answer: `[0\s\^\\\(\'\_\)\/\.\?]+`,
    explanation: `특수문자는 \를 붙여서 나타냅니다.
                  가용 할 문자를 입력합니다.
                  가용 문자가 하나 이상 존재하므로 +를 사용합니다.`,
  },

  {
    id: 15,
    title: `. : 모든 문자`,
    testCase: [
      {
        task: 'match',
        target: '^ 0 ^',
      },
      {
        task: 'match',
        target: `\('_^)/`,
      },
      {
        task: 'match',
        target: '...?',
      },
      {
        task: 'match',
        target: '486',
      },
      {
        task: 'match',
        target: 'computer',
      },
    ],
    tip: [],
    answer: `.+`,
    explanation: `.은 모든 문자를 의미입니다.
                  앞 문자가 하나 이상 존재하므로 +를 사용합니다.`,
  },

  {
    id: 16,
    title: `^, $ : 시작과 끝`,
    testCase: [
      {
        task: 'match',
        target: 'apple',
      },
      {
        task: 'skip',
        target: `applepen`,
      },
      {
        task: 'skip',
        target: 'penapple',
      },
    ],
    tip: [
      {
        characterSet: '^',
        explanation: '문자열의 시작',
      },
      {
        characterSet: '$',
        explanation: '문자열의 끝',
      },
    ],
    answer: `^apple$`,
    explanation: `^a는 a로 시작하는 문자열을 의미합니다.
                  e$는 e로 끝나는 문자열을 의미합니다.`,
  },

  {
    id: 17,
    title: `(abc) : 그룹 묶기`,
    testCase: [
      {
        task: 'capture',
        target: 'white cat',
        groups: ['white cat'],
      },
      {
        task: 'capture',
        target: `black cat`,
        groups: ['black cat'],
      },
      {
        task: 'capture',
        target: 'pink pig',
        groups: ['pink pig'],
      },
    ],
    tip: [
      {
        characterSet: 'a-z',
        explanation: '괄호 안 문자들을 제외',
      },
    ],
    answer: `([a-z\s]+)`,
    explanation: ``,
  },

  {
    id: 18,
    title: `(a(bc)) : 중첩 그룹 묶기`,
    testCase: [
      {
        task: 'capture',
        target: 'white cat',
        groups: ['white cat', 'cat'],
      },
      {
        task: 'capture',
        target: `black cat`,
        groups: ['black cat', 'cat'],
      },
      {
        task: 'capture',
        target: 'pink pig',
        groups: ['pink pig', 'pig'],
      },
    ],
    tip: [
      {
        characterSet: 'a-z',
        explanation: '괄호 안 문자들을 제외',
      },
    ],
    answer: `([a-z]+\s([a-z]))`,
    explanation: ``,
  },

  {
    id: 19,
    title: `(a|b) : a 또는 b`,
    testCase: [
      {
        task: 'match',
        target: 'tom',
      },
      {
        task: 'match',
        target: `jerry`,
      },
      {
        task: 'skip',
        target: 'mickey',
      },
    ],
    tip: [
      {
        characterSet: 'a-z',
        explanation: '괄호 안 문자들을 제외',
      },
    ],
    answer: `(tom|jerry)`,
    explanation: ``,
  },

  {
    id: 20,
    title: `a(?=bc) : 후열 일치 조건문`,
    testCase: [
      {
        task: 'capture',
        target: '10cm',
        groups: ['10'],
      },
      {
        task: 'capture',
        target: `3cm`,
        groups: ['3'],
      },
      {
        task: 'skip',
        target: '10km',
      },
      {
        task: 'skip',
        target: '8mile',
      },
    ],
    tip: [
      {
        characterSet: 'a-z',
        explanation: '괄호 안 문자들을 제외',
      },
    ],
    answer: `(\d+(?=cm))`,
    explanation: ``,
  },

  {
    id: 21,
    title: `주민등록번호`,
    testCase: [
      {
        task: 'capture',
        target: '901216-1034067',
        groups: ['901216', '1034067'],
      },
      {
        task: 'skip',
        target: `94031-241739`,
      },
      {
        task: 'skip',
        target: '001127-7365142',
      },
    ],
    tip: [
      {
        characterSet: 'a-z',
        explanation: '괄호 안 문자들을 제외',
      },
    ],
    answer: `(\d{6})-([1-4]\d{6})`,
    explanation: ``,
  },

  {
    id: 22,
    title: `HTML Tag`,
    testCase: [
      {
        task: 'capture',
        target: '<div>hello</div>',
        groups: ['div'],
      },
      {
        task: 'capture',
        target: `<a></a>`,
        groups: ['a'],
      },
      {
        task: 'skip',
        target: '<div>hello</span>',
      },
    ],
    tip: [
      {
        characterSet: 'a-z',
        explanation: '괄호 안 문자들을 제외',
      },
    ],
    answer: `<([a-zA-Z]+)>([\w\s]*)<\/\1>`,
    explanation: ``,
  },

  {
    id: 23,
    title: `이메일`,
    testCase: [
      {
        task: 'capture',
        target: 'learn-regex@codematzip.com',
        groups: ['learn-regex', 'codematzip.com', 'com'],
      },
      {
        task: 'capture',
        target: `iphone13@apple.com`,
        groups: ['iphone13', 'apple.com', 'com'],
      },
      {
        task: 'capture',
        target: 'galaxy-s22@samsung.co.kr',
        groups: ['galaxy-s22', 'samsung.co.kr', 'co.kr'],
      },
    ],
    tip: [
      {
        characterSet: 'a-z',
        explanation: '괄호 안 문자들을 제외',
      },
    ],
    answer: `([\w\-]+)@([\w]+\.([\w\.]{2,}))`,
    explanation: ``,
  },

  {
    id: 24,
    title: `도메인`,
    testCase: [
      {
        task: 'capture',
        target: 'http://localhost.com',
        groups: ['http', 'localhost', 'com'],
      },
      {
        task: 'capture',
        target: `https://naver.com`,
        groups: ['https', 'naver', 'com'],
      },
      {
        task: 'capture',
        target: 'kakao.com',
        groups: ['kakao', 'com'],
      },
      {
        task: 'capture',
        target: 'www.google.co.kr',
        groups: ['google', 'co.kr'],
      },
      {
        task: 'capture',
        target: 'https://www.learnregex.net',
        groups: ['https', 'learnregex', 'net'],
      },
    ],
    tip: [
      {
        characterSet: 'a-z',
        explanation: '괄호 안 문자들을 제외',
      },
    ],
    answer: `(https?)?(?:\:\/\/)?(?:www\.)?([\w\-]+)\.([\w\.]+)`,
    explanation: ``,
  },

  {
    id: 25,
    title: `비밀번호`,
    testCase: [
      {
        task: 'match',
        target: 'regexzzang12!',
      },
      {
        task: 'match',
        target: `javascript!es6`,
      },
      {
        task: 'skip',
        target: 'onlyenglish',
      },
      {
        task: 'skip',
        target: 'forever4',
      },
      {
        task: 'skip',
        target: 'google.com',
      },
    ],
    tip: [
      {
        characterSet: 'a-z',
        explanation: '괄호 안 문자들을 제외',
      },
    ],
    answer: `(?=.*[A-Za-z])(?=.*[0-9])(?=.*[\W\_]).{8,20}`,
    explanation: ``,
  },
];
