


//Cache
var $card = $('.js-card'),
    $cardGrid = $('.js-card-grid');

//Generate the content
function generateContent(targetId) {
  var $target = $('#card' + targetId),
      targetContentClone = $target.find('.js-more-container').clone().html();
  return '<div id="content' + targetId + '" data-id="' + targetId + '" class="more-container js-generated-content">' + targetContentClone + '</div>';  
}

//Determine the last element of the current row to append the generated content
function determineRow(targetPosition) {
  //no need to determine all the row, we can stop at the first row found
  var rowIsFound = false;
  
  $card.each(function() {
    var currentCardPosition = $(this).position().top;
    if (currentCardPosition === targetPosition && rowIsFound === false) {
      //If the element is at the same top position than our target element, then it belongs to the same row
      //Before adding the specific class, we can remove it on all element since we only want to determine the last element of the row
      $card.removeClass('currentRow');
      $(this).addClass('currentRow');
    }
    else if (currentCardPosition > targetPosition && rowIsFound === false) {
      //if the element is below our target element, then it belongs to the next row
      //Then we can change the counter since we don't have to calculate other element
      rowIsFound = true;
    }
    else if (rowIsFound === true) {
      //break the loop
      return false;
    }
  });
}

//Manage the closing of the generated content
function closeGeneratedContent() {
  $(".js-generated-content").remove();
  $card.removeClass('active');
  $card.removeClass('currentRow');
}

//Manage click
$cardGrid.on('click', '.js-card', function(event) {
  //Get former position
  var $previousCard = $('.card.active'),
      previousPosition = 0,
      scrollPosition = $('body').scrollTop();
  if ($previousCard.length) {
    previousPosition = $previousCard.position().top;
  }
  //close current content
  closeGeneratedContent();
  //set the informations of cliked card
  var $target = $(event.currentTarget),
      targetId = $target.attr('data-id'),
      targetPosition = $target.position().top;
  //set current active class
  $target.addClass('active');
  //determine new position for generated content
  determineRow(targetPosition);
  //insert generated content
  $('.currentRow').after(generateContent(targetId));
    
  //scroll to generated content if not in the same place than before
  if (previousPosition != targetPosition) {
    //console.log('scroll !');
   $('html, body').animate({
      scrollTop : $('#content' + targetId).offset().top - 50
    }, 500); 
 }
  else {
    $('body').scrollTop(scrollPosition);
  }
});

//Add event listener to the newly created component
 $cardGrid.on('click', '.js-close-content', function(event) {   
   closeGeneratedContent();
   var targetId = $(event.currentTarget).closest('.js-generated-content').attr('data-id');
   $('#card' + targetId).removeClass('lastClick');
    //scroll back to the closed card
    $('html, body').animate({
      scrollTop : $('#card' + targetId).offset().top - 50
    }, 500);
 });
  
  //Next arrow
  $cardGrid.on('click', '.js-next-content', function(event) {
    var $currentContent = $(event.currentTarget).closest('.js-generated-content'),
        currentCardId = parseInt($currentContent.attr('data-id')),
        nextCardId = currentCardId + 1,
        nextCardPosition;
        
    var $nextCardTarget = $('#card' + nextCardId);
    
    if ($nextCardTarget.length) {
      //Get former position
      var $previousCard = $('.card.active'),
          previousPosition = 0,
          scrollPosition = $('body').scrollTop();
      if ($previousCard.length) {
          previousPosition = $previousCard.position().top;
      }
      
      closeGeneratedContent();
      nextCardPosition = $('#card' + nextCardId).position().top;
      $nextCardTarget.addClass('active');
      determineRow(nextCardPosition);
      $('.currentRow').after(generateContent(nextCardId));
      //scroll to generated content if not in the same place than before
      if (previousPosition != nextCardPosition) {
        //console.log('scroll !');
       $('html, body').animate({
          scrollTop : $('#content' + nextCardId).offset().top - 50
        }, 500); 
     }
      else {
        $('body').scrollTop(scrollPosition);
      }
    }
        
 });

//Previous arrow
  $cardGrid.on('click', '.js-previous-content', function(event) {
    var $currentContent = $(event.currentTarget).closest('.js-generated-content'),
        currentCardId = parseInt($currentContent.attr('data-id')),
        previousCardId = currentCardId - 1,
        previousCardPosition;
        
    var $previousCardTarget = $('#card' + previousCardId);
    
    if ($previousCardTarget.length) {
      //Get former position
      var $previousCard = $('.card.active'),
          previousPosition = 0,
          scrollPosition = $('body').scrollTop();
      if ($previousCard.length) {
          previousPosition = $previousCard.position().top;
      }
      
      closeGeneratedContent();
      previousCardPosition = $('#card' + previousCardId).position().top;
      $previousCardTarget.addClass('active');
      determineRow(previousCardPosition);
      $('.currentRow').after(generateContent(previousCardId));
      //scroll to generated content if not in the same place than before
      if (previousPosition != previousCardPosition) {
        //console.log('scroll !');
       $('html, body').animate({
          scrollTop : $('#content' + previousCardId).offset().top - 50
        }, 500); 
     }
      else {
        $('body').scrollTop(scrollPosition);
      }
    }
        
 });



  

