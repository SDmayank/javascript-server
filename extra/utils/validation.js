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

    let validName = [];
    let invalidName = [];
    const res = {};
    const validateEmail = (str) => {
    let validate = /([a-zA-Z0-9_\-\.]+)@successive[.]tech$/gmi;
    return validate.test(str);
    }
    
    users.forEach((user) => {
    let { traineeEmail, reviewerEmail } = user;
    
    if (validateEmail(traineeEmail)) {
    validName.push(traineeEmail)
    }
    else {
    invalidName.push(traineeEmail)
    }
    // valid reviewer
    if (validateEmail(reviewerEmail)) {
    validName.push(reviewerEmail)
    } else {
    invalidName.push(reviewerEmail)
    }
    })
    
    const counts = {
    'validInputs': validName.length,
    'inValidInputs': invalidName.length
    }
    res['count'] = counts;
    res.count = counts;
    res.users = { invalidName, validName }
    console.log(res)
    