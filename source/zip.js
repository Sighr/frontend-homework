'use strict'

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

const zip = (...objects) =>
{
	var result = {};
	for (var i = objects.length - 1; i >= 0; i--)
	{
		if(isEmpty(objects[i]))
			continue;
		for(var field in objects[i])
		{
			result[field] = objects[i][field];
		}
	}
	return result;
}