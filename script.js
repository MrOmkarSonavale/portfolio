const slides = document.querySelectorAll('.slide');
const dotContainer = document.querySelector('.dots');
// const cursor = document.querySelector(".cursor");

// document.addEventListener("mousemove", (e) => {
// 	let x = e.pageX;
// 	let y = e.pageY;

// 	cursor.style.top = y + "px";
// 	cursor.style.left = x + "px";
// });

const slider = function () {
	const slides = document.querySelectorAll('.slide');
	const dotContainer = document.querySelector('.dots');

	let curSlide = 0;
	const maxSlide = slides.length;

	// Functions
	const createDots = function () {
		slides.forEach(function (_, i) {
			dotContainer.insertAdjacentHTML(
				'beforeend',
				`<button class="dots__dot" data-slide="${i}"></button>`
			);
		});
	};

	const activateDot = function (slide) {
		document
			.querySelectorAll('.dots__dot')
			.forEach(dot => dot.classList.remove('dots__dot--active'));

		document
			.querySelector(`.dots__dot[data-slide="${slide}"]`)
			.classList.add('dots__dot--active');
	};

	const goToSlide = function (slide) {
		slides.forEach(
			(s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
		);
	};

	// Next slide
	const nextSlide = function () {
		if (curSlide === maxSlide - 1) {
			curSlide = 0;
		} else {
			curSlide++;
		}

		goToSlide(curSlide);
		activateDot(curSlide);
	};

	const prevSlide = function () {
		if (curSlide === 0) {
			curSlide = maxSlide - 1;
		} else {
			curSlide--;
		}
		goToSlide(curSlide);
		activateDot(curSlide);
	};

	const init = function () {
		goToSlide(0);
		createDots();

		activateDot(0);
	};
	init();


	document.addEventListener('keydown', function (e) {
		if (e.key === 'ArrowLeft') prevSlide();
		e.key === 'ArrowRight' && nextSlide();
	});

	dotContainer.addEventListener('click', function (e) {
		if (e.target.classList.contains('dots__dot')) {
			const { slide } = e.target.dataset;
			goToSlide(slide);
			activateDot(slide);
		}
	});
};
slider();