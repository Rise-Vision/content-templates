$(document).ready(function(){

var sheet = document.querySelector('#sheet');

sheet.addEventListener('google-sheet-data', function(e) {
  switch (e.detail.type) {
    case 'rows':
      document.querySelector('#rows').model = this;
    break;
    default:
    break;
  }
});

sheet.addEventListener('core-error', function(e) {
  alert(e.detail.response);
});



});

