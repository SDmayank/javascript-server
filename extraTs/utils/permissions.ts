import { permissions } from '../constants';
import { IAUTHOR, IGETUSER } from '../interface';
function hasPermission(moduleName: string, role: string, permissionType: string): void {
    console.log(permissions[moduleName]);
    const data: IAUTHOR = permissions[moduleName];
    console.log(data);
    const x: any = data[permissionType];
    const res: boolean = x.some(element => {
        if (element === role) {

            return true;
        }
        else {
            return false;

        }
    });

    if (res === true) {
        console.log('This role ' + role + ' has permission for this permission type ' + permissionType + 'regarding this' +  moduleName);
        console.log('true');
    }
    else {

        console.log('This role'  + role + 'is not permitted for any type for activity ');
        console.log('false');
    }
}
export default hasPermission;

