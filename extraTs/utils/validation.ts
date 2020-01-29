import { checkEmail } from './helper';
import { users } from '../constants';
import { IRESULT, VALIDNAME, ICOUNT } from '../interface';

const validName: string[] = [];
const invalidName: string[] = [];
function validateEmail(): void {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < users.length; i++) {
        const { traineeEmail, reviewerEmail } = users[i];

        if (checkEmail(traineeEmail)) {
            validName.push(traineeEmail);
        }
        else {
            invalidName.push(traineeEmail);
        }
        // valid reviewer
        if (checkEmail(reviewerEmail)) {
            validName.push(reviewerEmail);
        } else {
            invalidName.push(reviewerEmail);
        }
    }



    const counts: ICOUNT = {
        'validInputs': validName.length,
        'inValidName': invalidName.length
    };
    const abc: VALIDNAME = {
        invalidName,
        validName
    };
    const res: IRESULT = {
        count: counts, users: abc
    };
    res.users = abc;
    console.log(res);
}
export default validateEmail;

