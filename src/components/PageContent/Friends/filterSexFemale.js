/**
 * Filter Female Function
 * @constructor
 * @param {Array} friends  - Friends Array
 * @return {Array} - Filter Female
 */

export const filterSexFemale = friends => {
	return friends.filter(item => {
		return item.gender === 'female';
	});
};

export default filterSexFemale;
