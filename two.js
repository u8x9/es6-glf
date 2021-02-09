// import {url,name,fn} from './one.js';
//
// console.log(url,name);
// fn();

import * as one from './one.js';
// import myfn from './export_default.js';
import ed, {version, vsc} from "./export_default.js";

console.log(one.url);
console.log(one.name);
one.fn();


console.log(ed.name);
console.log(ed.url);
console.log(ed.myfn());
console.log(version);
console.log(vsc);