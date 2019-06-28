// Get the submit button
let submit = document.querySelector("#submit")
// Define the ul element to append the li to it
let ul = document.querySelector("ul")
// Defind the p tags
let p = document.querySelector("p")
// Define total price span
let totalPrice = document.querySelector("h3 span")
// Define checkout button
let checkout = document.querySelector("#checkout")

// Define an event when you click the submit button
submit.addEventListener("click", function(event) {
  event.preventDefault()

  // Get the information from the text input boxes
  let item = document.querySelector("#item").value

  if (item) {
  // Remove the p element
  p.remove()

  // Create a new li element
  let li = document.createElement("li")

  // Add text to the li element
  li.innerHTML = `<span id="item"> ${item} </span> at <span id="price"> ${Math.floor(Math.random() * 10) + 1 } </span> GBP. <button id="delete" type="delete">x</button>`

  // Add the li to the exsisting ul
  ul.appendChild(li)

  // Clear the text from the input box
  document.querySelector(".form").reset()

  // Add total price to totalPrice span
  totalPrice.innerText = `${cartTotal()} GBP`

  //Define the delete button element
  let deleteButton = li.querySelector("#delete")

  deleteButton.addEventListener("click", function(event) {
    li.remove()
    cartTotal()
    totalPrice.innerText = `${cartTotal()} GBP`
  });
}
});

submit.addEventListener("click", cartTotal);

// Function to add up the items in the cart
function cartTotal() {
  let array = []
  let spans = document.querySelectorAll("#price")
  for (i = 0; i < spans.length; i++) {
    array.push(Number(spans[i].innerText))
  }
  if (array.length > 0) {
    return array.reduce(function(a,b){
      return a + b
    });
  } else {
    return 0
  }
};

checkout.addEventListener("click", function(event) {
  event.preventDefault()

  // Define the cart div
  let cart = document.querySelector("#cart")
  // Define checkout button
  let checkoutButton = document.querySelector("#checkout")
  // Define the li's listed above
  let li = document.querySelectorAll("li")
  // Define the div to connect the p text too
  let checkoutText = document.querySelector(".checkout")
  // Create a new p tag
  let p = document.createElement("p")
  // Add text to newly created p tag
  p.innerHTML = `You have bought ${li.length} item(s). ${itemNamesList()}. The total was ${cartTotal()} GBP`
  // Add p to page
  checkoutText.appendChild(p)

  // Remove cart
  cart.remove()
  // Remove checkout button
  checkoutButton.remove()

  // Function to list all items in the cart
  function itemNamesList() {
    let array = []
    // Define item names
    let items = document.querySelectorAll("#item")
    for (i = 0; i < items.length; i++) {
      array.push(items[i].innerText)
    }
    if (array.length > 0) {
      return array.join(" ")
    } else {
      return "No Items Purchased"
    }
  };
});
