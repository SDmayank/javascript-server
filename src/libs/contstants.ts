const permissions = {
    'getUsers':
    {
        all: ['head-trainer'],
        read: ['trainee', 'trainer', 'head-trainer'],
        write: ['trainer', 'head-trainer'],
        delete: []
    }
};
export default permissions;
