const url = 'https://api.chucknorris.io/jokes/random';

fetch(url) 

  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
    var text = myJson;
    catfact = text.value;
    console.log(catfact);

    var para = document.createElement("P");                       // Create a <p> node
    var t = document.createTextNode(catfact);      // Create a text node
    para.appendChild(t);                                          // Append the text to <p>
    document.getElementById("myDIV").appendChild(para);           // Append <p> to <div> with id="myDIV"

  });