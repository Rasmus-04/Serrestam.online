/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggle_navbar() {
    var x = document.getElementById("responsive_navbar");
    if (x.className === "Header-bar") {
      x.className += " responsive";
    } else {
      x.className = "Header-bar";
    }
  }
  