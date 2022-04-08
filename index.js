// Code your solution here

// This function takes an array of driver's names and a string as arguements, and returns the matching list of drivers.  This function should be case insensitive
// 1) returns all drivers that match the passed in name
// 2) returns matching drivers if case does not match but letters do
// 3) returns an empty array if there is no match

function findMatching(arr, searchTerm) {
    return arr.filter(
        (name) => name.toUpperCase() === searchTerm.toUpperCase()
    );
}

function fuzzyMatch(arr, searchTerm) {
    const result = arr.filter(
        driverName => driverName.slice(0, searchTerm.length) === searchTerm
    )
    return result
}

function matchName(arr, searchTerm) {
    return arr.filter((pastData) => pastData.name === searchTerm);
}