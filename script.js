var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var responseData = JSON.parse(this.responseText);
    document.getElementById("name").innerHTML = responseData.results[0].name.first + " " + responseData.results[0].name.last;
    document.getElementById("email").innerHTML = responseData.results[0].name.first + "." + responseData.results[0].name.last + "@wustl.edu";
    document.getElementById("student-id").innerHTML = responseData.results[0].location.postcode;
    document.getElementById("user-img").src = responseData.results[0].picture.large;
  }
};
xhttp.open("GET", "https://randomuser.me/api/", true);
xhttp.send()

function link() {
  document.getElementById("helpful-links").style.display = "block";
  document.getElementById("class-schedule").style.display = "none";
  document.getElementById("webstac-news").style.display = "none";
  document.getElementById("links-button").style.borderTop = "1px solid darkred";
  document.getElementById("schedule-button").style.border = "none";
  document.getElementById("news-button").style.border = "none";
  document.getElementById("links-button").style.color = "darkred";
  document.getElementById("schedule-button").style.color = "grey";
  document.getElementById("news-button").style.color = "grey";
  document.getElementById("tools-links").style.display = "none";
  document.getElementById("tools-title").style.color = "#2F2F2F";
  document.getElementById("tools-title").style.backgroundColor = "#F1ECEC";
  document.getElementById("calendars-links").style.display = "none";
  document.getElementById("calendars-title").style.color = "#2F2F2F";
  document.getElementById("calendars-title").style.backgroundColor = "#F1ECEC";
  document.getElementById("academic-links").style.display = "none";
  document.getElementById("academic-title").style.color = "#2F2F2F";
  document.getElementById("academic-title").style.backgroundColor = "#F1ECEC";
  document.getElementById("help-links").style.display = "none";
  document.getElementById("help-title").style.color = "#2F2F2F";
  document.getElementById("help-title").style.backgroundColor = "#F1ECEC";
  document.getElementById("forms-links").style.display = "none";
  document.getElementById("forms-title").style.color = "#2F2F2F";
  document.getElementById("forms-title").style.backgroundColor = "#F1ECEC";
}

function schedule() {
  document.getElementById("helpful-links").style.display = "none";
  document.getElementById("class-schedule").style.display = "block";
  document.getElementById("webstac-news").style.display = "none";
  document.getElementById("links-button").style.border = "none";
  document.getElementById("schedule-button").style.borderTop = "1px solid darkred";
  document.getElementById("news-button").style.border = "none";
  document.getElementById("links-button").style.color = "grey";
  document.getElementById("schedule-button").style.color = "darkred";
  document.getElementById("news-button").style.color = "grey";
}

function news() {
  document.getElementById("helpful-links").style.display = "none";
  document.getElementById("class-schedule").style.display = "none";
  document.getElementById("webstac-news").style.display = "block";
  document.getElementById("links-button").style.border = "none";
  document.getElementById("schedule-button").style.border = "none";
  document.getElementById("news-button").style.borderTop = "1px solid darkred";
  document.getElementById("links-button").style.color = "grey";
  document.getElementById("schedule-button").style.color = "grey";
  document.getElementById("news-button").style.color = "darkred";
}

function grid() {
  document.getElementById("grid-view").style.display = "table";
  document.getElementById("list-view").style.display = "none";
  document.getElementById("grid-button").style.borderTop = "1px solid darkred";
  document.getElementById("list-button").style.borderTop = "none";
  document.getElementById("grid-button").style.color = "darkred";
  document.getElementById("list-button").style.color = "grey";
}

function list() {
  document.getElementById("grid-view").style.display = "none";
  document.getElementById("list-view").style.display = "table";
  document.getElementById("grid-button").style.borderTop = "none";
  document.getElementById("list-button").style.borderTop = "1px solid darkred";
  document.getElementById("grid-button").style.color = "grey";
  document.getElementById("list-button").style.color = "darkred";
}

