const path = require('path');
console.log('directory name : ', path.dirname(__filename));

console.log('file name : ', path.basename(__filename));

console.log('file extension : ', path.extname(__filename));

const joinPath = path.join('/user', 'documents', 'node', 'projects');
console.log('path joined: ',joinPath)

const resolvePath = path.resolve('user', 'documents', 'node', 'projects');
console.log('resolved path : ', resolvePath);

const normalizePath = path.normalize('/user/.documents/../node/projects');
console.log('normalized path: ', normalizePath);