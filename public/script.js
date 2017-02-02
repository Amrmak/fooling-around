// List all posts in table
function refreshTable(){
  $.ajax({
    type: "GET", 
    url: '/posts/',
    success: function (posts) {
      // Clear the table rows before adding them again
      $("#table tr").remove(); 

      // Foreach post append a new row in the table!
      for (var i=0; i<posts.length; i++) {
        $('#table').append("<tr><td>"+posts[i].id+"</td><td>"+posts[i].title+"</td><td>"+posts[i].author+"</td></tr>");
      }
    },
    error: function () {
      alert('An error has occurred');
    },
    dataType: 'jsonp'
  });
}

function addPost(post) {
  $.ajax({
    type: "POST",
    url: '/posts/',
    data: post,
    success: function (data) {
      // TODO maybe reuse the logic of adding a new row here and insdie refreshTable in a function!
      $('#table').append("<tr><td>"+data.id+"</td><td>"+data.title+"</td><td>"+data.author+"</td></tr>");
      console.log(data);
    },
    error: function () {
      alert('An error has occurred');
    },
    dataType: 'jsonp'
  });
}

function deletePost(id){
  if (!id) {
    console.log('Cannot delete a post without an id!');
    return;
  }

  $.ajax({
    type: "DELETE",
    url: '/posts/' + id,
    success: function (data) {
      delete data[id];
      refreshTable();
    },
    error: function (err) {
      console.log('Couldn\'t delete the post, got error: ' + err.status + ' - ' + err.statusText);
    },
    dataType: 'jsonp'
  });
}

// window.onload = refreshTable();
window.addEventListener("load", refreshTable);

//Add post button
$('#add-post').click(function () {
  var post = {
    "title": $('#title-text').val(),
    "author": $('#author-text').val()
  };
  addPost(post);
});

//Delete post button
$('#delete-post').click(function () {
  var id = $('#delete-text').val();
  deletePost(id);
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