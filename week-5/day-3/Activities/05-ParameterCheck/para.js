function equals(a, b) {
    if (a === b) {
        return 'Yes'
    } else {
        return 'No'
    }
}

console.log(equals(process.argv[2], process.argv[3]));