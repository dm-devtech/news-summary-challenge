class Model {

  fetchData(url = "https://reqres.in/api/users") {
    var url = url
    const proxyurl = "https://api.allorigins.win/raw?url="
    fetch(proxyurl+url)
      .then(response => {
        if (!response.ok) {
          throw Error("Error");
        }
        return response.json();
      })
      .then(data => {
        let html = []
        data.data.forEach(item => {
          html.push(`<li><div>${item.first_name}</div></li>`)
        });
        document.getElementById("app").innerHTML = `<ul>${html[0]}</ul>`
      })
        .catch(error => {
          console.log(error);
      });
  }

}
