// html elements
var groceryList = document.querySelectorAll('.my-grocery-list');
var img = document.querySelectorAll('img');
var cursorMove = document.querySelector('img');
var userChoices = document.querySelectorAll('input');
var onlySelect = document.querySelector('.only-select');
var dragandropAvailable = document.querySelector('.dragandrop-available');

// feature detection if draggable and classList is available
if('classList' in document.documentElement || 'draggable' in document.createElement('span')) {
	onlySelect.classList.add('hide');
	dragandropAvailable.classList.remove('hide');
	cursorMove.classList.add('cursor');
}
// feature detection for mobile because drag and drop doesn't work on mobile
if(window.matchMedia("(max-width: 480px)").matches) {
	onlySelect.classList.remove('hide');
	dragandropAvailable.classList.add('hide');
}

function drag(e) {
	e.dataTransfer.setData('id', e.target.id);
}

function dropToggle(e) {
	e.preventDefault();
}

function drop(e) {
	e.preventDefault();
	var id = e.dataTransfer.getData('id');
	userChoices[id].click();
}
if (Array.prototype.forEach) {
	img.forEach(function(img) {
	  img.addEventListener('dragstart', drag);
	});

	groceryList.forEach(function(e) {
	  e.addEventListener('dragover', dropToggle);
	});

	groceryList.forEach(function(e) {
	  e.addEventListener('dragleave', dropToggle);
	});

	groceryList.forEach(function(e) {
	  e.addEventListener('drop', drop);
	});
}
