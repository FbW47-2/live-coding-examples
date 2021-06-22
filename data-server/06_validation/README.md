# Validation

## (42) Introduction: Making data consistent and secure

## (43) Validate:
- Importance of server side validation
- Very small example: Finding `validator.js` matchers
  `validator.isEmail(<string>)`
- Adding `express-validator` to our project
- Validating fields: `check(<field name>).<matcher function>`

optional:
## (44) Checking for errors:
- Parsing the request: `validationResult(req)` => ValidationResult
- Checking the result: `ValidationResult.prototype.isEmpty()`
- Formatting to an array: `ValidationResult.prototype.array()`
- Adding custom messages:
  `check(<field name).<matcher function>.withMessage(<message>)`

## Links
### Express Validator
https://express-validator.github.io/docs/
