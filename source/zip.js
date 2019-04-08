'use strict';

 /**
	* Zip array of objects into one. Repeating fields are added just once.
	*
	* @param      {Array}   objects  The array of the objects
	* @return     {object}  Zipped object.
	*/
const zip = (...objects) => {
	let array = [...objects];
	array = array.filter((elem) => {return elem != null && typeof elem !== 'undefined'});
	array.push({});
	return Object.assign(...array.reverse());
};