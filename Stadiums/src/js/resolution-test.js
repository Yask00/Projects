function adjustStyle(width) {
    width = parseInt(width);
    if (width < 321) {
        $('#size-stylesheet').attr('href', './styles/styles-extra-small.css');
    } else if ((width >= 321) && (width <= 480)) {
        $('#size-stylesheet').attr('href', './styles/styles-small.css');
    } else if ((width >= 481) && (width < 960)) {
        $('#size-stylesheet').attr('href', './styles/styles-medium.css');
    } else {
       $('#size-stylesheet').attr('href', './styles/styles.css');
    }
}

$(function() {
    adjustStyle($(this).width());
    $(window).resize(function() {
        adjustStyle($(this).width());
    });
});
