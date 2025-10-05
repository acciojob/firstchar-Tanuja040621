function firstChar(text) {
 let trimmerText=text.trim();
	return trimmerText.charAt(0);
}
const text = prompt("Enter text:");
alert(firstChar(text));
