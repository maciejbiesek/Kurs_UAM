window.onload = function() {
	var addButton = document.getElementById("addButton");
	addButton.addEventListener("click", add);
	counter = 0;
	array = [];
	updateSummary();

}

function add() {
	var inputField = document.getElementById("input");
	var input = inputField.value;
	document.getElementById("input").value="";
	var list = document.getElementById("list");
	if (input != "") {
		var li = document.createElement("li");
		li.setAttribute("id", "elem" + counter);
		li.setAttribute("class", "inActive");
		li.innerHTML = input;
		list.appendChild(li);

		array.push({ name: input, state: 0 });

		var deleteButton = document.createElement("input");
		deleteButton.setAttribute("id", "butt" + counter);
		deleteButton.setAttribute("type", "button");
		deleteButton.setAttribute("value", "Delete");
		deleteButton.setAttribute("class", "delete");
		li.appendChild(deleteButton);
		deleteButton.addEventListener("click", liDelete);

		li.addEventListener("click", liSetInActive);

		counter += 1;

		updateSummary();
	}
	else {
		alert("empty field!")
	}
}

function liDelete() {
	var counter = this.id.match(/\d+/); // one or more digits
	var liElem = document.getElementById("elem" + counter);

	var index = findByName(array, liElem.innerHTML);
	array.splice(index, 1);

	liElem.parentNode.removeChild(liElem);

	updateSummary();
}

function liSetInActive() {
	var li = document.getElementById(this.id);
	


	if (li) {
		var index = findByName(array, li.innerHTML);
		if (array[index].state === 0) {
			array[index].state = 1;
		}
		else {
			array[index].state = 0;
		}
		

		if (li.getAttribute("class") === "active") {
			li.setAttribute("class", "inActive");
		}
		else li.setAttribute("class", "active");
	}
	updateSummary();
}

function findByName(source, elem) {
	var tmpString = "";
	var count = 0;
	while (elem[count] != "<") {
		tmpString += elem[count];
		count++;
	}

  	for (var i = 0; i < source.length; i++) {
    	if (source[i].name === tmpString) {
      		return i;
    	}
  	}
}

function updateSummary() {
	var summary = document.getElementById("summary");
	var activeCounter = 0;
	array.forEach(function (elem) {
		if (elem.state === 1) {
			activeCounter++;
		}
	});

	summary.innerHTML = activeCounter + " / " + array.length;

}
