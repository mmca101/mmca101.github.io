// // Check if the user is on a Mac and update the shortcut key for search accordingly
// document.addEventListener("readystatechange", () => {
//   if (document.readyState === "interactive") {
//     let isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
//     let shortcutKeyElement = document.querySelector("#search-toggle .nav-link");
//     if (shortcutKeyElement && isMac) {
//       // use the unicode for command key
//       shortcutKeyElement.innerHTML = '&#x2318; k <i class="ti ti-search"></i>';
//     }
//   }
// });

// Override shortcut key combo display for all devices
document.addEventListener("readystatechange", () => {
  if (document.readyState === "interactive") {
    let shortcutKeyElement = document.querySelector("#search-toggle .nav-link");
    if (shortcutKeyElement) {
      // Only display the search icon
      shortcutKeyElement.innerHTML = '<i class="ti ti-search"></i>';
    }
  }
});