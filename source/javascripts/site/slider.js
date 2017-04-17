$("document").on('isReady', function() {
  $(".slider").rangeslider();
});

var valueBubble = '<output class="rangeslider__value-bubble" />';

function updateValueBubble(pos, value, context) {
  pos = pos || context.position;
  value = value || context.value;
  var $valueBubble = $('.rangeslider__value-bubble', context.$range);
  var position = pos + context.grabPos;

  if ($valueBubble.length) {
    $valueBubble[0].style.left = Math.ceil(position) + 'px';
    $valueBubble[0].innerHTML = value;
  }
}

$('input[type="range"]').rangeslider({
  polyfill: false,
  onInit: function() {
    this.$range.append($(valueBubble));
    updateValueBubble(null, null, this);
  },
  onSlide: function(pos, value) {
    updateValueBubble(pos, value, this);
  }
});