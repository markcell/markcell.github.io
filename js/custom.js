function loadContent(hash) {
    if (hash === '') {
        hash = 'home';
    }
    
    $('html, body').animate({scrollTop: 0}, '600', 'swing');    
    $('#content').load('includes/' + hash + '.html');
}

$(window).on('hashchange', function() {
    loadContent(location.hash.slice(1));
});

var url = window.location.href;
var hash = url.substring(url.indexOf("#") + 1);

if (hash === url) {
    hash = 'home';
}

$('#content').load('includes/' + hash + '.html');

$('#navigation').load('includes/navigation.html');
$('#footer').load('includes/footer.html');