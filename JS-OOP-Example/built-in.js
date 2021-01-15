console.log(Math.PI);
console.log(Math.random());         // method
console.log(Math.floor(3.9));
console.log("------------------------------");


let MyMath = {
    PI:Math.PI,
    random: function(){
        return Math.random();
    },
    floor:function (val) {
        return Math.floor(val);
    }
}

console.log(MyMath.PI);
console.log(MyMath.random());
console.log(MyMath.floor(3.9));