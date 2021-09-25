const button = document.getElementById("mybutton");

button.addEventListener("dblclick", (event) => {
  document.getElementById("result").innerHTML =
    "Hello, I just double clicked this button";
  // Double-click detected
});
