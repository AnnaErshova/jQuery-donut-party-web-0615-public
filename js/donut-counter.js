$(function() { 
  var donutCounter = new DonutCounter();
});

function DonutCounter() {
  this.addListenerForPlus();
  this.addListenerForMinus();
  this.getStatus();
};

DonutCounter.prototype.addListenerForPlus = function(){
  $('.add').click(function(){
    var currentCount = $(this).parent().find('h3 span').text();
    var newCount = parseInt(currentCount) + 1;
    $(this).parent().find('h3 span').text(newCount);
  });
};

DonutCounter.prototype.addListenerForMinus = function(){
  $('.remove').click(function(){
    var currentCount = $(this).parent().find('h3 span').text();
    if (currentCount > 0) 
    {
      var newCount = parseInt(currentCount) - 1;
      $(this).parent().find('h3 span').text(newCount);
    };
  });
};

DonutCounter.prototype.getStatus = function(){

  $('#check').click(function(){

    var guestCount = $('.guest-count').text(),
        donutCount = $('.donut-count').text();

    if (guestCount > donutCount) {
      $('#status').text('Guests are sad :(')
    }
    else if (guestCount == 0)
    {
      $('#status').text('Invite someone you jerk!')
    }
    else if (guestCount <= donutCount) 
    {
      if (donutCount / guestCount >= 4) 
      {
        $('#status').text('ARE YOU TRYING TO KILL US ALL!?')
      }
      else 
      {
        $('#status').text('Guests are having a blast!')
      }
    }
  })
};


