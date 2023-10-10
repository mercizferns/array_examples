const arr = ["one", "two", "one", "one", "three", "two"];

const getOccuranceOfValue = (arrInput) => {
  console.log(arrInput);
  let obj = {};
  for (let key = 0; key < arrInput.length; key++) {
    //console.log(key);
    obj[arrInput[key]] = 1 + (obj[arrInput[key]] || 0);
  }

  //console.log(obj);
  return obj;
};

let occObj = getOccuranceOfValue(arr);
//console.log("occObj", occObj);

let arr2 = [1, 2, 4, 3, 2, 1, 3, 3, 2];
let occObj2 = getOccuranceOfValue(arr2);
//console.log("occObj2", occObj2);

let filteredarr = [];
for (let key1 in occObj) {
  //console.log(key1);
  if (occObj[key1] > 1) {
    filteredarr.push(key1);
  }
}
//console.log("filteredarr", filteredarr);

//Filter array

let arr3 = arr2.filter(function (val) {
  console.log("val", val);
  return val >= 2;
});
console.log("2s", arr3);
