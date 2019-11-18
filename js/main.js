/*global $, window,document*/

$(document).ready(function () {
    'use strict';
	$('.header').height($(window).height());


    $(window).resize(function() {
        $('#header').height($(window).height());
    });
    
    $(window).trigger('resize');
});