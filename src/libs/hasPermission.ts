import { permissions } from './constants'

function hasPermissions(moduleName: string , role: string , permissionType: string): boolean{
    const data : any = permissions[moduleName]
    console.log(data);
    const opr: any = data[permissionType];
    const res : any = opr.some(element =>
        {
            if(element === role)
            {
                return true;
            }
            else {
                return false ;
            }
        });
        return res;

}
export default hasPermissions;