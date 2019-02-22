document.addEventListener("load", () => {
    document.querySelector("#bottom").scrollIntoView()
  
  })
  
  fetch('https://apifriendshipquotes.herokuapp.com/quotes')    // verwijzen naar de url!!!
    .then(response => response.json())    // er een json object van maken
    .then(myJson => printQuote(myJson))  // ik doe ermee wat ik wil in een aparte functie
    .catch(error => alert(error))
  
  const printQuote = (myJson) => {
    console.log(myJson)   //geeft een object

    let i = Math.floor( Math.random() * myJson.length )
    console.log (i)

    let quote = myJson[i].quote  //ik haal eruit wat ik nodig heb
    let author = myJson[i].author
    console.log(quote, author)
    // nu in de html steken
    let output = 
    `<h3> ${quote} <h3>
    <p> &#9830 <p>
    <h4> ${author} <h4>`
    document.getElementById(`container`).innerHTML = output
  }