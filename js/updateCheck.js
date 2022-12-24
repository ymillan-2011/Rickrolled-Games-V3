// Here we will check to see if this instance of the site is up to date or not

fetch("https://api.github.com/repos/3kh0/3kh0.github.io/releases/latest")
  .catch((error) => {
    showMessage("fetchFail");
    console.error(error);
    return;
  })
  .then((response) => response.json())
  .then((data) => {
    // data contains the latest release information
    const apiReleaseVersion = data.tag_name;

    // parse the JSON file
    fetch("/info.json")
      .then((response) => response.json())
      .then((json) => {
        // json.version contains the version from the JSON file
        const jsonVersion = json.version;

        // compare the versions
        if (apiReleaseVersion === jsonVersion) {
          console.log("The versions are the same.");
        } else {
          console.warn("The versions are different! This could be a API error or the site is out of date.");
          if (!window.location.host == "3kh0.github.io") {
            showMessage("snackbar");
          } else {
            console.log("The versions are different, but this is because the site has not finished building yet!");
          }
        }
      });
  });

function showMessage(msg) {
  var x = document.getElementById(msg);
  console.log("Showing snackbar with the ID " + msg)
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 5000);
}
