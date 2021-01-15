let kim = {
    name:'kim',
    first:10,
    second:20,
    sum:function(f, s){
        return this.first + this.second;
    }
}
// console.log(kim.sum(kim.first, kim.second));    // 30
console.log(kim.sum());