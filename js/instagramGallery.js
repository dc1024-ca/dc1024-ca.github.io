var doAjax = function(method, url, body, json, callback) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(e) {

    switch (this.readyState) {
      case (XMLHttpRequest.DONE):
        if (this.status === 200) {
          // console.log(this.responseText)
          if (json) return callback(null, JSON.parse(this.responseText));
          return callback(null, this.responseText);
        } else {
          return callback(this.responseText, null);
        }
    }
  };
  xhttp.open(method, url, true);
  if (json) xhttp.setRequestHeader('Content-Type', 'application/json');
  xhttp.send((body) ? JSON.stringify(body) : null);
};


doAjax("GET", "https://api.instagram.com/v1/users/self/media/recent/?access_token=12169746.58393b2.14c0a8ecb7854ceebe8f711f01e7283d&count=12", null, false, function functionName(err, msg) {

  var datas = JSON.parse(msg).data;
  var baseID = "insID";
  datas.forEach(function(element, index) {
    document.getElementById(baseID + (index + 1)).src = element.images.thumbnail.url;
  });
})