function Person(name, first, second) {
    this.name  = name;
    this.first = first;
    this.second = second;

}
// 한번만 정의됨 : 성능 절약
Person.prototype.sum = function () {
    return 'prototype : ' + (this.first + this.second);
}

let kim = new Person('kim',10,20,30);
kim.sum = function(){   // kim 만 동작을 다르게 정의할 수 있음
    return 'this : ' + (this.first+this.second);
}

let lee = new Person('lee',10,10,10);

console.log("kim.sum()", kim.sum());    // this : 60
console.log("lee.sum()", lee.sum());    // modified : 30
