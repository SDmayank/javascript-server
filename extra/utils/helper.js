const checkEmail = (str) => {
    let validate = /([a-zA-Z0-9_\-\.]+)@successive[.]tech$/gmi;
    return validate.test(str);
}
 export { checkEmail }