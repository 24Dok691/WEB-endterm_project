function showRoutes() {
  var body = document.getElementById('routesBody');
  routes.forEach(function (route) {
    var row = document.createElement('tr');
    row.innerHTML =
      '<td>' + route.name + '</td>' +
      '<td>' + route.days + '</td>' +
      '<td>' + route.season + '</td>' +
      '<td>' + route.highlights + '</td>';
    body.appendChild(row);
  });
}

$(document).ready(function () {
  showRoutes();

  $('.season-btn').click(function () {
    var season = $(this).attr('data-season');
    $(this).addClass('active').siblings().removeClass('active');

    $('#routesBody tr').each(function () {
      var routeSeason = $(this).children().eq(2).text();
      if (season === 'All' || routeSeason === 'All year' || routeSeason.indexOf(season) !== -1) {
        $(this).fadeIn();
      } else {
        $(this).fadeOut();
      }
    });
  });

  $('#routesBody tr').mouseenter(function () {
    $(this).addClass('table-active');
  });
  $('#routesBody tr').mouseleave(function () {
    $(this).removeClass('table-active');
  });
});
