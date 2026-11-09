var form = document.getElementById('tourForm');
var tourSelect = document.getElementById('tour');

function fillTours() {
  var all = routes.concat(cities);
  for (var i = 0; i < all.length; i++) {
    var option = document.createElement('option');
    option.value = all[i].name;
    option.textContent = all[i].name;
    tourSelect.appendChild(option);
  }
}

function isValidEmail(email) {
  return /^\S+@\S+\.\S+$/.test(email);
}

function setError(id, message) {
  var field = document.getElementById(id);
  var error = document.getElementById(id + 'Error');
  error.textContent = message;
  if (message === '') {
    field.classList.remove('is-invalid');
    error.classList.remove('d-block');
  } else {
    field.classList.add('is-invalid');
    error.classList.add('d-block');
  }
}

function validateForm() {
  var valid = true;
  var name = document.getElementById('name').value.trim();
  var email = document.getElementById('email').value.trim();
  var tour = tourSelect.value;
  var people = Number(document.getElementById('people').value);
  var date = document.getElementById('date').value;
  var today = new Date().toLocaleDateString('en-CA');

  if (name.length < 3) {
    setError('name', 'Name must be at least 3 characters.');
    valid = false;
  }
  if (!isValidEmail(email)) {
    setError('email', 'Enter a valid email, for example name@mail.com.');
    valid = false;
  }
  if (tour === '') {
    setError('tour', 'Please choose a tour.');
    valid = false;
  }
  if (people < 1 || people > 20 || isNaN(people)) {
    setError('people', 'People must be from 1 to 20.');
    valid = false;
  }
  if (date === '') {
    setError('date', 'Please choose a start date.');
    valid = false;
  } else if (date < today) {
    setError('date', 'The date cannot be in the past.');
    valid = false;
  }
  return valid;
}

document.addEventListener('DOMContentLoaded', fillTours);

form.addEventListener('input', function (event) {
  if (document.getElementById(event.target.id + 'Error')) {
    setError(event.target.id, '');
  }
});

form.addEventListener('submit', function (event) {
  event.preventDefault();
  if (validateForm()) {
    var name = document.getElementById('name').value.trim();
    $('#formSuccess').text('Thank you, ' + name + '! Your booking request has been sent.').fadeIn();
    form.reset();
  } else {
    $('#formSuccess').hide();
  }
});
