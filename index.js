const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  id (window.payYOffset > 100){
    toTop.classlist.add("active");
  }
  else{
    toTop.classlist.remove("active");
  }
})
$(document).ready(function(){
  function submit(){
    var a = document.getElementById("email").value;
    var b = document.getElementById("name").value;
    var c = document.getElementById("number").value;
    var d = document.getElementById("password").value;
    for (var i = 0; i < b.lenght(); ++i){
      if (b[i] >= 'a' && b[i] <= 'z'){
      }
      else if (b[i] >= 'A' && b[i] <= 'Z'){
      }
      else {
        alert("Please type only latin letters on the Name field");
        break;
      }
    }
  }
});
