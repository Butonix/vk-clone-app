/**
 * Name Parse Function
 * @constructor
 * @param {string} firstName  - First Name
 * @param {string} lastName - Last Name
 * @return {string} - name
 */

export default function parseName(firstName, lastName) {
	let resultName =
		firstName.charAt(0).toUpperCase() +
		firstName.slice(1) +
		' ' +
		lastName.charAt(0).toUpperCase() +
		lastName.slice(1);

	return resultName;
}
