const checkEmail = (str: string): boolean => {
    const validate = /([a-zA-Z0-9_\-\.]+)@successive[.]tech$/gmi;
    return validate.test(str);
};
export { checkEmail };