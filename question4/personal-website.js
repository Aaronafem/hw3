function navigateTo(url) {
  window.location.href = url;
}

function setActiveLink() {
  // Get the current URL
  var currentUrl = window.location.href;

  // Remove the 'active' class from all links
  var links = document.querySelectorAll(".topnav a");
  links.forEach(function (link) {
    link.classList.remove("active");
  });

  // Find the link that matches the current URL and add the 'active' class to it
  links.forEach(function (link) {
    if (link.href === currentUrl || currentUrl.endsWith(link.href)) {
      link.classList.add("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  setActiveLink();
});
