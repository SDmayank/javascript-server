import {permissions} from '../constants'
import {moduleName,role,permissionType} from '../../extra'
function hasPermission(moduleName,role,permissionType) {
    let data = permissions[moduleName];
  
    let x = data[permissionType];
    let res=x.some(element => {
        if (element === role) {

            return true;
        }
        else {
            return false;

        }
    });

if ( res === true) {
console.log("This role " + role + " has permission for this permission type " + permissionType + " regarding this " + moduleName);
    console.log("true");
  }
else {

  console.log("This role " + role +  "is not permitted for any type for activity ");
    console.log("false")
}
}
export default hasPermission

