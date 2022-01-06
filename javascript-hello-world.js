function getName() {
  const userName = prompt("What is your name?");
  sayHello(userName);
}
function sayHello(name) {
  alert("Hello and welcome to the web, " + name + "!");
}
