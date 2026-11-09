$(document).ready(function () {
  $('.tip-body').hide();
  $('.tip-body').first().show();
  $('.tip-title').first().addClass('open');

  $('.tip-title').click(function () {
    $(this).toggleClass('open');
    $(this).next('.tip-body').slideToggle();
    $(this).closest('.tip-group').addClass('active-tip').siblings().removeClass('active-tip');
  });

  $('#expandAll').click(function () {
    $('.tip-body').slideDown();
    $('.tip-title').addClass('open');
  });

  $('#collapseAll').click(function () {
    $('.tip-body').slideUp();
    $('.tip-title').removeClass('open');
  });
});
