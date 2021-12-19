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
    tip: [
      {
        characterSet: 'Learn REGEX에 오신 여러분 환영합니다!',
        explanation: `REGEX(Regular Expression, 정규표현식)이란 문자열을 처리하는 방법 중의 하나로 특정한 조건의 문자를 '검색'하거나 '치환'하는 과정을 매우 간편하게 처리 할 수 있도록 하는 수단입니다.
                      지금부터 저희와 함께 정규표현식에서 쓰이는 여러가지 문법을 단계별로 배워봅시다!`,
      },
      {
        characterSet: 'match',
        explanation: `My Regex에 작성한 정규표현식과 'match'의 값이 일치해야합니다.`,
      },
    ],
    answer: 'apple',
    explanation: `특정 단어를 직접 입력합니다.`,
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
        task: 'match',
        target: 'abc',
      },
    ],
    tip: [
      {
        characterSet: `+`,
        explanation: '앞 문자가 하나 또는 여러개 존재함',
      },
    ],
    answer: `\w+`,
    explanation: `한 개 이상의 문자가 존재하므로 문자 전체를 뜻하는 \w와 +기호를 입력합니다`,
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
    tip: [
      {
        characterSet: `?`,
        explanation: '앞 문자가 없거나 하나만 존재함',
      },
    ],
    answer: `c?at?`,
    explanation: `a를 제외한, c 와 t는 존재하거나 존재하지 않는 경우 둘 다 포함하기 때문에 c 와 t 문자 뒤에 ? 기호를 입력합니다.`,
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
    tip: [
      {
        characterSet: `*`,
        explanation: '앞 문자가 없거나 하나 이상 존재함',
      },
    ],
    answer: `\w*`,
    explanation: `문자가 없거나, 하나 이상 존재하므로 문자 전체를 뜻하는 \w와 *기호를 입력합니다`,
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
        characterSet: '{n, m}',
        explanation: '앞 문자가 n 이상 m 이하 반복됨',
      },
      {
        characterSet: '{n}',
        explanation: '앞 문자가 n번 반복됨',
      },
    ],
    answer: `\d{2,3}-\d{3,4}-\d{4}`,
    explanation: `지역번호를 포함하는 전화번호 형식만 성립하기 때문에 앞 문자를 숫자 전체를 뜻하는 \d로 입력해주고
                  반복 허용 범위를 2이상 3이하로 입력합니다. 그 후 공통으로 들어가는 -문자를 입력한 뒤
                  첫 문자열과 같은 방법으로 나머지 문자열을 입력합니다.`,
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
    tip: [
      {
        characterSet: '{n,}',
        explanation: '앞 문자가 최소 n번 이상 반복됨',
      },
    ],
    answer: `e{2,}asy`,
    explanation: `문자열 제일 앞에 있는 e가 한 개 있는 경우는 피해야 하기 때문에 e의 반복 허용 범위를 2 이상으로 입력한 뒤 나머지 문자를 직접 입력합니다.`,
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
    tip: [
      {
        characterSet: '[abc]',
        explanation: '괄호 안의 문자만 가용함',
      },
    ],
    answer: `[bce]at`,
    explanation: `앞 문자가 f인 경우는 피해야 하기 때문에 전체 문자를 뜻하는 \w가 아닌 b,c,e만 가용 문자 목록으로 지정합니다.
                  그 후 공통으로 포함된 at를 입력합니다.`,
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
    answer: `[A-Za-z]+`,
    explanation: `가용 문자 목록을 범위로 지정할 수도 있습니다.
                  문자열에 숫자가 들어간 경우는 피해야 하기 때문에 가용 문자 범위를 A-Za-z로 지정합니다.`,
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
    answer: `[a-z가-힇\s]+`,
    explanation: `한글 단어와 알파벳 소문자, 공백 문자를 가용 문자 범위로 지정합니다.`,
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
    tip: [
      {
        characterSet: '[^abc]',
        explanation: '괄호 안의 문자는 예외함',
      },
    ],
    answer: `[^ae]at`,
    explanation: `앞 문자가 c 와 e인 경우는 피해야 하기 때문에 예외 문자 목록으로 지정해줍니다.
                  그 후 공통으로 포함된 at를 입력합니다`,
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
        characterSet: '특수문자',
        explanation: '제목에 적혀있는 특수문자 외에도 를 붙여서 사용합니다.',
      },
    ],
    answer: `[0\s\^\\\(\'\_\)\/\.\?]+`,
    explanation: `포함할 특수 문자 들을 가용 문자 목록에 입력합니다.
                  ASCII코드의 특수문자 범위를 알고 있다면 범위를 입력합니다.
                  \를 붙여서 사용하지 않아도 되는 경우가 있지만 특수문자는 명시적으로 붙여서 사용하는것이 좋습니다.`,
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
    tip: [
      {
        characterSet: '.',
        explanation: '모든 문자',
      },
    ],
    answer: `.+`,
    explanation: `문자가 없는 경우는 없기 때문에 +를 사용합니다.`,
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
    explanation: `문자열의 시작이 a, 문자열의 끝이 e이기 때문에 a와 e에 각각 ^, $ 기호를 사용한 뒤 두 문자 사이에 pple를 입력합니다.`,
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
        characterSet: '(abc)',
        explanation: '괄호 안 문자들을 한 그룹으로 묶음',
      },
    ],
    answer: `([a-z\s]+)`,
    explanation: `문자열 전체가 그룹에 포함되어야 하고 문자가 최소 하나 이상 존재하기 때문에 괄호 안에 가용 문자 목록으로 소문자 알파벳과 공백문자를 입력합니다.`,
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
    tip: [],
    answer: `([a-z]+\s([a-z]))`,
    explanation: `그룹안에 또다른 그룹을 생성하여 중첩 그룹을 사용할 수 있습니다.
                  전체 문자열을 한 그룹으로 묶은 뒤 testCase에 맞게 정규표현식을 작성합니다.
                  그 후 그룹 내에서 공백문자 다음으로 오는 문자들을 한번 더 그룹으로 묶어줍니다.`,
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
        characterSet: 'a|b',
        explanation: 'a 또는 b 문자만 가용',
      },
    ],
    answer: `(tom|jerry)`,
    explanation: `문자열이 tom 또는 jerry인 경우에만 통과해야 하기 때문에 tom 과 jerry를 그룹으로 묶은 뒤 | 기호를 사용합니다.`,
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
        characterSet: 'a(?=bc)',
        explanation: 'bc가 붙은 문자 a만 허용',
      },
    ],
    answer: `(\d+(?=cm))`,
    explanation: `cm이 붙어있는 숫자만 통과해야 하기 때문에 후열 일치 조건문으로 (?=cm)을 입력한 뒤
                  숫자 자릿수가 최소 한 자리 이상이기 때문에 + 기호를 사용합니다.`,
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
    answer: `${'<([a-zA-Z]+)>([\\w\\s]*)<\\/\\1>'}`,
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
