const errorHandler = ((err, req, res, next) => {
    console.log('Error', err);
    const { error, code, message } = err;
    const error1 = {
        status: code,
        Message: message,
        timestamp: new Date(),
        error: error || 'undefined',
    };
    res.send(error1);
    if (!res.headerSent) {
        return next(err);
    }

});
export default errorHandler;