function home() {
  location.reload();
}

function tools() {
  if (document.getElementById("tools-title").style.backgroundColor == "darkred") {
    document.getElementById("tools-links").style.display = "none";
    document.getElementById("tools-title").style.color = "#2F2F2F";
    document.getElementById("tools-title").style.backgroundColor = "#F1ECEC";
  } else {
    document.getElementById("tools-links").style.display = "block";
    document.getElementById("tools-title").style.color = "#f2f3f4";
    document.getElementById("tools-title").style.backgroundColor = "darkred";
  }
}

function calendars() {
  if (document.getElementById("calendars-title").style.backgroundColor == "darkred") {
    document.getElementById("calendars-links").style.display = "none";
    document.getElementById("calendars-title").style.color = "#2F2F2F";
    document.getElementById("calendars-title").style.backgroundColor = "#F1ECEC";
  } else {
    document.getElementById("calendars-links").style.display = "block";
    document.getElementById("calendars-title").style.color = "#f2f3f4";
    document.getElementById("calendars-title").style.backgroundColor = "darkred";
  }
}

function academic() {
  if (document.getElementById("academic-title").style.backgroundColor == "darkred") {
    document.getElementById("academic-links").style.display = "none";
    document.getElementById("academic-title").style.color = "#2F2F2F";
    document.getElementById("academic-title").style.backgroundColor = "#F1ECEC";
  } else {
    document.getElementById("academic-links").style.display = "block";
    document.getElementById("academic-title").style.color = "#f2f3f4";
    document.getElementById("academic-title").style.backgroundColor = "darkred";
  }
}

function help() {
  if (document.getElementById("help-title").style.backgroundColor == "darkred") {
    document.getElementById("help-links").style.display = "none";
    document.getElementById("help-title").style.color = "#2F2F2F";
    document.getElementById("help-title").style.backgroundColor = "#F1ECEC";
  } else {
    document.getElementById("help-links").style.display = "block";
    document.getElementById("help-title").style.color = "#f2f3f4";
    document.getElementById("help-title").style.backgroundColor = "darkred";
  }
}

function formies() {
  if (document.getElementById("forms-title").style.backgroundColor == "darkred") {
    document.getElementById("forms-links").style.display = "none";
    document.getElementById("forms-title").style.color = "#2F2F2F";
    document.getElementById("forms-title").style.backgroundColor = "#F1ECEC";
  } else {
    document.getElementById("forms-links").style.display = "block";
    document.getElementById("forms-title").style.color = "#f2f3f4";
    document.getElementById("forms-title").style.backgroundColor = "darkred";
  }
}

function editProfile() {
  document.getElementById("big-form").style.display = "block";
  document.getElementById("everything").style.display = "none";
}

function submitFunction() {
  document.getElementById("major").innerHTML = document.getElementById("major-value").value;
  var maj = document.getElementById("major-value").value;
  var str2 = "Undeclared";
  document.getElementById("minor").innerHTML = document.getElementById("minor-value").value;
  var min = document.getElementById("minor-value").value;
  var str3 = "None";
  var str4 = "Bioinformatics";
  var str5 = "Mechatronics";
  var str6 = "Robotics";
  var str1 = "Applied Physics & Electrical Engineering"
  document.getElementById("graduation").innerHTML = document.getElementById("graduation-value").value;
  document.getElementById("big-form").style.display = "none";
  document.getElementById("everything").style.display = "block";
  if ((maj == str2) && (min == str3 || min == str4 || min == str5 || min == str6)) {
    document.getElementById("row").style.height = "auto";
  } else {
    document.getElementById("row").style.height = "40px";
    document.getElementById("welc").style.marginBottom = "38px";
  }
  if (min == str4 || min == str5 || min == str1) {
    document.getElementById("m1").style.width = "30%";
  } else {
    document.getElementById("m1").style.width = "25.5%";
  }
}
