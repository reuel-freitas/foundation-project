window.onscroll = function() {changeScroll()};

function changeScroll() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop < 900) {
    document.getElementById("model").textContent = "Model S";
  } if (document.body.scrollTop > 50 || document.documentElement.scrollTop >= 900 ) {
    document.getElementById("model").textContent = "Model 3";
  } if (document.body.scrollTop > 50 || document.documentElement.scrollTop >= 1800 ) {
    document.getElementById("model").textContent = "Model X";
  } if (document.body.scrollTop > 50 || document.documentElement.scrollTop >= 2700 ) {
    document.getElementById("model").textContent = "Model Y";
  }
}