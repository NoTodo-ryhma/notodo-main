// get reference to current page
var $current = $('.page');

// create page
var $next = $('<div class="page">Page 2</div>');

// horizontally align with viewport
$next.css({
  position: 'absolute',
  top: 0,
  left: (window.innerWidth)+'px',
});

// insert into wrapper for transition
$('#slide_wrapper').append($next);

// Then use Zepto to perform a CSS transition, remembering to clean up when it's finished:
$('#slide_wrapper').anim(
  // we want to shift the container across the width of the viewport
  {translate: (-window.innerWidth)+'px,0'},

  // the animation will take 0.3 seconds
  0.3,

  // the animation will slow down towards the end
  'ease-out',

  // callback to execute when the animation's done
  function () {
    // remove the page that has been transitioned out
    $current.remove();

    // remove the CSS transition
    $('#slide_wrapper').attr('style', '');

    // remove the position absoluteness
    $next.css({
      top: '',
      left: '',
      position: ''
    });
});