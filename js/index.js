(function() {
    var userAPI = "http://172.16.126.138:3001/api/users/1?callback=?";
      $.getJSON( userAPI, {
      format: "json"
    })
    .done(function( data ) {
        console.log(data.email);
    });
  })();

