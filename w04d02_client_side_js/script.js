
$(document).ready(() => {

  console.log("hello from the script file");
  console.log(dogs)

  // const channels = document.getElementById("channels")
  // const li = document.createElement("li");                 // Create a <li> node
  // const textnode = document.createTextNode("CIBC");         // Create a text node
  // li.appendChild(textnode);                              // Append the text to <li>
  // channels.appendChild(li);     // Append <li> to <ul> with id="myList"

  const $channels = $("#channels");
  console.log($channels);

  $channels.addClass("alert");

  setTimeout(() => {
    $channels.removeClass("alert")
  }, 3000)

  const $button = $("#click-button");

  
  // keypress, keydown, keyup, change
  const $input = $("#new-channel-input");
  // $input.on("keypress", (event) => {
  //   console.log(event.target.value)
  // })
  
  $button.on('click', () => {
  
    console.log('this button was clicked')
    const newChannel = $input.val();
    // create a new dom li
    // const $li = $("<li>").text(newChannel)
    const $li = $("<li>") // <li></li>
    $li.text(newChannel)  // <li>new channel text</li>

    $channels.append($li) 

    $input.val("");
    $input.focus();


  })
  // $channels.on('mousemove', (event) => {
  //   // console.log(event)
  //   console.log('this fired')
  // })

})

