// feature detection
if('classList' in document.documentElement
		&& 'draggable' in document.createElement('span')
		&& 'addEventListener' in window
		&& window.NodeList
		&& NodeList.prototype.forEach
		&& "files" in DataTransfer.prototype) {

	// html elements
	var groceryList = document.querySelectorAll('.my-grocery-list');
	var groceryListWrap = document.querySelector('.my-grocery-list-wrap');
	var img = document.querySelectorAll('img');
	var userChoices = document.querySelectorAll('input');
	var onlySelect = document.querySelector('.only-select');
	var dragandropAvailable = document.querySelector('.dragandrop-available');

	dragandropAvailable.classList.remove('hide');

	function drag(e) {
		e.dataTransfer.setData('id', e.target.id);
	}

	function dropToggle(e) {
		e.preventDefault();
		groceryListWrap.classList.add('succes-drop');
	}

	function drop(e) {
		e.preventDefault();
		var id = e.dataTransfer.getData('id');
		userChoices[id].click();
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
}
