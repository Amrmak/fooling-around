$.ajax({
  url: '/posts/',
  async: false, //results in a warning
  dataType: 'json',
  success: function (response) {
    db = response;
  },
  type: 'POST'
});
//Append to table by ID
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
      db = JSON.stringify(data);
      var result = JSON.stringify(data);
      var $title = $('<p>').text(result); // what does this do
      console.log(data.id);
      $('#table').append("<tr><td>"+data.id+"</td><td>"+data.title+"</td><td>"+data.author+"</td></tr>");
    },
    type: 'GET'
  });
}

//Load All
$('#action-button').click(function () {
  getPostByID("");
  alert(db);
});

//Text Input
$('#action-button2').click(function () {
  var result = $('input').val();
  getPostByID(result);
});