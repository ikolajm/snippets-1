// Slide
function openNavSlide() {
  document.getElementsByClassName("slide")[0].style.width = "10rem";
}

function closeNavSlide() {
  document.getElementsByClassName("slide")[0].style.width = "0";
}


// Push
function openNavPush() {
  document.getElementsByClassName("push")[0].style.width = "10rem";
  document.getElementsByTagName("body")[0].style.marginLeft = "10rem";
}

function closeNavPush() {
  document.getElementsByClassName("push")[0].style.width = "0";
  document.getElementsByTagName("body")[0].style.marginLeft = "0rem";
}

// Push w/ opacity
function openNavPushOpat() {
  document.getElementsByClassName("pushopat")[0].style.width = "10rem";
  document.getElementsByTagName("body")[0].style.marginLeft = "10rem";
  document.getElementsByTagName("main")[0].style.backgroundColor = "rgba(0,0,0,.4)";
}

function closeNavPushOpat() {
  document.getElementsByClassName("pushopat")[0].style.width = "0";
  document.getElementsByTagName("body")[0].style.marginLeft = "0rem";
  document.getElementsByTagName("main")[0].style.backgroundColor = "rgba(0,0,0,0)";
}

// Open Icon menu
function openIcons() {
  document.getElementById('icon-work-container').style.width = "50rem";
}

function closeIcons() {
  document.getElementById('icon-work-container').style.width = "0rem";
}

// Menu 2 X
function menu2x() {
  if (document.getElementsByClassName('bar2')[0].classList.contains('visible')) {
    document.getElementsByClassName('bar1')[0].style.transform =
    "rotate(50deg) translateY(16px)";
    document.getElementsByClassName('bar2')[0].classList.remove('visible');
    document.getElementsByClassName('bar3')[0].style.transform =
    "rotate(-50deg) translateY(-15px)";
  } else {
    document.getElementsByClassName('bar1')[0].style.transform =
    "rotate(0deg) translateY(0px)";
    document.getElementsByClassName('bar2')[0].classList.add('visible');
    document.getElementsByClassName('bar3')[0].style.transform =
    "rotate(0deg) translateY(0)";
  }
}

// Menu 2 x slideout
function menu2xslideout() {
  if (document.getElementsByClassName('2slide')[0].classList.contains('visible')) {
    document.getElementsByClassName('1slide')[0].style.transform =
    "rotate(50deg) translateY(16px)";
    document.getElementsByClassName('2slide')[0].style.left = "-50px";
    document.getElementsByClassName('2slide')[0].classList.remove('visible');
    document.getElementsByClassName('3slide')[0].style.transform =
    "rotate(-50deg) translateY(-15px)";
  } else {
    document.getElementsByClassName('1slide')[0].style.transform =
    "rotate(0deg) translateY(0px)";
    document.getElementsByClassName('2slide')[0].style.left = "0px";
    document.getElementsByClassName('2slide')[0].classList.add('visible');
    document.getElementsByClassName('3slide')[0].style.transform =
    "rotate(0deg) translateY(0)";
  }
}

// Menu 2 x rotate
function menu2xrotate() {
  if (document.getElementsByClassName('2rotate')[0].classList.contains('visible')) {
    document.getElementsByClassName('rotate')[0].style.transform =
    "rotate(360deg)";
    document.getElementsByClassName('1rotate')[0].style.transform =
    "rotate(50deg) translateY(16px)";
    document.getElementsByClassName('2rotate')[0].classList.remove('visible');
    document.getElementsByClassName('3rotate')[0].style.transform =
    "rotate(-50deg) translateY(-15px)";
  } else {
    document.getElementsByClassName('rotate')[0].style.transform =
    "rotate(-360deg)";
    document.getElementsByClassName('1rotate')[0].style.transform =
    "rotate(0deg) translateY(0px)";
    document.getElementsByClassName('2rotate')[0].classList.add('visible');
    document.getElementsByClassName('3rotate')[0].style.transform =
    "rotate(0deg) translateY(0)";
  }
}

