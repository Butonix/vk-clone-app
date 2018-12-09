export const generateFilterAgeNumbers = (from, to) => {
	let agesArray = [];
	for (let i = from; i <= to; i++) {
		agesArray.push(i.valueOf())
	}
	return agesArray;
}

export default generateFilterAgeNumbers;