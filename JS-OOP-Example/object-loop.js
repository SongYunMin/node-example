
let memberArray = ['egoing', 'graphittie', 'ieezche'];
console.group('array loop');
let i=0;
while(i<memberArray.length){
    console.log(i, memberArray[i]);
    i=i+1;
}
console.groupEnd('array loop');

let memberObject = {
    manager : 'egoing',
    developer:'graphittie',
    designer:'leezche'
}
console.group('object loop');
for(let name in memberObject){
    console.log(name, memberObject[name]);      // TODO : 리마인드 !! 중요 !
}
console.groupEnd('object loop');