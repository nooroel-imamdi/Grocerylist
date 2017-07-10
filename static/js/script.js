// html elements
var groceryList = document.querySelectorAll('.my-grocery-list');
var groceryListWrap = document.querySelector('.my-grocery-list-wrap');
var img = document.querySelectorAll('img');
var userChoices = document.querySelectorAll('input');
var onlySelect = document.querySelector('.only-select');
var dragandropAvailable = document.querySelector('.dragandrop-available');

// feature detection on classList, draggable, addEventListener, forEach
if('classList' in document.documentElement
		&& 'draggable' in document.createElement('span')
		&& 'addEventListener' in window
		&& window.NodeList
		&& NodeList.prototype.forEach
		&& "files" in DataTransfer.prototype) {

	dragandropAvailable.classList.remove('hide');

	function drag(e) {
		e.dataTransfer.setData('id', e.target.id);
	}

	function dropToggle(e) {
		e.preventDefault();

		// delay to show feedback clear
		groceryListWrap.classList.add('indication-drop');
	}

	function drop(e) {
		e.preventDefault();
		var id = e.dataTransfer.getData('id');
		userChoices[id].click();
		// delay to show feedback clear
		groceryListWrap.classList.add('succes-drop');
	}

	img.forEach(function(img) {
	  img.addEventListener('dragstart', drag);
		img.classList.add('cursor');
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
	console.log('classList and draggable supported by current browser');
} else {
	console.log('classList and draggable doesnt supported by current browser');
}

if (window.NodeList && NodeList.prototype.forEach) {
	console.log('forEach');
} else {
	console.log('forEach not');

}
