// function fakeBin(x) {

// 	for (let i = 0; i < x.length; i++) {
// 		let stringNumber = '';
// 		if (Number(x[i]) < 5) {
// 			stringNumber = stringNumber + '0';
// 		} else if (Number(x[i]) >= 5) {
// 			stringNumber += '1'
// 		}


// 	}
// 	return stringNumber;
// }
// console.log(fakeBin(2131232));


// function fakeBin(x) {
// 	let arr = [];

// 	for (let i = 0; i < x.length; i++) {
// 		if (Number(x[i]) < 5) {
// 			arr.push(0)
// 		} else if (Number(x[i]) >= 5) {
// 			arr.push(1);
// 		}
// 	}
// 	arr = arr.join("");
// 	return arr;
// }
// console.log(fakeBin(`127873`));

// function digits(n) {
// 	// code goes here
// 	return n.toString().length;
// }
// console.log(digits(3112));

// document.querySelector('.button1').addEventListener('click', myAlert);
// function myAlert() {
// 	alert('Hello World');
// }


// function changeInput() {
// 	let input = document.querySelector('.i-2');

// 	alert(input.value);

// }
// document.querySelector('.button1').addEventListener('click', changeInput);
// document.querySelector('.button1').addEventListener('click', squeryNumber);

// function squeryNumber() {
// 	let number = document.querySelector('.i-2').value;
// 	if (Number(number)) {
// 		alert(number ** 2);

// 	} else {
// 		alert('Неправильно введено число');
// 	}

// }

// document.querySelector('.button1').addEventListener('click', exchange);

// function exchange() {
// 	let first = document.querySelector('.i-1');
// 	let second = document.querySelector('.i-2');
// 	let firstValue = first.value;
// 	let secondValue = second.value;
// 	first.value = secondValue;
// 	second.value = firstValue;



// }
// document.querySelector('.button1').addEventListener('click', changeButton);
// function changeButton() {
// 	document.querySelector('.button1').innerHTML = 'Нажмите сюда';
// }

// document.querySelector('.button1').addEventListener('click', changeColor)

// function changeColor() {
// 	let inputValue1 = document.querySelector('.i-1');
// 	inputValue1.style.color = 'red';
// }

// document.querySelector('.button1').addEventListener('click', unlock);
// document.querySelector('.button2').addEventListener('click', lock);
// function unlock() {
// 	document.querySelector('.i-1').disabled = true;
// }
// function lock() {
// 	document.querySelector('.i-1').disabled = false;
// }

// document.querySelector('.button1').addEventListener('dblclick', buttonMouseOver);
// function buttonMouseOver() {
// 	alert('Привет');
// }
// document.querySelector('.button1').addEventListener('click', changeText);
// function changeText() {
// 	document.querySelector('.i-1').value = 'Жопа';

// }
// document.querySelector('.button2').addEventListener('click', changeImage);

// function changeImage() {
// 	document.querySelector('img').src = '/image/с кулаком.jpg'
// }
// document.querySelector('.button1').addEventListener('click', changeImage2);
// function changeImage2() {
// 	document.querySelector('img').src = '/image/голова в бок.jpg'

// }


// let count = 0;
// const sliderLine = document.querySelector('.slider-line');
// document.querySelector('.next').addEventListener('click', rollNextSlide);
// document.querySelector('.prev').addEventListener('click', rollPrevSlide);
// function rollNextSlide() {
// 	count -= 500;
// 	if (count < (-2500)) {
// 		count = 0;
// 	}
// 	sliderLine.style.left = count + 'px';
// }

// function rollPrevSlide() {
// 	count += 500;
// 	if (count > 0) {
// 		count = (-2500)
// 	}
// 	sliderLine.style.left = count + 'px';
// }

let count = 0;
const sliderItems = document.querySelectorAll('img');
const sliderLength = sliderItems.length;
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

function rollNextSlide() {
	sliderItems[count].classList.remove('active');
	if (count >= sliderLength - 1) {
		count = 0;
	} else {
		count++
	}
	sliderItems[count].classList.add('active')
}


function rollPrevSlide() {
	sliderItems[count].classList.remove('active');
	if (count > 0) {
		count--
	} else {
		count = sliderLength - 1
	}
	sliderItems[count].classList.add('active')
}

function pressKey(e) {
	e = e || window.event;

	if (e.keyCode == '37') {
		rollPrevSlide();
	} else if (e.keyCode == '39') {
		rollNextSlide();
	}
}

function scrollWithMouse(e) {
	e = e || window.event;
	if (e.deltaY < 0) {
		rollNextSlide();
	} else {
		rollPrevSlide();
	}

}
next.addEventListener('click', rollNextSlide);
prev.addEventListener('click', rollPrevSlide);
document.addEventListener('keydown', pressKey);
document.addEventListener('wheel', scrollWithMouse);



