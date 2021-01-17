let superObj = {superVal:'super'};
// let subObj = {subVal : 'sub'};
// subObj.__proto__ = superObj;        // subObj가 superObj의 자식임을 선언
let subObj = Object.create(superObj);       // __proto__ 보다 object.create가 더 좋음
subObj.subVal='sub';
debugger;                               // 브라우저에서 중단점 역할을 할 수 있음
console.log('subObj.subVal => ', subObj.subVal);
console.log('subObj.superVal => ', subObj.superVal);

// 변경을 시도하지만 아래 코드는 객체를 바꾼게 아님
subObj.superVal = 'sub';
console.log('superObj.superVal => ', superObj.superVal);  // superObj.superVal => super