$('#action-button').click(function () {
  getPostByID(2)
});
$('#action-button2').click(function () {
  var result = $('input').val();
  getPostByID(result);
});
function getPostByID(id) {
  $.ajax({
    url: '/posts/' + id,
    data: {
      format: 'json'
    },
    error: function () {
      $('#info').html('<p>An error has occurred</p>');
    },
    dataType: 'jsonp',
    success: function (data) {
      var result = JSON.stringify(data);
      var $title = $('<h1>').text(result);
      $('#info').append($title);
    },
    type: 'GET'
  });
}