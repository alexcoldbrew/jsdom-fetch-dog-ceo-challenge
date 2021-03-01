console.log('%c HI', 'color: firebrick')

const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

// challenge 2

function fetchBreeds() {
	fetch(breedUrl)
	.then(resp => resp.json())
	.then(json => postBreed(json));
}

// challenge 2

function postBreed(json) {
	let breedList = document.querySelector("#dog-breeds");
	for (let key in json.message) {
		let breed = document.createElement('li');
		if (json.message[key].length > 0) {
			json.message[key].forEach(e => {
				breed.innerHTML = `${e} ${key}`;
				breed.className = "breed";
				breedList.append(breed);
			})
		}
		else {
			breed.innerHTML = `${key}`;
			breed.className = "breed";
			breedList.append(breed);
		}
	}

// challenge 3

	breedList.addEventListener('click', e => {
		e.target.style.color = 'blue';
	});
}

// challenge 1

function fetchImages() {
	fetch(imgUrl)
	.then(resp => resp.json())
	.then(json => postImage(json));
}

// challenge 1

function postImage(json) {
	let dogImgContainer = document.querySelector("#dog-image-container");
	let listOfImages = document.createElement('ul');
	dogImgContainer.append(listOfImages);
	json.message.forEach(e => {
		let item = document.createElement('li');
		item.innerHTML = `<img src= ${e}>`;
		listOfImages.append(item);
	});
}

// challenge 4

function filter() {
	let breedDropDown = document.querySelector("#breed-dropdown");
	breedDropDown.value = "";
	breedDropDown.addEventListener('change', e => {
		document.querySelectorAll('.breed').forEach(element => {
			// debugger
			if (element.innerText.toLowerCase().charAt(0) == e.target.value) {
				element.style.display = "block";
			}
			else {
				element.style.display = "none";
			}
		})
	})
}

// does all these on page load

document.addEventListener('DOMContentLoaded', e => {
	fetchImages();
	fetchBreeds();
	filter();
});