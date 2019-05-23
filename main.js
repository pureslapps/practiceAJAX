requestAPI = () => {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     let data = JSON.parse(this.responseText)
      user = {
        name: data['name'],
        grade: data['grade'],
        pokemon: data['pokemon']
      }
    }
  };
  xhttp.open("GET", "https://raw.githubusercontent.com/bemsuero/test-repo/master/test_json.json#", true);
  xhttp.send();
}

requestAPI()

displayUser = () =>  {
  let cont = document.createElement('div')
   let h1 = document.createElement('h1')
   let p1 = document.createElement('p')
   let p2 = document.createElement('p')

   h1.innerText = user['name']
   p1.innerText = user['grade']
   p2.innerText = user['pokemon']
   cont.appendChild(h1)
   cont.appendChild(p1)
   cont.appendChild(p2)
   document.body.appendChild(cont)
}
}
