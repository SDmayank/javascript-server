
v=0;
inv=0;
valid=[];
invalid=[];
const users = [{
traineeEmail: "mayank.garg@successive.tech",
reviewerEmail:"suraj.yadav@successive.tech",
},
{
traineeEmail: "mayank.garg@successive.tech",
reviewerEmail:"suraj@successive.tch",
},
{
traineeEmail: "mayank.ga@successive.tech",
reviewerEmail:"yadav@successive.tech",
},

];

function validateEmail(arguement){
const regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((successive.tech))$/;
res=regx.test(arguement);
if(res==true) valid.push(arguement);
else invalid.push(arguement);
return(res);
}

function validateUsers(users)
{
users.forEach((mails) => {
const {traineeEmail, reviewerEmail} = mails;
check=validateEmail(traineeEmail);
if(check==true) v++;
else inv++;
check1=validateEmail(reviewerEmail);
if(check1==true) v++;
else inv++;
})
}
validateUsers(users);
//console.log("valid Email"+valid);
console.log(`Valid Emails is \n${valid}`);
console.log("Invlaid Email is \n"+invalid);
console.log("Valid count is \n"+v);
console.log("Invlaid count is \n"+inv);