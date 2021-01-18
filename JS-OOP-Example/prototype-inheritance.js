// let superObj = {superVal: 'super'};
// let subObj = Object.create(superObj);       // __proto__ 보다 object.create가 더 좋음
// subObj.subVal = 'sub';
// debugger;                               // 브라우저에서 중단점 역할을 할 수 있음
// console.log('subObj.subVal => ', subObj.subVal);
// console.log('subObj.superVal => ', subObj.superVal);
//
// // 변경을 시도하지만 아래 코드는 객체를 바꾼게 아님
// subObj.superVal = 'sub';
// console.log('superObj.superVal => ', superObj.superVal);  // superObj.superVal => super

// kim 객체 생성
kim = {
    name: 'kim',
    first: 10, second: 20,
    sum: function () {
        return this.first + this.second
    }
}

// Object.create() 를 이용한 상속
let lee = Object.create(kim);
lee.name = 'lee';
lee.first = 10;
lee.second = 10;
lee.avg = function () {
    return (this.first + this.second) / 2;
}

// // __proto__ 를 이용한 상속
// lee = {
//     name:'lee',
//     first:10,second:10,
//     avg: function(){
//         return (this.first + this.second) / 2;
//     }
// }
// lee.__proto__ = kim;

console.log('kim.sum()', kim.sum());
console.log('lee.sum()', lee.sum());
console.log('lee.avg()', lee.avg());