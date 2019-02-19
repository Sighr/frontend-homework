'use strict'

 /**
	* Determines if empty.
	*
	* @param      {object}   obj     The object
	* @return     {boolean}  True if empty, False otherwise.
	*/
function isEmpty(obj) {
	for(let key in obj) {
			if(obj.hasOwnProperty(key)) {
					return false;
			}
	}
	return true;
}

 /**
	* Zip array of objects into one. Repeating fields are added just once.
	*
	* @param      {Array}   objects  The array of the objects
	* @return     {object}  Zipped object.
	*/
const zip = (...objects) => {
	return objects.reduceRight((result, current) => {
		if(isEmpty(current)) {
			return result;
		}
		for(let field in current) {
			result[field] = current[field];
		}
		return result;
	}, {})
}