(function testsTitleIsCorrect() {
  var htmltitle = document.getElementById("title").innerHTML
  assert.isTrue(htmltitle = "News App")
})(this);

(function testsPushesDataFromModelToHTML() {
  newmodel = new Model()
  var n = newmodel.fetchdata("https://reqres.in/api/users")
  // newmodel.pushData()
  assert.isTrue("" === "<ul><li><div>George</div></li><li><div>Janet</div></li><li><div>Emma</div></li><li><div>Eve</div></li><li><div>Charles</div></li><li><div>Tracey</div></li></ul>")
})(this);
