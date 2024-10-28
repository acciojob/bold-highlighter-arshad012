
const strong_tags = document.querySelectorAll('#para > strong');

function highlight() {
    //Write your code here
	strong_tags.forEach((tag) => {
		tag.classList.remove('black');
		tag.classList.add('green');
	})
}


function return_normal() {
    //Write your code here
	strong_tags.forEach((tag) => {
		tag.classList.remove('green');
		tag.classList.add('black');
	})
}
