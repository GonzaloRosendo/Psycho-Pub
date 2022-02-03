//-------------------------------------------------- HAMBURGER MENU-------------------------------------------------- 

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const menuIcon = document.querySelector(".menuIcon");
const closeIcon = document.querySelector(".closeIcon");

function toggleMenu() {
	if (menu.classList.contains("showMenu")) {
		menu.classList.remove("showMenu");
		closeIcon.style.display = "none";
		menuIcon.style.display = "inline";
	} else {
		menu.classList.add("showMenu");
		closeIcon.style.display = "inline";
		menuIcon.style.display = "none";
	}
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(
	function (menuItem) {
		menuItem.addEventListener("click", toggleMenu);
	}
)


//--------------------------------------------------TYPE AND DELETE-------------------------------------------------- 

// List of sentences
var _CONTENT = [
	"Cocktail",
	"Crypto art",
	"NFTs",
];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed 
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#text");

// Cursor element 
var _CURSOR = document.querySelector("#cursor");

// Implements typing effect
function Type() {
	// Get substring with 1 characater added
	var text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if (text === _CONTENT[_PART]) {
		// Hide the cursor
		_CURSOR.style.display = 'none';

		clearInterval(_INTERVAL_VAL);
		setTimeout(function () {
			_INTERVAL_VAL = setInterval(Delete, 100);
		}, 1000);
	}
}

// Implements deleting effect
function Delete() {
	// Get substring with 1 characater deleted
	var text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	// If sentence has been deleted then start to display the next sentence
	if (text === '') {
		clearInterval(_INTERVAL_VAL);

		// If current sentence was last then display the first one, else move to the next
		if (_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;

		_PART_INDEX = 0;

		// Start to display the next sentence after some time
		setTimeout(function () {
			_CURSOR.style.display = 'inline-block';
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);

//--------------------------------------------------SCROLL APPEAR-------------------------------------------------- 
function scrollAppear(x,y,z) {
	var x = document.querySelector(`.${x}`);
	var y = x.getBoundingClientRect().top;
	var screenPosition = window.innerHeight / 1.35;

	if (y < screenPosition) {
		x.classList.add(`${z}`);
	}
}

window.addEventListener('scroll', () => scrollAppear("border", "borderPosition", "borderOn"));

//--------------------------------------------------TABLA MENU-------------------------------------------------- 

var MenuSeries = document.querySelector(".menuSeries");

function createSerie(x){
	var serie = document.createElement ("div");
	serie.classList.add("serie");
	serie.innerHTML = `
							<div class="titlePrice">
								<h4>${x.name}</h4>

								<div id="eth">
									<span>${x.price}</span>
									<img src="./logos/Ethereum.svg" alt="Gonzalo Rosendo">
								</div>
							</div>

							<div class="container">
								<div class="box">
									<img src="${x.item1}" alt="${x.id}">
									<a href=${x.link1}>
										<p>Buy on Rarible</p>
									</a>
									<p>${x.id1}</p>
								</div>

								<div class="box">
									<img src="${x.item2}" alt="${x.id2}">
									<a href=${x.link2}>
										<p>Buy on Rarible</p>
									</a>
									<p>${x.id2}</p>
								</div>

								<div class="box">
									<img src="${x.item3}" alt="${x.id3}">
									<a href=${x.link3}>
										<p>Buy on Rarible</p>
									</a>
									<p>${x.id3}</p>
								</div>
								
								<div class="box">
									<img src="${x.item4}" alt="${x.id4}">
									<a href=${x.link4}>
										<p>Buy on Rarible</p>
									</a>
									<p>${x.id4}</p>
								</div>
								
								<div class="box">
									<img src="${x.item5}" alt="${x.id5}">
									<a href=${x.link5}>
										<p>Buy on Rarible</p>
									</a>
									<p>${x.id5}</p>
								</div>
							</div>`;
	MenuSeries.appendChild(serie);
}

for (let i = 0 ; i < series.length ; i++) {
	createSerie(series[i]);
}

//--------------------------------------------------APPEAR SERIES-------------------------------------------------- 
window.addEventListener('scroll', () => scrollAppear("menuSeries", "menuSeriesPosition", "menuSeriesOn"));

//--------------------------------------------------APPEAR CREATOR-------------------------------------------------- 
window.addEventListener('scroll', () => scrollAppear("borderCreator", "borderCreatorPos", "borderCreatorOn"));

//--------------------------------------------------SHOW WHEN LOADED-------------------------------------------------- 
function fade () {
	$('#loader').delay(7000).fadeOut();
	$('#page').delay(7000).fadeIn();
}

fade ();

