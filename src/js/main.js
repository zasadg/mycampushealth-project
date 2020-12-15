

import './style';
import './style2';
import './style5';
import './style4';

$(function() {
    // init the validator
    // validator files are included in the download package

  
    $("#contact-form").validator();
  
    // when the form is submitted
    $("#contact-form").on("submit", function(e) {
      // if the validator does not prevent form submit
      if (!e.isDefaultPrevented()) {
        var url = "contact.php";

  
        var messageAlert = "alert-success";
        var messageText =
          "Your message was sent, thank you. I will get back to you soon.";
  
        // compose Bootstrap alert box HTML
        var alertBox =
          '<div class="alert ' +
          messageAlert +
          ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
          messageText +
          "</div>";
  
        // If we have messageAlert and messageText
        if (messageAlert && messageText) {
          // inject the alert to .messages div in our form
          $("#contact-form").find(".messages").html(alertBox);
          // empty the form
          $("#contact-form")[0].reset();
        }
  
        return false;
      }
    });
  });
  


    
  
  
  
  