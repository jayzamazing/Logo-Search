$(document).ready(function() {
  var schoolList = new Schools();
  schoolList.loadSchoolInfo();
  var program = 'SEARCH ALL', education = 'SEARCH ALL';
  $('.program-list li a:contains("' + program + '")').css('background-color', 'red');
  $('.education-list li a:contains("' + program + '")').css('background-color', 'red');
  /*
  * Function to unselect previous item in dropdown and select current item
  */
  $('.program-list li a').click(function() {
    $('.program-list li a:contains("' + program + '")').css('background-color', '');
    program = $(this).text();
    $('.program-list li a:contains("' + program + '")').css('background-color', 'red');
    $('.program').html(program + '<span class="caret"></span>');
  });
  /*
  * Function to unselect previous item in dropdown and select current item
  */
  $('.education-list li a').click(function() {
    $('.education-list li a:contains("' + education + '")').css('background-color', '');
    education = $(this).text();
    $('.education-list li a:contains("' + education + '")').css('background-color', 'red');
    $('.education').html(education + '<span class="caret"></span>');
  });
  /*
  * Function to change images from faded to color
  */
  $('form').submit(function() {
    var schoolsToShow = schoolList.findCategory(getCategory(program), getCategory(education));
    $('img[src*="img/aci - color.png"]').attr('src', 'img/aci.png');
    $('img[src*="img/acm - color.png"]').attr('src', 'img/acm - fade copy 2.png');
    $('img[src*="img/AFE color.png"]').attr('src', 'img/AFE - fade.png');
    schoolsToShow.forEach(function(element) {
      $('img[src*="' + element.schoolFadeImg + '"]').attr('src', element.schoolColorImg);
    });
  });
});
/*
* Function to convert dropdown list item to number
*/
function getCategory(cat) {
  switch(cat) {
    case 'SEARCH ALL':
      return 0;
    case 'SCHOLARSHIP PROGRAM':
      return 1;
    case 'LOAN PROGRAM':
      return 2;
    case 'K-12':
      return 3;
    case 'HIGH SCHOOL':
      return 4;
  }
}
/*
* Object to store data
*/
function Schools() {
  this.schoolInfo = [];
}
/*
* Function to get data from json
*/
Schools.prototype.loadSchoolInfo = function() {
  var context = this;
  $.getJSON('data/schools.json', 'context', function(data) {
    context.schoolInfo = data;
  });
};
/*
* Function to filter out any objec that does not contait program or education number
*/
Schools.prototype.findCategory = function(program, education) {
  var context = this;
  var temp = this.schoolInfo.schools.filter(function(e) {
    if (program === 0 && education ===0) {
      return context.schoolInfo;
    } else if (program === 0) {
      return e.categories[0].education == education;
    } else if (education === 0) {
      return e.categories[0].program == program;
    } else {
      return e.categories[0].program == program && e.categories[0].education == education;
    }
  });
  return temp;
};
