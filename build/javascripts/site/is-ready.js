// We need to use a custom ready event because the DOM changes during the animsition transition.
// Here's where we trigger it the first time.
$(document).ready(function () { $(this).trigger('isReady') })
;
