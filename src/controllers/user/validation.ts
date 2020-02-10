import { truncate } from "fs";

export const validation = {
    create:
    {
        name: {
            required: true,
            regex: '([a-zA-Z])+ ?([a-zA-Z])+$',
            in: ['body'],
            errorMessage: 'Name is required',
        },
        address: {
            required: true,
            string: true,
            in: ['body'],
            errorMessage: 'address is required',
        },
        mobileNumber: {
            required: true,
            number: true,
            in: ['body'],
            errorMessage: 'mobile number required',
        },
        role: {
            required: true,
            string: true,
            in: ['body'],
            errorMessage: 'Please enter role'

        },
        dob: {
            required: true,
            string: true,
            in: ['body'],
            errorMessage: 'DOB is required',
        },
        email: {
            required: true,
            string: true,
            in: ['body'],
            errorMessage: 'email is required',
        },
        hobby: {
            required: true,
            array: 'string',
            in: ['body'],
            errorMessage: 'hobby is required',

        }

    },
    delete: {
        id: {
            required: true,
            errorMessage: 'Id is required',
            in: ['params'],
        }
    },
    get: {
        skip: {
            required: false,
            default: 0,
            number: true,
            in: ['query'],
            errorMessage: 'Skip is invalid',
        },
        limit: {
            required: false,
            default: 10,
            number: true,
            in: ['query'],
            errorMessage: 'Limit is invalid',
        }
    },
    update: {
        id: {
            required: true,
            string: true,
            in: ['body']
        },
        dataToUpdate: {
            in: ['body'],
            required: true,
            isObject: true,
            custom: (dataToUpdate) => {
                {
                    console.log('now you are in custom');
                    if (!dataToUpdate) { };
                }
            },
        }
    }
};