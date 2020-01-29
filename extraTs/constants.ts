import { IGETUSER, IUSER } from './interface';
const permissions: IGETUSER = {
    'getUsers': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: [],
    }
};
const users: IUSER[] = [{
    traineeEmail: 'mayank.garg@successive.tech',
    reviewerEmail: 'suraj.yadav@successive.tech',
},
{
    traineeEmail: 'mayank.garg@successive.tech',
    reviewerEmail: 'suraj@successive.tch',
},
{
    traineeEmail: 'mayank.ga@successive.tech',
    reviewerEmail: 'yadav@successive.tech',
}];
export { permissions, users };
