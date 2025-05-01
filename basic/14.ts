function getFileExtension(filename: string): string {
    const parts = filename.split('.');
    const extension = parts[parts.length - 1];
    return extension;
}

console.log(getFileExtension('example.txt'));