class SystemResponse {
    static success = ( res , data , message = 'success') => {
    return res.status(200).send({
    status : '200',
    message,
    data
});
    }
    }
    export default SystemResponse;
