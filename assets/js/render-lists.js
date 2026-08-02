// Renders the news feed into its container element, so adding a new entry
// only means adding one object to assets/js/data/news.js instead of editing
// HTML markup directly.

function renderNews(containerId, items) {
  var container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = items.map(function(item) {
    return (
      '<div class="row p-0">' +
        '<div class="col-sm-2 p-0"><span class="badge-normal font-weight-bold text-uppercase align-middle date ml-3">' + item.date + '</span></div>' +
        '<div class="col-sm-10 mt-2 mt-sm-0 ml-3 ml-md-0 p-0 font-weight-light text"><p>' + item.html + '</p></div>' +
      '</div>'
    );
  }).join('');
}
