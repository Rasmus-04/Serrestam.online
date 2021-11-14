/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggle_navbar() {
    var x = document.getElementById("responsive_navbar");
    if (x.className === "Header-bar") {
      x.className += " responsive";
      document.getElementById("unity-container").style.marginTop = "225px";
    } else {
      x.className = "Header-bar";
      document.getElementById("unity-container").style.marginTop = "50px";
    }
  }
