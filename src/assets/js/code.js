var count = 1;
function hideMainForm() {
  document.getElementById("tab_left").style.backgroundColor = "#D9D7D7";
  document.getElementById("tab_right").style.backgroundColor = "#FD7605";
  document.getElementById("mainForm").style.display = "none";
  document.getElementById("mainFormhidden").style.display = "block";
}
function dispMainForm() {
  document.getElementById("tab_left").style.backgroundColor = "#FD7605";
  document.getElementById("tab_right").style.backgroundColor = "#D9D7D7";
  document.getElementById("mainFormhidden").style.display = "none";
  document.getElementById("mainForm").style.display = "block";
}
function show_hideNav() {
  if (count % 2 == 0) {
    document.getElementById("nav").style.display = "flex";
  } else if (count % 2 == 1) {
    document.getElementById("nav").style.display = "none";
  }

  count = count + 1;
}
function verticalScrollBottom() {
  const divToBeScrolled = document.getElementById("lastdiv");
  divToBeScrolled.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "start",
  });
}
function verticalScrollup() {
  const divToBeScrolled = document.getElementById("firstdiv");
  divToBeScrolled.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "start",
  });
}

function show_mobiletab() {
  if (count % 2 == 0) {
    document.getElementById("mobiletabmanue").style.display = "flex";
  } else if (count % 2 == 1) {
    document.getElementById("mobiletabmanue").style.display = "none";
  }

  count = count + 1;
}
