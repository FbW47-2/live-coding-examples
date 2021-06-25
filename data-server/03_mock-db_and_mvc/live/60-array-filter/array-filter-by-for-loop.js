const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

function filter(originalArray, filterOrNotCallback) {
	const filteredArray = [];

	for (let i = 0; i < originalArray.length; i++) {
		let item = originalArray[i];

		//if (item.length > minLength) {
		if (filterOrNotCallback(item)) {
			filteredArray.push(item);
		};
	}

	return filteredArray;
}

const minLength = 6;
const newArray = filter(words, (word) => word.length > minLength);

console.log(newArray);
