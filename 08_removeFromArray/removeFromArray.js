
const removeFromArray = function(array, ...toRemove) {
    return array.filter(item => !toRemove.includes(item));
}
arr = [1,2,3,4]

// Do not edit below this line
module.exports = removeFromArray;
