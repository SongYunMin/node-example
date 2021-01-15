let memberObject = {
    manager: 'egoing',
    developer: 'graphittie',
    designer: 'leezhce'
}
// 멤버 수정
memberObject.designer = 'leezche';

console.log(memberObject.designer);
console.log(memberObject['designer']);

// 멤버 삭제
delete memberObject.manager;
console.log(memberObject.manager);