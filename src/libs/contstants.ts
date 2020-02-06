const permissions = {
    'getUsers':
    {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: []
    }
};
export default permissions;