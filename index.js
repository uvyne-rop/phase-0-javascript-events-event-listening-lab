function addingEventListener() {
    //select the button element
    const button = document.getElementById('button');
    button.addEventListener('click', function()
{
    console.log('button clicked!');
});
//select all div elements
const divs = document.querySelectorAll('div');
divs.forEach(div => {
    div.addEventListener('mouseover', function(){
        console.log('Mouse over div:', div.textContent.trim());
    });

});
}
//call the addingEventListener function to attach event listeners
addingEventListener();
// function addingEventListener() {
//     // Select the button element
//     const button = document.getElementById('button');
  
//     // Add a click event listener to the button
//     button.addEventListener('click', function() {
//       console.log('Button clicked!');
//     });
  
//     // Select all div elements
//     const divs = document.querySelectorAll('div');
  
//     // Iterate over each div and add a mouseover event listener
//     divs.forEach(div => {
//       div.addEventListener('mouseover', function() {
//         console.log('Mouse over div:', div.textContent.trim());
//       });
//     });
//   }
  
//   // Call the addingEventListener function to attach event listeners
//   addingEventListener();
  