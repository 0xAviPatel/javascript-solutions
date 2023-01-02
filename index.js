// var checkTree = function (root) {
//     console.log("🚀 ~ root", root[1]+root[2]===root[0])
//   if (root[1] + root[2] == root[0]) {
//     return true;
//   } else {
//     return false;
//   }
// };

function power(n) {
  var sub_array = [];

  for (let index = 0; index < n; index++) {
    sub_array.push(2 ** index);
  }

  return sub_array;
}

console.log(power(5));
