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
	 if(isEmpty(objects[i])) {
		 continue;
	 }
	 for(let field in objects[i]) {
		 result[field] = objects[i][field];
	 }
	}, {})
}