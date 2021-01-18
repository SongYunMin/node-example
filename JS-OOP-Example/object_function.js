let kim = {name: 'kim', first: 10, second: 20}
let lee = {name: 'lee', first: 10, second: 10}

// 어떤 객체에도 속해있지 않음
function sum(prefix) {
    // this = kim;
    // this 가 kim이기 때문에 kim에 값들이 set 됨
    return prefix + (this.first + this.second);
}

// sum.call(kim) : sum 이라는 메소드가 kim의 멤버 메소드가 됨
// 첫 번째 인자 : this를 무엇으로 할것인가?
// 두 번째 인자 : 파라미터 값 세팅
console.log("sum.call(kim)",sum.call(kim, ' => '));     // sum.call(kim) => 30
console.log("sum.call(lee)",sum.call(lee, ' : '));      // sum.call(lee) : 20

// this 를 kim으로 설정
// sum이 바꾼게 아니라 sum을 이용한 새로운 메서드 'kimSum' 을 생성한 것.
let kimSum = sum.bind(kim, ' -> ');
console.log('kimSum()',kimSum());