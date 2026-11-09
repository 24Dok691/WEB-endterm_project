var favorites = [];

var cityList = document.getElementById('cityList');
var searchInput = document.getElementById('citySearch');
var regionSelect = document.getElementById('regionFilter');
var resultsInfo = document.getElementById('resultsInfo');
var favoritesList = document.getElementById('favoritesList');
var favoritesCount = document.getElementById('favoritesCount');

function filterCities(text, region) {
  var result = [];
  text = text.toLowerCase();
  for (var i = 0; i < cities.length; i++) {
    var city = cities[i];
    var matchesText = city.name.toLowerCase().indexOf(text) !== -1;
    var matchesRegion = region === 'all' || city.region === region;
    if (matchesText && matchesRegion) {
      result.push(city);
    }
  }
  return result;
}

function toggleFavorite(name) {
  var index = favorites.indexOf(name);
  if (index === -1) {
    favorites.push(name);
  } else {
    favorites.splice(index, 1);
  }
  showCities();
  showFavorites();
}

function showCities() {
  var list = filterCities(searchInput.value, regionSelect.value);
  cityList.innerHTML = '';

  list.forEach(function (city) {
    var column = document.createElement('div');
    column.className = 'col-12 col-md-6 col-lg-4';
    column.innerHTML =
      '<article class="city">' +
        '<img src="' + city.image + '" alt="' + city.name + '" class="img-fluid">' +
        '<span class="label">' + city.name + '</span>' +
        '<div class="p-3"><p>' + city.description + '</p></div>' +
      '</article>';

    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'btn btn-sm fav-btn';
    if (favorites.indexOf(city.name) === -1) {
      button.className += ' btn-outline-dark';
      button.textContent = 'Add to favorites';
    } else {
      button.className += ' btn-dark';
      button.textContent = 'In favorites';
    }
    button.addEventListener('click', function () {
      toggleFavorite(city.name);
    });
    column.querySelector('.p-3').appendChild(button);

    cityList.appendChild(column);
  });

  resultsInfo.textContent = 'Showing ' + list.length + ' of ' + cities.length + ' cities';
}

function showFavorites() {
  favoritesList.innerHTML = '';
  favoritesCount.textContent = favorites.length;

  if (favorites.length === 0) {
    favoritesList.innerHTML = '<li class="list-group-item">No favorite cities yet.</li>';
  }

  favorites.forEach(function (name) {
    var item = document.createElement('li');
    item.className = 'list-group-item d-flex justify-content-between align-items-center';
    item.innerHTML = '<span>' + name + '</span>';

    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'btn btn-sm btn-outline-danger';
    button.textContent = 'Remove';
    button.addEventListener('click', function () {
      toggleFavorite(name);
    });
    item.appendChild(button);

    favoritesList.appendChild(item);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  showCities();
  showFavorites();
});

searchInput.addEventListener('input', showCities);
regionSelect.addEventListener('change', showCities);
