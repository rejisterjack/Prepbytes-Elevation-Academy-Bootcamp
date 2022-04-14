// Write the code to access element which is having id as "text"

let ansOne = document.getElementById("text")
ansOne.innerText="new hello"

// Write the code to access element which is having tag as "h1"

let ansTwo = document.getElementsByTagName("h1")
ansTwo[0].innerText="this is new h1 tag"

// Write the code to access element which is having class as "box"

let ansThree = document.getElementsByClassName("box")
ansThree[0].innerText="this is new box"

// "<h1>Hello </h1> Change the heading from ""Hello"" to ""Hello World"" using DOM functions"

ansTwo[1].innerText="Hello World"

// Create three cards on HTML page and arrange them using flex property in row or horizontal direction and also create button at the bottom named "Change Flex direction". When user clicks on this button, the cards arrangement should be changed to vertical direction.

function changeDirection(){
  let cards = document.getElementsByClassName("cards")[0]
  cards.style.flexDirection="column"
  cards.style.alignItems="center"
  cards.style.justifyContent="space-between"
}

// What’s the difference between window vs document?

// Document: it is loaded inside the window

// Window: it is the very first object that is loaded in the browser.

// "<h1>Hello </h1> Add one style attribute and give text color as red and id attribute and give the id value as ""heading"" in the above given h1 tag using DOM functions"

let heading = document.getElementsByTagName("h1")[1]
heading.style.color="red"
heading.setAttribute("id","heading")

// Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"

function changeText(){
  let heading = document.getElementsByTagName("h1")[1]
  heading.innerText = "Welcome to Elevation academy"
}

//Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second

