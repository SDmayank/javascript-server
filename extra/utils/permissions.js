
const permissions =
{
    'getUsers': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: [],
    }

};


let moduleName = process.argv[2];
let role = process.argv[3];
let permissionType = process.argv[4];

function hasPermission() {
    let data = permissions[moduleName];
    let x = data[permissionType];
    return x.some(element => {
        if (element === role) {

            return true;
        }
        else {
            return false;

        }
    });
}
let res = (hasPermission());
if (res === true) {
    console.log("This role " + role + " has permission for this permission type " + permissionType + " regarding this " + moduleName);
    console.log("true");
}
else {

    console.log("This role " + role + "is not permitted for any type for activity ");
    console.log("false")
}