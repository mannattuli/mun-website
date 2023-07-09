//fetch form data in google sheets
function SubForm (){
    $.ajax({
        url:'https://api.apispreadsheets.com/data/11720/',
        type:'post',
        data:$("#myForm").serializeArray(),
        success: function(){
          alert("Form Data Submitted :)")
        },
        error: function(){
          alert("There was an error :(")
        }
    });
}
//loader
var preload = document.createElement("div");
preload.className = "preloader";
preload.innerHTML =
  '<div id="preloader"><div id="loader"></div></div>';
document.body.appendChild(preload);
window.addEventListener("load", function() {
  preload.className += " fade";
  setTimeout(function() {
    preload.style.display = "none";
  }, 5000);
});

