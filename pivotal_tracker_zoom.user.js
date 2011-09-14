// ==UserScript==
// @name         Pivotal Tracker ZoomFixer
// @description  Make zooming in suck less in Pivotal Tracker.
// @version      0.1
// @match        https://www.pivotaltracker.com/projects/*
// ==/UserScript==

function disableHeader()
{
  var elem = document.getElementById("header");
  elem.style.overflow = "hidden";
  elem.style.height   = "0px";
}
    
function disableControlPanel()
{
  var elem = document.getElementById("controlPanel");
  elem.style.overflow = "hidden";
  elem.style.height   = "0px";
}

function enableHeader()
{
  var elem = document.getElementById("header");
  elem.style.height   = "";
  elem.style.overflow = "";
}

function enableControlPanel()
{
  var elem = document.getElementById("controlPanel");
  elem.style.height   = "";
  elem.style.overflow = "";
}

function resetContentWidth()
{
  var elem = document.getElementById("content");
  var padding = 5;
  elem.style.width = String(window.innerWidth - padding) + "px";
  elem.style.height = "100%";
}

function pollWidth()
{
  var min_height_px = 450;
  if(window.innerHeight < min_height_px)
  {
    disableHeader();
    disableControlPanel();
  }
  else
  {
    enableHeader();
    enableControlPanel();
  }

  resetContentWidth();
}

var pollingIntervalMsec = 500;
window.setInterval(pollWidth, pollingIntervalMsec);
