export default ( req , res , next) => {
    next({ error: 'notfound', code : 404});
};