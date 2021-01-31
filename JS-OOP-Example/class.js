class Person {
    // 객체에 해당하는 메서드를 만들때?
    constructor(name, first, second) {      // 생성자
        this.name = name;
        this.first = first;
        this.second = second;
    }

    // 한번만 정의됨 : 성능 절약
    sum() {
        return this.first + this.second;
    }
}

class PersonPlus extends Person {
    constructor(name, first, second, third) {
        super(name, first, second);     // 부모 클래스 초기화
        this.third = third;
    }
    // 부모 클래스의 sum메소드를 사용
    sum() {
        return super.sum() + this.third;
    }
    avg() {
        return (super.sum() + this.third) / 3;
    }
}

class Student extends PersonPlus{
    #number
    constructor(name, first, second, third, number) {
        super(name, first, second, third);
        this.#number = number;
        this.makeStudent();
    }

    makeStudent(){

    }

}

let kim = new PersonPlus('kim', 10, 20, 30);

console.log("kim.sum()", kim.sum());
console.log("kim.avg()", kim.avg());
