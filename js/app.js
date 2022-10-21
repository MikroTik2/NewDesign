//let numOne = 10;
//let numTwo = 5;

//console.log(numOne, numTwo);
//function getNumOne() {
//   let numOne = 45;
//}
//function getNumTwo() {
//    numTwo = 50;
//}

//getNumOne();
//getNumTwo();

//let numSumm = numOne + numTwo;
//console.log(numSumm, numOne, numTwo);

//const users = [12, 435, 23, 5];
//const cars = [234, 34, 212, 54];
//const carsNue = []

//console.log(users);
//users.forEach((item, key) => {
//   console.log(item, key);
//})
//cars.forEach( (item, key) => {
//    console.log(item, key);
//    let carsNue = []
//    carsNue.push(item + 1);
// })
 
// console.log(carsNue);

//function calcSumm(numOne, numTwo, more, less) {
//    let numSumm = numOne + numTwo;

//    if(numSumm > 3) {
//        more();
//    } else {
//        less();
//    }
//}

//function showMoreMessage() {
//    console.log('Меньше чем 3');
//}
//function showLessMessage() {
//    console.log('Больше чем 3');
//}

//calcSumm(1, 1,showLessMessage, showMoreMessage);



//function calcSumm2 (numOne, numTwo) {
//    let numSumm = numOne + numTwo;

//    if(numSumm > 3) {
//        return 10;
//    } else {
//        return 5;
//    }
//}
//let result = calcSumm2(1, 4) +2;
//console.log(result);
 
//function calcSumm(numOne, numTwo, more, less) {
//    let numSumm = numOne + numTwo;

//    if(numSumm > 3) {
//        more();
//    } else {
//        less();
//    }
//}



//let users = [
//    {
//     name: 'Artur',
//     age: 14
//    },
//    {
//     name: 'Vetal',
//     age: 33
//    },
//];

//let ul = document.querySelector(".nav-sec");
//users.forEach((user) => {
//    let li = document.createElement("li");
//    li.innerText = `${user.name} ${user.age}`;
//    ul.append(li);
//})

//setTimeout(() => {
//   setTimeout();
//}, 300)

//function calcSumm(numOne, numTwo) {
//    console.log(`${numOne}`);
//    console.log(`${numTwo}`);
//    let numSumm = numOne + numTwo;
//    console.log(`Сумма: ${numSumm}`);
//}

//calcSumm(345, 23);

//function foo() {
//    console.log('Hello world');
//}

//foo();

//foo.field = 'Artur';

//console.log(foo.field);

//const arr = ['Denis', 'Artur', 'Vitaliy', 'Olga'];

//let newArr = [];

//for (let i = 0;i < arr.length; i++ ) {
//    newArr.push(arr[i].length);
//}
//console.log(newArr);

//let newArr2 = [];

//for (let i = 0; i < arr.length; i++){
//    newArr2.push[arr[i].toUpperCase];
//}
//console.log(newArr2)


//function mapArray(arr, fn) {
//    const res = [];
//    for (let i = 0; i < arr.length; i++) {
//        res.push(fn(arr[i]));
//    }

//    return res;
//}

//function nameLength(el) {
//    console.log(el);
//    return el;
//}

//mapArray(names, nameLength);

 


//getThis();
//window.getThis();
//console.log(window.getThis);

const animItems = document.querySelectorAll('._anim-items');

if(animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if(animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('_anim-no-hide'))
                animItem.classList.remove('_active');
            }
        }
    }
    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
}

setTimeout(() => {
    animOnScroll();
}, 500)