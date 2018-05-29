$(function() {

  $('.input input').focus(function() {
    $(this).parent('.input').each(function() {
      $('label', this).removeClass('input-blur');
      $('label', this).addClass('input-focus');
      $('.spin', this).css({
        'width': '100%'
      })
    });
  }).blur(function() {
    $('.spin').css({
      'width': '0px'
    });
    if ($(this).val() === '') {
      $(this).parent('.input').each(function() {
        $('label', this).removeClass('input-focus');
        $('label', this).addClass('input-blur');
      });
    }
  });

  $('.button').click(function(e) {
    var pX = e.pageX,
        pY = e.pageY,
        oX = parseInt($(this).offset().left),
        oY = parseInt($(this).offset().top);

    $(this).append('<span class="click-efect x-' + oX + ' y-' + oY + '" style="margin-left:' + (pX - oX) + 'px;margin-top:' + (pY - oY) + 'px;"></span>')
    $('.x-' + oX + '.y-' + oY + '').animate({
      'width': '500px',
      'height': '500px',
      'top': '-250px',
      'left': '-250px',
    }, 600);
    $('button', this).addClass('active');
  });
  
  $('.material-button').click(function() {
    if ($(this).hasClass('material-button') && validateUsername() && validatePass()) {
      setTimeout(function() {
        $('.overbox').css({
          'overflow': 'hidden'
        });
        $('.box').addClass('back');
        $('.box').removeClass('active');
      }, 200);
      $('.overbox').addClass('active').animate({
        'height': '524px'
      });

      setTimeout(function() {
        $('.shape').css({
          'width': '50%',
          'height': '50%',
          'transform': 'rotate(45deg)'
        })

        $('.overbox .title').fadeIn(300);
        $('.overbox .input').fadeIn(300);
        $('.overbox .button').fadeIn(300);
      }, 700)

      $(this).removeClass('material-button');

    }

  });


  $('.button-registration').click(function() {
      setTimeout(function() {
        $('.overbox-registration').css({
          'overflow': 'hidden'
        });
        $('.overbox').addClass('back');
        $('.overbox').removeClass('active');
      }, 200);
      $('.overbox-registration').addClass('active').animate({
        'height': '619px'
      });

      setTimeout(function() {
        $('.shape').css({
          'width': '50%',
          'height': '50%',
          'transform': 'rotate(45deg)'
        });

        $('.overbox-registration .title').fadeIn(300);
        $('.overbox-registration .input').fadeIn(300);
        $('.overbox-registration .button').fadeIn(300);
      }, 700)

      $(this).removeClass('material-button');

  });

  $('.button-confirmation').click(function() {
    setTimeout(function() {
      $('.overbox-completed').css({
        'overflow': 'hidden'
      });
      $('.overbox-registration').addClass('back');
      $('.overbox-registration').removeClass('active');
    }, 200);
    $('.overbox-completed').addClass('active').animate({
      'height': '535px'
    });

    setTimeout(function() {
      $('.shape').css({
        'width': '50%',
        'height': '50%',
        'transform': 'rotate(45deg)'
      });

      $('.overbox-completed .title').fadeIn(300);
      $('.overbox-completed .input').fadeIn(300);
      $('.overbox-completed .button').fadeIn(300);
    }, 700);

    $(this).removeClass('material-button');

  });

  $('#bonusCode').click(function() {
    $('#bonusCodeWrapper').toggleClass('display-none');
    return false;
  });
});

function validateUsername() {
  var x = document.getElementById('name').value;
  if (x > 4 || x < 12) {
    alert('Name must be filled out');
    return false;
  }
  return true;
}

function validatePass(){
  var isValid = true;
  var y = document.getElementById('pass').value;
  var validate = new RegExp('^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9!@#\\$%\\^&\\*])(?=.{6,12}$))');
  var yConfirm= document.getElementById('reregpass').value;
  if (!validate.test(y)){
    alert('Password must be filled out');
    isValid = false;
  }
  if (y!==yConfirm){
    alert('Passwords must match');
    isValid = false;
  }
  return isValid;
}

