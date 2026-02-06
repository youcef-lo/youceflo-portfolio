// htmlcss progress circular bar 
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 90,
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);

// javasript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 75,
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
    javascriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

// php progress circular bar 
let phpProgress = document.querySelector(".php"),
  phpValue = document.querySelector(".php-progress");

let phpStartValue = 0,
  phpEndValue = 80,
  phpspeed = 30;

let progressphp = setInterval(() => {
  phpStartValue++;

  phpValue.textContent = `${phpStartValue}%`;
  phpProgress.style.background = `conic-gradient(#20c997 ${
    phpStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (phpStartValue == phpEndValue) {
    clearInterval(progressphp);
  }
}, phpspeed);

// reactjs progress circular bar 
let reactProgress = document.querySelector(".reactjs"),
  reactValue = document.querySelector(".reactjs-progress");

let reactStartValue = 0,
  reactEndValue = 30,
  rjsspeed = 30;

let progressreact = setInterval(() => {
  reactStartValue++;

  reactValue.textContent = `${reactStartValue}%`;
  reactProgress.style.background = `conic-gradient(#3f396d ${
    reactStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (reactStartValue == reactEndValue) {
    clearInterval(progressreact);
  }
}, rjsspeed);



// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});


// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});


// java progress circular bar 
let javaProgress = document.querySelector(".java"),
    javaValue = document.querySelector(".java-progress");

let javaStartValue = 0,
    javaEndValue = 80, // % of skill
    javaSpeed = 20;

let progressJava = setInterval(() => {
    javaStartValue++;
    javaValue.textContent = `${javaStartValue}%`;
    javaProgress.style.background = `conic-gradient(#f89820 ${javaStartValue * 3.6}deg, #ededed 0deg)`;

    if (javaStartValue == javaEndValue) {
        clearInterval(progressJava);
    }
}, javaSpeed);

// python progress circular bar 
let pythonProgress = document.querySelector(".python"),
    pythonValue = document.querySelector(".python-progress");

let pythonStartValue = 0,
    pythonEndValue = 85,
    pythonSpeed = 20;

let progressPython = setInterval(() => {
    pythonStartValue++;
    pythonValue.textContent = `${pythonStartValue}%`;
    pythonProgress.style.background = `conic-gradient(#306998 ${pythonStartValue * 3.6}deg, #ededed 0deg)`;

    if (pythonStartValue == pythonEndValue) {
        clearInterval(progressPython);
    }
}, pythonSpeed);
// C++ progress circular bar
let cppProgress = document.querySelector(".cpp"),
    cppValue = document.querySelector(".cpp-progress");

let cppStartValue = 0,
    cppEndValue = 75,
    cppSpeed = 20;

let progressCpp = setInterval(() => {
    cppStartValue++;
    cppValue.textContent = `${cppStartValue}%`;
    cppProgress.style.background = `conic-gradient(#00599C ${cppStartValue * 3.6}deg, #ededed 0deg)`;

    if (cppStartValue == cppEndValue) {
        clearInterval(progressCpp);
    }
}, cppSpeed);
// AI progress circular bar
let aiProgress = document.querySelector(".ai"),
    aiValue = document.querySelector(".ai-progress");

let aiStartValue = 0,
    aiEndValue = 70,
    aiSpeed = 20;

let progressAI = setInterval(() => {
    aiStartValue++;
    aiValue.textContent = `${aiStartValue}%`;
    aiProgress.style.background = `conic-gradient(#ff4081 ${aiStartValue * 3.6}deg, #ededed 0deg)`;

    if (aiStartValue == aiEndValue) {
        clearInterval(progressAI);
    }
}, aiSpeed);
// SQL Server progress circular bar
let sqlProgress = document.querySelector(".sqlserver"),
    sqlValue = document.querySelector(".sqlserver-progress");

let sqlStartValue = 0,
    sqlEndValue = 80,
    sqlSpeed = 20;

let progressSQL = setInterval(() => {
    sqlStartValue++;
    sqlValue.textContent = `${sqlStartValue}%`;
    sqlProgress.style.background = `conic-gradient(#CC2927 ${sqlStartValue * 3.6}deg, #ededed 0deg)`;

    if (sqlStartValue == sqlEndValue) {
        clearInterval(progressSQL);
    }
}, sqlSpeed);
// MySQL progress circular bar
let mysqlProgress = document.querySelector(".mysql"),
    mysqlValue = document.querySelector(".mysql-progress");

let mysqlStartValue = 0,
    mysqlEndValue = 85,
    mysqlSpeed = 20;

let progressMySQL = setInterval(() => {
    mysqlStartValue++;
    mysqlValue.textContent = `${mysqlStartValue}%`;
    mysqlProgress.style.background = `conic-gradient(#00758F ${mysqlStartValue * 3.6}deg, #ededed 0deg)`;

    if (mysqlStartValue == mysqlEndValue) {
        clearInterval(progressMySQL);
    }
}, mysqlSpeed);
