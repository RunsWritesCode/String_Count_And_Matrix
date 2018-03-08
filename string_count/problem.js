// Recommended node version at least v8.9.4 LTS
// To run `node problem.js` or if you want output of success failure
// Run `node problem.js && echo "PASS" || echo "FAIL"`

// Test examples use `assert` module https://nodejs.org/api/assert.html
const assert = require("assert");

const toLowerCase = wordList => {
  var lowerCase = [];

  for (var i = 0; i < wordList.length; i++) {
    lowerCase.push(wordList[i].toLowerCase());
  }
  return lowerCase

}


const countAndSortBeans = wordList => {

  var lowerCaseSortedArray = toLowerCase(wordList).sort();

  var arrayOfBeanObjects = [];
  var current = null;

  for (var i = 0; i < lowerCaseSortedArray.length; i++) {
    var number = 0;
    if (lowerCaseSortedArray[i] !== current) {
      arrayOfBeanObjects.push({
        bean: lowerCaseSortedArray[i],
        number: 1
      })
    } else {
      for (var beanObject of arrayOfBeanObjects) {
        if (beanObject.bean === lowerCaseSortedArray[i]) {
          beanObject.number++;
        }
      }
    }
    current = lowerCaseSortedArray[i];
  }

  var resultString = "";

  for (var beanObject of arrayOfBeanObjects) {
    resultString = resultString + beanObject.bean + " " + beanObject.number + ", "
  }
  return resultString.replace(/,\s*$/, "");
}


  const simpleList = ["Cannellini", "baked", "cannellini", "kidney"];

  // assert.equal(toLowerCase(simpleList), [ 'cannellini', 'baked', 'cannellini', 'kidney' ]);
  assert.equal(countAndSortBeans(simpleList), "baked 1, cannellini 2, kidney 1");
