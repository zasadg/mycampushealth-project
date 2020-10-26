jQuery(document).ready(function() {
    
    var text1 = jQuery('.transaction_activity_text1').height() + 4;
    var text2 = jQuery('.transaction_activity_text2').height() + 4;
    var text3 = jQuery('.transaction_activity_text3').height() + 4;
    var text4 = jQuery('.transaction_activity_text4').height() + 4;

    jQuery('.transaction_activity_text1, .transaction_activity_image_dots1').click(function() {
        jQuery('.transaction_activity_text_click').css({'top': '0', 'height': text1});
        jQuery('.transaction_activity_text div').css({'color': '#2c3f5733'});
        jQuery('.transaction_activity_text1').css({'color':'#fff'});
        jQuery('.transaction_activity_image_dots div').css({'background-color': '#c5c7ca'});
        jQuery('.transaction_activity_image_dots1').css({'background-color':'#31d317'});
    });

    jQuery('.transaction_activity_text2, .transaction_activity_image_dots2').click(function() {
        jQuery('.transaction_activity_text_click').css({'top': text1, 'height': text2});
        jQuery('.transaction_activity_text div').css({'color': '#2c3f5733'});
        jQuery('.transaction_activity_text2').css({'color':'#fff'});
        jQuery('.transaction_activity_image_dots div').css({'background-color': '#c5c7ca'});
        jQuery('.transaction_activity_image_dots2').css({'background-color':'#31d317'});
    });

    jQuery('.transaction_activity_text3, .transaction_activity_image_dots3').click(function() {
        jQuery('.transaction_activity_text_click').css({'top': text1 + text2, 'height': text3});
        jQuery('.transaction_activity_text div').css({'color': '#2c3f5733'});
        jQuery('.transaction_activity_text3').css({'color':'#fff'});
        jQuery('.transaction_activity_image_dots div').css({'background-color': '#c5c7ca'});
        jQuery('.transaction_activity_image_dots3').css({'background-color':'#31d317'});
    }); 

    jQuery('.transaction_activity_text4, .transaction_activity_image_dots4').click(function() {
        jQuery('.transaction_activity_text_click').css({'top': text1 + text2 + text3, 'height': text4});
        jQuery('.transaction_activity_text div').css({'color': '#2c3f5733'});
        jQuery('.transaction_activity_text4').css({'color':'#fff'});
        jQuery('.transaction_activity_image_dots div').css({'background-color': '#c5c7ca'});
        jQuery('.transaction_activity_image_dots4').css({'background-color':'#31d317'});
    });

});