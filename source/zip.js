'use strict'

 /**
  * Determines if empty.
  *
  * @param      {<type>}   obj     The object
  * @return     {boolean}  True if empty, False otherwise.
  */

function isEmpty(obj) {
    for(let key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

 /**
  * Zip array of objects into one. Repeating fields are added just once.
  *
  * @param      {Array}   objects  The objects
  * @return     {<type>}  Zipped object.
  */

const zip = (...objects) =>
{
	let result = {};
	for (let i = objects.length - 1; i >= 0; i--)
	{
		if(isEmpty(objects[i]))
			continue;
		for(let field in objects[i])
		{
			result[field] = objects[i][field];
		}
	}
	return result;
}