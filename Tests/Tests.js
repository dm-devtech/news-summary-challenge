(function testsTitleIsCorrect() {
  var htmltitle = document.getElementById("title").innerHTML
  assert.isTrue(htmltitle === "News App")
})(this);

(function testsBodyTitleIsCorrect() {
  var htmlbodytitle = document.getElementById("titlebody").innerHTML
  assert.isTrue(htmlbodytitle === "News App")
})(this);

(function testsPushesDataFromModelToHTML() {
  let newmodel = new Model()
  newmodel.fetchData()
  assert.isTrue(document.getElementById("app").innerHTML === "<ul><li><div>George</div></li></ul>")
})(this);

(function testsItemHyperlink() {
  let newmodel = new Model()

})(this);
