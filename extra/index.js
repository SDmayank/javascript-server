import { diamondTraingle,eq } from './pattern'

import { hasPermission,validateEmail } from './utils'
import {users} from './constants'
let rows = Number(process.argv[2]);

diamondTraingle(rows);

eq(rows);
hasPermission(process.argv[3], process.argv[4], process.argv[5])
validateEmail (users);

