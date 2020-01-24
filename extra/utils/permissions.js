
const permissions =
{
'getUsers': {
all: ['head-trainer'],
read : ['trainee', 'trainer'],
write : ['trainer'],
delete: [],
}

};
function hasPermission(moduleName, role, permissionType)
{
let data=permissions[moduleName];
let x=data[permissionType];
return x.some(element => {if (element===role)
return true;
else
return false});
}
console.log(hasPermission("getUsers","trainee","read"));