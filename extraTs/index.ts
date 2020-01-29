import { diamondTraingle, eq } from './pattern';
import { hasPermission, validateEmail } from './utils';
diamondTraingle(5);
eq(5);
hasPermission('getUsers', 'trainee', 'read');
validateEmail();