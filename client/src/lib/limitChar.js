// 한글인 경우 maxLength + 1만큼 입력 가능한 것처럼 보여주지만,
// 실제 입력은 maxLength까지이기 때문에 maxLength까지 입력 가능한 것처럼 보여주는 함수
export function limitChar(len, num) {
  return len > num ? false : true;
}
