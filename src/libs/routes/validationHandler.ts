import { Request, Response, NextFunction } from 'express';

export default (validation) => (req: Request, res: Response, next: NextFunction) => {
console.log('The config is', validation);
console.log('The req body is', req.body, req.params, req.query);

const configKeys = Object.keys(validation);
configKeys.forEach(key => {
const keyData = validation[key];
console.log(keyData);
const values = keyData.in.map((location) => {
console.log('\n key is', key);
console.log('key value is', validation[key]);
console.log('value is', req[location][key]);
return req[location][key];
});
// if (keyData.regex.test('ajay rose')) {
// const ab = true;
// }
console.log(values, 'values');
if ((keyData && keyData.required) && (keyData && keyData.string) && (keyData && keyData.regex && keyData.regex.test(name)) && (keyData && keyData.number) && (keyData && keyData.isObject)) {
console.log('your string is true');
console.log('your name is valid');
const validateValues = values.filter(item => item);
console.log(validateValues, 'validateValues');
if (values.length !== validateValues.length)
next({message: `${key} is required`});
}
});
next();
};