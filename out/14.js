"use strict";
function getFileExtension(filename) {
    const parts = filename.split('.');
    const extension = parts[parts.length - 1];
    return extension;
}
console.log(getFileExtension('example.txt'));
