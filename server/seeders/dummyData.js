'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const user1 = await queryInterface.bulkInsert('users', [
      {
        id: 1,
        email: 'kimcoding@test.com',
        nickname: '코딩이',
        password: '$2a$10$VFsnpLvCsF4sOqy2TZgDhuoVd/moEoIVjeGK48AbB7p17G4Ng1i9K',
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now()),
      },
    ]);

    const user2 = await queryInterface.bulkInsert('users', [
      {
        id: 2,
        email: 'parkhacker@test.com',
        nickname: '해킹이',
        password: '$2a$10$VFsnpLvCsF4sOqy2TZgDhuoVd/moEoIVjeGK48AbB7p17G4Ng1i9K',
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now()),
      },
    ]);

    const user3 = await queryInterface.bulkInsert('users', [
      {
        id: 3,
        email: 'gurl97@test.com',
        nickname: '지녁이',
        password: '$2a$10$VFsnpLvCsF4sOqy2TZgDhuoVd/moEoIVjeGK48AbB7p17G4Ng1i9K',
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now()),
      },
    ]);

    const quiz1 = await queryInterface.bulkInsert('quiz', [
      {
        id: 1,
        userId: user1,
        title: 'a만 통과하는 정규표현식 작성하기',
        testCase: 'aAbBcCdDeE',
        testCaseTarget: 'a',
        answer: 'a',
        explanation: '블라블라',
        count: 3,
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now()),
      },
    ]);

    const quiz2 = await queryInterface.bulkInsert('quiz', [
      {
        id: 2,
        userId: user2,
        title: 'b만 통과하는 정규표현식 작성하기',
        testCase: 'aAbBcCdDeE',
        testCaseTarget: 'b',
        answer: 'b',
        explanation: '어쩌구저쩌구',
        count: 1,
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now()),
      },
    ]);

    const quiz3 = await queryInterface.bulkInsert('quiz', [
      {
        id: 3,
        userId: user1,
        title: 'E만 통과하는 정규표현식 작성하기',
        testCase: 'aAbBcCdDeE',
        testCaseTarget: 'E',
        answer: 'E',
        explanation: '저쩌구어쩌구',
        count: 7,
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now()),
      },
    ]);
    await queryInterface.bulkInsert('users_quiz', [
      {
        quizId: quiz2,
        userId: user1,
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now()),
      },
      {
        quizId: quiz1,
        userId: user1,
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now()),
      },
      {
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
  },
};
