
const v = [];
const inv = [];
const valid = [];
const invalid = [];
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

function validateEmail(arguement) {
    const regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((successive.tech))$/;
    res = regx.test(arguement);
    if (res == true) 
    valid.push(arguement);
    else invalid.push(arguement);
    return (res);
}

function validateUsers(users) {
    users.forEach((mails) => {
        const { traineeEmail, reviewerEmail } = mails;
        check = validateEmail(traineeEmail);
        if (check == true)
         v.push(1);
        else inv.push(1);
        check1 = validateEmail(reviewerEmail);
        if (check1 == true) v.push(1);
        else inv.push(1);
    })

count = {
    'vaild users' : v.length,
    'inavaild users' : inv.length
}
}
validateUsers(users);
console.log("valid Email", valid);
//console.log(`Valid Emails is', `$[valid]`);
console.log("Invlaid Email is \n", invalid);
console.log(" Count \n" ,count);
