var Ajv = require('ajv');
var ajv = new Ajv();

module.exports = (schema, options) => {
    var validate = ajv.compile(schema);
    var valid = validate(options);

    if (!valid) {
        console.log('INVALID', validate.errors);
    } 
	return valid ? [] : valid.errors;
};