function goToWiki() {
    var linkUrl = document.getElementById("link").value;
    var link = "https://en.wikipedia.org/wiki/" + linkUrl;
    window.open(link, '_blank');
}
function goToSpoty() {
    var linkUrl = document.getElementById("lin").value;
    var link = "https://open.spotify.com/search/" + linkUrl;
    window.open(link, '_blank');
}