// List all posts in table on load
$.ajax({
    url: '/posts/',
    data: {
      format: 'json'
    },
    error: function () {
      $('#info').html('<p>An error has occurred</p>');
    },
    dataType: 'jsonp',
    success: function (data) {
      for(var i=0; i<data.length; i++){
        $('#table').append("<tr><td>"+data[i].id+"</td><td>"+data[i].title+"</td><td>"+data[i].author+"</td></tr>");
      }
          },
    type: 'GET'
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