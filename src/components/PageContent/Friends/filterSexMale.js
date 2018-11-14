/**
 * Filter Male Function
 * @constructor
 * @param {Array} friends  - Friends Array
 * @return {Array} - Filter Male
 */

export const filterSexMale = friends => {
	return friends.filter(item => {
		return item.gender === 'male';
	});
};

export default filterSexMale;
