//loader
// let loader = document.getElementById('preloader');
// window.addEventListener('load', function () {
//   loader.style.display = 'none';
// });
//loader


var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


//=========== Active sidebar dashboard =============
const currentLocationDashboard = location.href;
const menuItemDashboard = document.querySelectorAll(
  ".sidebar .nav-item .nav-link"
);
const menuChildDashboard = document.querySelectorAll(
  ".sidebar .nav-pills .nav-item ul li .nav-link"
);
const menuLengthDashboard = menuItemDashboard.length;
for (let i = 0; i < menuLengthDashboard; i++) {
  if (menuItemDashboard[i].href === currentLocationDashboard) {
    menuItemDashboard[i].className = "nav-link active";
    // menuChildDashboard[i].parentElement.parentElement.className =
    //   "flex-column collapse show";
  }
}
//=========== Active sidebar dashboard =============

//=========== sidebar toggle =============
const sideBar = document.querySelector(".sidebar");
const toggler = document.querySelector(".menu");
toggler.addEventListener("click", function () {
  sideBar.classList.toggle("open");
});
//=========== sidebar toggle =============
//=========== Close inspect =============

$(document).ready(function () {
  $(".sidebar").hover(
    function () {
      $(".sidebar").addClass("opened");
    },
    function () {
      $(".sidebar").removeClass("opened");
    }
  );
});

$(document).ready(function () {
  $(".close").on("click", function () {
    $(".sidebar.open .nav-pills .nav-item ul").removeClass("show");
  });
});