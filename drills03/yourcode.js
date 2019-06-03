// - getPath: given a path string, return an array with the different parts of the path for 
// 	- example: 'folder1/folder2/folder3' 
// 	- returns ['folder1','folder2','folder3']
function getPath(str) {
    return str.split("/");
}

// - getPathParts: Given a full URL string, break it up into parts in an object For 	
// 	- example: 'http://localhost:8000/happy/go/lucky/file.html' 
// 	- return { protocol: 'http', host: 'localhost', port: 8000, path: '/happy/go/lucky', file: 'file.html' }
function getPathParts(str) {
    var newstring = str.split(':');
    console.log(newstring);
}

function getCapitalCount() {

}

function correctCalcChecker() {

}

function doMath() {

}
