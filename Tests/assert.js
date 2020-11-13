var assert = {
  isTrue: function(assertionToCheck) {
    var something = 6
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy")
    } else if(assertionToCheck) {
      console.log("Test Passed!")
    }
  }
};
