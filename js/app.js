$(document).ready(function() {
  var program = 'SEARCH ALL', education = 'SEARCH ALL';
  $('.program-list li a:contains("' + program + '")').css('background-color', 'red');
  $('.education-list li a:contains("' + program + '")').css('background-color', 'red');
  $('.program-list li a').click(function() {
    $('.program-list li a:contains("' + program + '")').css('background-color', '');
    program = $(this).text();
    $('.program-list li a:contains("' + program + '")').css('background-color', 'red');
  });
  $('.education-list li a').click(function() {
    $('.education-list li a:contains("' + education + '")').css('background-color', '');
    education = $(this).text();
    $('.education-list li a:contains("' + education + '")').css('background-color', 'red');
  });
});
