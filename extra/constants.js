

const permissions =
{
    'getUsers': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: [],
    }

};
const users = [{
    traineeEmail: "mayank.garg@successive.tech",
    reviewerEmail: "suraj.yadav@successive.tech",
},
{
    traineeEmail: "mayank.garg@successive.tech",
    reviewerEmail: "suraj@successive.tch",
},
{
    traineeEmail: "mayank.ga@successive.tech",
    reviewerEmail: "yadav@successive.tech",
},

];
export {permissions,users}
