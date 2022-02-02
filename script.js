
// SELECTOR FUNCTION
function $(el){
	let elements = document.querySelectorAll(el);
	if(elements.length >1) return elements;
	else return elements[0];
}
