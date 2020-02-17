import permissions from './contstants';

function hasPermission(moduleName: string, role: string, permissionType: string) {
    const data: any = permissions[moduleName];
    console.log(data);
    const opr: any = data[permissionType];
    const res: any = opr.some(element => {
        if (element === role) {
            return true;
        }
    });
    return res;
}
export default hasPermission;
