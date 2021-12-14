import React from 'react';
import Interweave from 'interweave';

export const ShowTestCase = ({ testCases, inputRegex, handleIsCorrectRegTotal, handleInputCapture, handleTestCaseQuantity }) => {
  if (testCases.length === 0) return <></>;
  //! ------------------------ 정규표현식 생성 --------------------
  const createMyRegex = (inputRegex) => {
    // * Make new RegExp
    let myRegex;
    try {
      myRegex = new RegExp(inputRegex || '^$', 'g');
    } catch (e) {
      myRegex = new RegExp('^$', 'g');
    }
    return myRegex;
  };

  //! ------------------------ 정규표현식 실시간 적용 ------------------------
  const realtimeRegex = (testCase, myRegex) => {
    // * Realtime CSS
    let startIndex = 0,
      lastIndex = 0,
      highlightedTestCase = '',
      matchArray = myRegex.exec(testCase.target);
    if (Array.isArray(matchArray)) {
      lastIndex = matchArray.index;
      highlightedTestCase += testCase.target.substring(startIndex, lastIndex);
      highlightedTestCase += "<span class='found'>" + matchArray[0] + '</span>';
      startIndex = myRegex.lastIndex;
    }
    highlightedTestCase += testCase.target.substring(startIndex, testCase.target.length);
    return { highlightedTestCase, matchArray };
  };

  //! ------------------------ TestCase별로 출력 ------------------------
  let isCorrectRegTotal = [];
  return testCases.map((testCase, idx, arr) => {
    let myRegex = createMyRegex(inputRegex);
    let regExpResult = realtimeRegex(testCase, myRegex);
    let isCorrectReg = false;
    let isCorrectRegGroups = Array(testCase.target.length).fill(false);
    let captureInputArray = [];
    const isCaptuerInput = !!handleInputCapture;
    const matchArray = regExpResult.matchArray;
    const isValidRegex = Array.isArray(matchArray);

    // * Task별로 구분
    if (testCase.task === 'match') {
      if (isValidRegex) isCorrectReg = regExpResult.matchArray[0] === testCase.target;
    } else if (testCase.task === 'skip') {
      if (!isValidRegex) isCorrectReg = true;
    } else if (testCase.task === 'capture' && isCaptuerInput) {
      if (isValidRegex) {
        captureInputArray = regExpResult.matchArray.slice(1);
        if (!!handleInputCapture) handleInputCapture(idx, captureInputArray);
        isCorrectReg = true;
      }
    } else if (testCase.task === 'capture') {
      if (isValidRegex) {
        isCorrectRegGroups = testCase.groups.map((group, idx) => group === regExpResult.matchArray[idx + 1]);
        isCorrectReg = isCorrectRegGroups.indexOf(false) === -1;
      }
    }
    //! ------------------------ 모두 맞았는지 확인 ------------------------

    if (isCorrectReg) isCorrectRegTotal.push(true);
    else isCorrectRegTotal.push(false);
    if (arr.length === isCorrectRegTotal.length) handleIsCorrectRegTotal(isCorrectRegTotal);

    // * 출력
    return (
      <>
        <div>
          <h2>📍{testCase.task}</h2>
        </div>
        <div iscorrectregtotal={isCorrectRegTotal}>
          <Interweave content={regExpResult.highlightedTestCase} />
          {isCorrectReg ? '✅' : '❌'}
          {handleTestCaseQuantity ? (
            <button type="button" onClick={handleTestCaseQuantity('delete', idx)}>
              ➖
            </button>
          ) : (
            <></>
          )}

          {testCase.task === 'capture' ? (
            isCaptuerInput ? (
              captureInputArray.map((el) => <p class="found">{el}</p>)
            ) : (
              testCase.groups.map((el, idx) => (isCorrectRegGroups[idx] ? <p class="found">{el}</p> : <p>{el}</p>))
            )
          ) : (
            <></>
          )}
        </div>
        <hr />
      </>
    );
  });
};

export default ShowTestCase;
