/*
 Indus by TEMPLATE STOCK
 templatestock.co @templatestock
 Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

/* ------------------------------------------------------------------------------
 This is jquery module for main page
 ------------------------------------------------------------------------------ */

/* Global constants */

/*global jQuery */
jQuery(function ($) {
  'use strict';

  var App = {
    $options: {},
    $loader: $(".loader"),
    $animationload: $(".animationload"),
    $countdown: $('#countdown_dashboard'),

    bindEvents: function () {
      //binding events
      $(window).on('load', this.load.bind(this));
      $(document).on('ready', this.docReady.bind(this));
    },
    load: function () {
      /* ==============================================
      1.Page Preloader
      =============================================== */
      this.$loader.delay(300).fadeOut();
      this.$animationload.delay(600).fadeOut("slow");
    },
    init: function (_options) {
      $.extend(this.$options, _options);
      this.bindEvents();
    }
  }

  //Initializing the app
  //passing the countdown date
  App.init({ day: 18, month: 2, year: 2016, hour: 11, min: 59, sec: 59 });
});