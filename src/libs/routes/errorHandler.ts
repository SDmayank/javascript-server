const errorHandler = ((err, req, res, next) => {
    console.log('Error', err);
    const { error, code, message } = err;
    const error1 = {
        Error: error,
        status: code,
        Message: message,
        timestamp: new Date(),
        error: error || 'undefined',
    };
    res.send(error);
    if (!res.headerSent) {
        return next(err);
    }

});
export default errorHandler;