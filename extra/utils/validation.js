import { checkEmail } from './helper'

let vaild = [];
let invaild = [];
const result = {};

function validateEmail(users) {
    for (let i = 0; i <= users.length - 1; i++) {
        let { traineeEmail, reviewerEmail } = users[i];

        if (checkEmail(traineeEmail)) {
            vaild.push(traineeEmail)
        }
        else {
            invaild.push(traineeEmail)
        }
        // valid reviewer
        if (checkEmail(reviewerEmail)) {
            vaild.push(reviewerEmail)
        } else {
            invaild.push(reviewerEmail)
        }
    }



    const counts = {
        'validInputs': vaild.length,
        'inValidInputs': invaild.length
    }
    result['count'] = counts;
    result.count = counts;
    result.users = { invaild, vaild }
    console.log(result)
}
export default validateEmail;

