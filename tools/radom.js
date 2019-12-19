// 生成(m, n)的随机数

// [m, n)
// function random (m, n) {
//     return Math.floor(Math.random() * m) + n - m;
// }

// (m, n]
// function random (m, n) {
//     return Math.floor(Math.random() * m) + n - m + 1;
// }

// [m, n]
// function random (m, n) {
//   return Math.round(Math.random() * m ) + n - m;
// }

// (m, n)
function random (m, n) {
    return Math.ceil(Math.random() * m) + n - m;
}
for(let j = 0; j < 10; j++) {
    let count = {};
    for (let i = 0; i < 100; i++) {
        let a = random(10, 20);
        a = a === 20 ? 19 : a;
        count[a] ? count[a]++ : (count[a] = 1);
    }
    console.log(count);
}

