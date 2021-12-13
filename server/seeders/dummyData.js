'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const user1 = await queryInterface.bulkInsert('users', [
      {
        id: 1,
        email: 'kimcoding@test.com',
        nickname: '코딩이',
        password: '$2a$10$VFsnpLvCsF4sOqy2TZgDhuoVd/moEoIVjeGK48AbB7p17G4Ng1i9K',
        socialType: 'local',
        verifyEmail: true,
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now()),
      },
    ]);

    const user2 = await queryInterface.bulkInsert('users', [
      {
        id: 2,
        email: 'parkhacker@test.com',
        nickname: '해킹이',
        password: '$2a$09$3NbNUXFSk8DXS9DyF.PRQONX67MxgTxRSsF8KH...W3VjoCRwNhoW',
        socialType: 'local',
        verifyEmail: false,
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now()),
      },
    ]);

    const user3 = await queryInterface.bulkInsert('users', [
      {
        id: 3,
        email: 'gurl97@test.com',
        nickname: '지녁이',
        password: '$2a$10$LBZ6XvIBB.tZNYOkBCRPdOPmoocLZmSnx47k2qbj4.BnW78gL5rLq',
        socialType: 'local',
        verifyEmail: true,
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now()),
      },
    ]);

    const quiz1 = await queryInterface.bulkInsert(
      'quiz',
      [
        {
          id: 1,
          userId: user1,
          title: '이메일 만들기',
          testCase: JSON.stringify([
            {
              task: 'match',
              target: ['kimcoding@test.com'],
            },
            {
              task: 'match',
              target: ['kimcoding@test.com'],
            },
            {
              task: 'skip',
              target: ['@test.com'],
            },
            {
              task: 'capture',
              target: ['kimcoding@test.com', 'kimcoding', 'test', 'com'],
            },
          ]),
          testCaseTarget: 'a',
          answer: '(\\w+)@(\\w+)\\.(\\w+)',
          explanation: '블라블라',
          count: 3,
          isClear: false,
          isMade: false,
          createdAt: new Date(Date.now()),
          updatedAt: new Date(Date.now()),
        },
        {
          id: 2,
          userId: user1,
          title: 'a만 통과하는 정규표현식 작성하기',
          testCase: JSON.stringify([
            {
              task: 'match',
              target: ['a'],
            },
            {
              task: 'skip',
              target: ['b'],
            },
          ]),
          testCaseTarget: 'a',
          answer: 'a',
          explanation: '블라블라',
          count: 3,
          isClear: false,
          isMade: false,
          createdAt: new Date(Date.now()),
          updatedAt: new Date(Date.now()),
        },
        {
          id: 3,
          userId: user1,
          title: '전화번호 만들기',
          testCase: JSON.stringify([
            {
              task: 'match',
              target: ['010-4321-1234'],
            },
            {
              task: 'match',
              target: ['02-112-1191'],
            },
            {
              task: 'skip',
              target: ['1-1-1'],
            },
          ]),
          testCaseTarget: 'a',
          answer: '\\d{2,3}-\\d{3,4}-\\d{4}',
          explanation: '블라블라',
          count: 3,
          isClear: false,
          isMade: false,
          createdAt: new Date(Date.now()),
          updatedAt: new Date(Date.now()),
        },
      ],
      {},
      { enabled_payments: { type: new Sequelize.JSON() } }
    );

    const quiz2 = await queryInterface.bulkInsert('quiz', [
      {
        id: 4,
        userId: user2,
        title: 'b만 통과하는 정규표현식 작성하기',
        testCase: JSON.stringify([
          {
            task: 'match',
            target: ['b'],
          },
        ]),
        testCaseTarget: 'b',
        answer: `b`,
        explanation: '어쩌구저쩌구',
        count: 1,
        isClear: false,
        isMade: false,
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now()),
      },
    ]);

    await queryInterface.bulkInsert('users_quiz', [
      {
        id: 1,
        quizId: quiz2,
        userId: user1,
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now()),
      },
      {
        id: 2,
        quizId: quiz1,
        userId: user1,
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now()),
      },
      {
        id: 3,
        quizId: quiz2,
        userId: user2,
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now()),
      },
      {
        quizId: quiz1,
        userId: user3,
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now()),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
    await queryInterface.bulkDelete('quiz', null, {});
    // await queryInterface.bulkDelete('users_quiz', null, {});
  },
};
