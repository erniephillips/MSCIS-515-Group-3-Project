/* 
 * Author: Ernie Phillips 
 * Date: 01/12/2021
 * Bellevue University
 * CIS 515: IT Infrastructure
 * Professor Krohn
 */

//set current year in var in store in text in DOM
var date = new Date();
$("#lblCurrentYear").text(date.getFullYear());

//set scroll to time lapse of 1 second
$(function(){
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });
});