// Collapse, expand
function menu2xcollapse() {
  if (document.getElementsByClassName('collapse2')[0].classList.contains('visible')) {
    // Break to middle
    document.getElementsByClassName('collapse1')[0].style.transform = "translateY(10px)";
    document.getElementsByClassName('collapse3')[0].style.transform = "translateY(-10px)";
    // Timeout function for removing middle, rotating the ends
    setTimeout(collapse2(), 2000);
  } else {
    // Rotate to single
    document.getElementsByClassName('collapse1')[0].style.transform = "translateY(0px)";
    document.getElementsByClassName('collapse3')[0].style.transform = "translateY(0px)";
    // Add middle, throw out to menu
    setTimeout(collapse3(), 2000);
  }

  // No double translate???
  function collapse2() {
    document.getElementsByClassName('collapse2')[0].classList.remove('visible');
    
  }

  function collapse3() {
    document.getElementsByClassName('collapse2')[0].classList.add('visible');
  }

}

// ma-contain-grow
function grow() {
  document.getElementsByClassName('icon-grow')[0].style.transform = "scale(3.2) rotate(22deg) translateX(0px) translateY(14px)";
  document.getElementsByClassName('icon-grow')[0].style.opacity = ".5";
  document.getElementsByClassName('main-grow')[0].style.transform = "scale(1.2)";
  document.getElementsByClassName('support-grow')[0].style.transform = "scale(1.2)";
}

function endgrow() {
  document.getElementsByClassName('icon-grow')[0].style.transform = "scale(1.0) rotate(0deg) translateX(0px) translateY(0px)";
  document.getElementsByClassName('icon-grow')[0].style.opacity = "1";
  document.getElementsByClassName('main-grow')[0].style.transform = "scale(1.0)";
  document.getElementsByClassName('support-grow')[0].style.transform = "scale(1.0)";
}

// ma-contain-slide
function slide() {
  document.getElementsByClassName('icon-slide')[0].classList.add('slideicon');
  document.getElementsByClassName('main-slide')[0].classList.add('slidemain');
  document.getElementsByClassName('support-slide')[0].classList.add('slidesupport');
}

function endslide() {
  document.getElementsByClassName('icon-slide')[0].classList.remove('slideicon');
  document.getElementsByClassName('main-slide')[0].classList.remove('slidemain');
  document.getElementsByClassName('support-slide')[0].classList.remove('slidesupport');
}

// ma-contain-transition
function transition() {
  // Main contain
  document.getElementsByClassName('ma-contain-transition')[0].style.background = "black";
  document.getElementsByClassName('ma-contain-transition')[0].style.borderLeft = "15px solid white";
  // Text contain
  document.getElementsByClassName('text-contain-transition')[0].style.background = "black";
  document.getElementsByClassName('text-contain-transition')[0].style.color = "white";
  // Icon
  document.getElementsByClassName('transition-icon')[0].style.fontSize = "5rem";
  document.getElementsByClassName('transition-icon')[0].style.color = "white";
  // main size
  document.getElementsByClassName('transition-main')[0].style.fontSize = "1.25rem";
  // Support size
  document.getElementsByClassName('transition-support')[0].style.fontSize = "1.75rem";
}

function endtransition() {
  // Main contain
  document.getElementsByClassName('ma-contain-transition')[0].style.background = "grey";
  document.getElementsByClassName('ma-contain-transition')[0].style.borderLeft = "15px solid black";
  // Text contain
  document.getElementsByClassName('text-contain-transition')[0].style.background = "grey";
  document.getElementsByClassName('text-contain-transition')[0].style.color = "black";
  // Icon
  document.getElementsByClassName('transition-icon')[0].style.fontSize = "3rem";
  document.getElementsByClassName('transition-icon')[0].style.color = "black";
  // main size
  document.getElementsByClassName('transition-main')[0].style.fontSize = "1.5rem";
  document.getElementsByClassName('transition-support')[0].style.fontSize = "1.25rem";
}
