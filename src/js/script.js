window.addEventListener("DOMContentLoaded", function () {
  "use strict";

  let calculator = require("./parts/calculator"),
    forms = require("./parts/forms"),
    modal = require("./parts/modal"),
    slider = require("./parts/slider"),
    tabs = require("./parts/tabs"),
    timer = require("./parts/timer");

  calculator();
  forms();
  modal();
  slider();
  tabs();
  timer();
});