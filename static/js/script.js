var groceryList = document.querySelectorAll('.my-grocery-list');
var img = document.querySelectorAll('img');
var userChoices = document.querySelectorAll('input');

function drag(e) {
	e.dataTransfer.setData('id', e.target.id);
}

function allowDrop(e) {
	e.preventDefault();
}

function dontDrop(e) {
	e.preventDefault();
}

function drop(e) {
	e.preventDefault();
	var id = e.dataTransfer.getData('id');
	userChoices[id].click();

}

function dragSucces(e) {
	groceryList.forEach(function(groceryList) {

	});
}

function dragFail(e) {
	groceryList.forEach(function (groceryList) {

	});
}

img.forEach(function (img) {
  return img.addEventListener('dragstart', drag);
});

groceryList.forEach(function (e) {
  return e.addEventListener('dragover', allowDrop);
});

groceryList.forEach(function (e) {
  return e.addEventListener('dragleave', dontDrop);
});

groceryList.forEach(function (e) {
  return e.addEventListener('drop', drop);
});
