/* eslint-disable */

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
        characterSet: '환영합니다!',
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
    tip: [
      {
        characterSet: '정확하게 일치하는 경우',
        explanation: `지금까지는 값을 입력하는 것만으로 해결할 수 있었습니다.\n정규표현식은 다양한 경우에서 원하는 값을 찾아냅니다.`,
      },
    ],
    answer: '1024',
    explanation: `특정 단어를 직접 입력합니다.`,
  },

  {
    id: 3,
    title: `\\d : 한 자리 숫자`,
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
        characterSet: `\\d`,
        explanation: `'d'는 digit의 약자이며 0부터 9까지의 숫자를 의미합니다.
                      '\\'를 붙이지 않고 사용하면 문자 'd'를 의미하게 됩니다.`,
      },
      {
        characterSet: `\\D`,
        explanation: '\\D는 \\d의 반대로 숫자를 제외한 모든 문자를 의미합니다.',
      },
    ],
    answer: `\\d`,
    explanation: `\\d는 한자리 숫자를 의미합니다.`,
  },

  {
    id: 4,
    title: `\\w : 한 자리 문자, 숫자, _`,
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
        characterSet: `\\w`,
        explanation: `'w'는 word의 약자이며 문자, 숫자, '_(underbar)'를 의미합니다.`,
      },
      {
        characterSet: `\\W`,
        explanation: `\\W는 \\w의 반대로 문자, 숫자, '_(underbar)'를 제외한 모든 문자를 의미합니다.`,
      },
      {
        characterSet: `왜 안풀리죠?`,
        explanation: '한 번 쓰는 것만으로는 부족할지도 모릅니다.',
      },
    ],
    answer: `\\w\\w`,
    explanation: `\\w를 두 번 입력하여 두자리 문자를 표현합니다.`,
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
        explanation: `문자 뒤에 쓰이며 '+'기호 앞의 문자가 하나 또는 여러개 존재함을 의미합니다.`,
      },
    ],
    answer: `\\w+`,
    explanation: `한 개 이상의 문자가 존재하므로 문자 전체를 뜻하는
    \\w와 '+'기호를 입력합니다`,
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
        explanation: `문자 뒤에 쓰이며 '?'기호 앞의 문자가 없거나 하나만 존재함을 의미합니다.`,
      },
    ],
    answer: `c?at?`,
    explanation: `모든 경우에 a가 포함됩니다.
    c와 t는 포함되거나 포함되지 않습니다.
    따라서 c와 t 문자 뒤에 '?'기호를 입력합니다.`,
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
        explanation: `문자 뒤에 쓰이며 '*'기호 앞의 문자가 없거나 하나 이상 존재함을 의미합니다.`,
      },
    ],
    answer: `\\w*`,
    explanation: `문자가 없거나, 하나 이상 존재하므로
    문자 전체를 뜻하는 \\w와 '*'기호를 입력합니다`,
  },

  {
    id: 8,
    title: '{n,m} : n번 이상 m번 이하 반복',
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
        characterSet: 'skip',
        explanation: `My Regex에 작성한 정규표현식과 'skip'의 값이 일치하지 않아야 합니다.`,
      },
      {
        characterSet: '{n, m}',
        explanation: `문자 뒤에 쓰이며 '{ }'앞의 문자가 최소 n번 이상 m번 이하 반복됨을 의미합니다.`,
      },
      {
        characterSet: '{n}',
        explanation: `문자 뒤에 쓰이며 '{ }'앞의 문자가 n번 반복됨을 의미합니다.`,
      },
      {
        characterSet: 'example',
        explanation: `a{2,6} : a가 2번 이상 6번 이하 반복됩니다.
                      a{2} : a가 2번 반복됩니다.`,
      },
    ],
    answer: `\\d{2,3}-\\d{3,4}-\\d{4}`,
    explanation: `통과 조건은 지역번호를 포함하는 전화번호 형식입니다.

                  숫자 전체를 뜻하는 \\d를 입력하고
                  반복 허용 범위를 2이상 3이하로 입력합니다.

                  공통으로 들어가는 -를 입력한 뒤
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
        explanation: `문자 뒤에 쓰이며 '{ }'앞의 문자가 최소 n번 이상 반복됨을 의미합니다.`,
      },
      {
        characterSet: 'example',
        explanation: `a{3,} : a가 최소 3번 이상 반복됩니다.`,
      },
    ],
    answer: `e{2,}asy`,
    explanation: `통과 조건은 e가 최소 2번 이상 반복되는 문자 형식입니다.

                  e의 반복 허용 범위를 2이상으로 입력한 뒤
                  나머지 문자를 직접 입력합니다.`,
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
        explanation: `'[ ]' 안의 문자만 가용함을 의미합니다.`,
      },
    ],
    answer: `[bce]at`,
    explanation: `통과 조건은 앞 문자가 b, c, e중 하나로 시작하는 문자 형식입니다.
    
                  b, c, e를 가용 문자 목록으로 지정한 뒤
                  공통으로 포함된 문자 at를 직접 입력합니다.`,
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
        characterSet: '[A-Z]',
        explanation: '대문자 알파벳 A부터 Z까지를 의미합니다.',
      },
      {
        characterSet: '[a-z]',
        explanation: '소문자 알파벳 a부터 z까지를 의미합니다.',
      },
      {
        characterSet: '[A-Za-z]',
        explanation: `대문자 알파벳 A부터 Z까지,
        소문자 알파벳 a부터 z까지 모두를 의미합니다.`,
      },
    ],
    answer: `[A-Za-z]+`,
    explanation: `가용 문자 목록을 범위로 지정할 수도 있습니다.
                  통과 조건은 숫자가 들어가지 않은 문자 형식입니다.

                  [A-Za-z]로 범위를 지정한 후
                  최소 한 자리 이상의 문자이기 때문에 '+'기호를 사용합니다.`,
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
        characterSet: '[가-힇]',
        explanation: `한글 문자 '가'부터 '힇'까지를 의미합니다.`,
      },
      {
        characterSet: `\\s`,
        explanation: `'s'는 space의 약자이며 스페이스, 탭, 줄 바꿈 문자등을 포함한 하나의 공백 문자를 의미합니다.`,
      },
    ],
    answer: `[a-z가-힇\\s]+`,
    explanation: `통과 조건은 영어 소문자, 한글 문자, 공백을 포함하고 있는 문자 형식입니다.
    
                  가용 문자 목록으로 영어 소문자([a-z]), 한글 문자([가-힇]), 공백(\\s)을 입력합니다.
                  최소 한 자리 이상의 문자이기 때문에 '+'기호를 사용합니다.`,
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
        explanation: `'[^]'안의 문자는 예외함을 의미합니다.
                      '^'기호는 [ ]안에서 쓰일 때와 밖에서 쓰일 때 전혀 다른 기능을 합니다.`,
      },
    ],
    answer: `[^ce]at`,
    explanation: `통과 조건은 앞 문자가 c나 e가 아닌 문자 형식입니다.

                  c, e를 예외 문자 목록으로 지정합니다.
                  공통으로 포함된 문자 at를 직접 입력합니다.`,
  },

  {
    id: 14,
    title: `\\s, \\(, \\-, \\. : 특수 문자`,
    testCase: [
      {
        task: 'match',
        target: '^.^',
      },
      {
        task: 'match',
        target: `\\('.^)/`,
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
        explanation: `제목에 적혀있는 특수문자 외에도 '\\'를 붙여서 사용합니다.

                      '\\'를 붙여서 사용하지 않아도 되는 경우가 있지만
                       명시적으로 붙여서 사용하는것이 좋습니다.`,
      },
    ],
    answer: `[\\^\\(\\'\\)\\/\\.\\?\\\\]+ 또는 [\\W]+`,
    explanation: `통과 조건은 특수 문자만 들어간 문자 형식입니다.

                  특수 문자를 가용 문자 목록에 입력합니다.
                  또는 문자, 숫자, _(underbar)를 제외한 모든 문자를
                  의미하는 \\W를 가용 문자 목록에 입력합니다.
                  최소 한 자리 이상의 문자이기 때문에 '+'기호를 사용합니다.`,
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
        target: `\\('_^)/`,
      },
      {
        task: 'match',
        target: '...?',
      },
      {
        task: 'match',
        target: '앞 문제와 다른 점이 보이시나요?',
      },
      {
        task: 'match',
        target: '단 두 문자로 해결 해보세요!',
      },
    ],
    tip: [
      {
        characterSet: '.',
        explanation: '모든 문자를 의미합니다.',
      },
    ],
    answer: `.+`,
    explanation: `모든 문자를 의미하는 '.'을 입력합니다.
                  최소 한 자리 이상의 문자이기 때문에 '+'기호를 사용합니다.`,
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
        explanation: `정규표현식의 가장 앞에 쓰이며 전체 문자열의 시작을 의미합니다.`,
      },
      {
        characterSet: '$',
        explanation: '정규표현식의 가장 마지막에 쓰이며 전체 문자열의 끝을 의미합니다.',
      },
      {
        characterSet: `example`,
        explanation: `^a : 전체 문자열의 첫번째 문자가 a입니다.
                      e$ : 전체 문자열의 마지막 문자가 e입니다.`,
      },
      {
        characterSet: `Flag multiline 'm'`,
        explanation: `정규표현식은 검색 옵션(flag)을 줄 수 있습니다.
                      그 중 multiline옵션 'm'여부에 따라 전체 문자열의 범위가 달라질 수 있습니다.
                      활성화 되어 있다면 줄바꿈을 기준으로 문자열의 시작과 끝이 정해집니다.`,
      },
    ],
    answer: `^a.*e$`,
    explanation: `통과 조건은 a로 시작하여 e로 끝나는 문자 형식입니다.

                  a로 시작하여 e로 끝날 수 있도록 ^a와 e$를 입력합니다.
                  a와 e사이에 모든 문자를 의미하는 '.'기호와 '*'기호를 입력합니다.`,
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
        characterSet: 'capture',
        explanation: `My Regex에 작성한 정규표현식의 그룹과 'capture'의 값이 일치해야 합니다.`,
      },
      {
        characterSet: '(abc)',
        explanation: `'( )'안 문자열을 한 그룹으로 묶음을 의미합니다.`,
      },
      {
        characterSet: '그룹 번호',
        explanation: `그룹은 여러개 존재할 수 있습니다.
                      '( )'순서대로 그룹 번호가 부여됩니다.`,
      },
    ],
    answer: `([a-z\\s]+)`,
    explanation: `문자열 전체가 그룹에 포함되어야 하고
                  문자가 최소 하나 이상 존재하기 때문에
                  괄호 안에 가용 문자 목록으로 소문자 알파벳과
                  공백문자를 입력한 뒤 +기호를 사용합니다.`,
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
    answer: `([a-z]+\\s([a-z]))`,
    explanation: `그룹안에 또 다른 그룹을 생성하여
                  중첩 그룹을 사용할 수 있습니다.
                  전체 문자열을 한 그룹으로 묶은 뒤 testCase에 맞게
                  정규표현식을 작성합니다.
                  그 후 그룹 내에서 공백문자 다음으로 오는 문자들을
                  한번 더 그룹으로 묶어줍니다.`,
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
    explanation: `문자열이 tom 또는 jerry인 경우에만 통과해야 하기 때문에
                  tom 과 jerry를 그룹으로 묶은 뒤 '|'를 사용합니다.`,
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
    answer: `(\\d+(?=cm))`,
    explanation: `cm이 붙어있는 숫자만 통과해야 하기 때문에
                  후열 일치 조건문으로 (?=cm)을 입력한 뒤
                  숫자 자릿수가 최소 한 자리 이상이므로
                  +기호를 사용합니다.`,
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
    tip: [],
    answer: `(\\d{6})-([1-4]\\d{6})`,
    explanation: `통과 조건은 뒷자리의 첫 시작이 1 ~ 4 중 하나이고
                  6자 - 7자의 그룹으로 묶인 주민등록번호의 형식입니다.

                  첫번째 그룹으로 숫자 전체를 뜻하는 \\d를 입력하고,
                  반복 허용 범위를 6으로 지정합니다.
                  
                  두번째 그룹의 첫 시작은 1 ~ 4 중 하나만 입력할 수 있게
                  가용 문자 목록에 범위를 1-4로 입력합니다.
                  7자리 숫자 중 한 자리는 방금 입력했으므로
                  첫번째 그룹에서 작성한 것과 동일하게 \\d를 입력한 뒤
                  반복 허용 범위를 6으로 지정합니다.
                  
                  첫번째 그룹과 두번째 그룹 사이에 -를 입력합니다.`,
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
    answer: `([\\w\\-]+)@([\\w]+\\.([\\w\\.]{2,}))`,
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
    answer: `(https?)?(?:\\:\\/\\/)?(?:www\\.)?([\\w\\-]+)\\.([\\w\\.]+)`,
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
    answer: `(?=.*[A-Za-z])(?=.*[0-9])(?=.*[\\W\\_]).{8,20}`,
    explanation: ``,
  },
];
