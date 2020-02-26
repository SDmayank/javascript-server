class SystemResponse {
    static success = ( res , data , count, message = 'success') => {
    return res.status(200).send({
    status : '210',
    message,
    count,
    data
});
    }
    }
    export default SystemResponse;
