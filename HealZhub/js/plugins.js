/*global console, $*/
$(function () {
    
    'use strict';
    $('.fa-arrow-circle-o-down').click(function () {
       
        $('html, body').animate({
            
            scrollTop: '750'
        }, 1000);
        
        
    });
});