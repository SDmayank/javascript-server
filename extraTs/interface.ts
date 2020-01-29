interface IAUTHOR {
    all: string[];
    read: string[];
    write: string[];
    delete: string[];
}
interface IGETUSER {
    'getUsers': IAUTHOR;
}

interface IUSER {
    traineeEmail: string;
    reviewerEmail: string;

}
interface ICOUNT {
    validInputs: number;
    inValidName: number;
}

interface VALIDNAME {
    validName: string[];
    invalidName: string[];
}
interface IRESULT {
    count: ICOUNT;
    users: VALIDNAME;
}

export { IGETUSER, IAUTHOR, VALIDNAME, ICOUNT, IUSER, IRESULT, };
