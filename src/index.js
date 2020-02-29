
exports.min = function min (array) {
  return checkArray(array) ? Math.min.apply(null, array) : 0;
}

exports.max = function max (array) {
  return checkArray(array) ?  Math.max.apply(null, array) : 0;
}

exports.avg = function avg (array) {
  return checkArray(array) ? array.reduce((a,b) => (a+b))/array.length : 0;
}

function checkArray (array){
    return Array.isArray(array) && array.length
}
