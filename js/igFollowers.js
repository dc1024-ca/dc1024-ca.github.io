var FIRST_FETCH = "https://www.instagram.com/graphql/query/?query_hash=c76146de99bb02f6415203be841dd25a&variables=%7B%22id%22%3A%2212169746%22%2C%22include_reel%22%3Atrue%2C%22fetch_mutual%22%3Atrue%2C%22first%22%3A24%7D";

// FOLOWER_FETCH_HEAD + end_cursor + FOLOWER_FETCH_TAIL
var FOLOWER_FETCH_HEAD = "https://www.instagram.com/graphql/query/?query_hash=c76146de99bb02f6415203be841dd25a&variables=%7B%22id%22%3A%2212169746%22%2C%22include_reel%22%3Atrue%2C%22fetch_mutual%22%3Afalse%2C%22first%22%3A12%2C%22after%22%3A%22";
var FOLOWER_FETCH_TAIL = "%3D%3D%22%7D";

var FOLLOWERLIST = []; //[array]

var nextCursor = ""; //[string]

// initial fetch

httpGetAsync(FIRST_FETCH, function(data) {

  dealWithFirstFetch(data)

})


// store all cookies


// following fetch

// step 1: check if has next page (data.user.edge_followed_by.page_info.has_next_page) [boolean]

// if yes, store the end cursor (data.user.edge_followed_by.page_info.end_cursor) [string]

// step 2: update cookies

// store the values (data.user.edge_followed_by.edges) [array]



function dealWithFirstFetch(responseText) {

  // parse responseText into JSON Object
  var JSONObject = JSON.parse(responseText);
  // check if has next page
  if (_checkHasNextPage(JSONObject)) {
    _updateEndCursor(JSONObject);
  } else {
    _updateEndCursor(null);
  }

  _updateFollowerList(JSONObject)

  console.log(FOLLOWERLIST)

}

function _checkHasNextPage(JSONData) {
  if (JSONData.data.user.edge_followed_by.page_info.has_next_page) {
    return true;
  }
  return false;
}

function _updateEndCursor(JSONData) {

  if (JSONData) nextCursor = JSONData.data.user.edge_followed_by.page_info.end_cursor;
  else nextCursor = null;

}

function _updateFollowerList(JSONData) {

  FOLLOWERLIST += JSONData.data.user.edge_followed_by.edges;

}


function httpGetAsync(theUrl, callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
      console.log(xmlHttp.responseText)
    callback(xmlHttp.responseText);
  }
  xmlHttp.open("GET", theUrl, true); // true for asynchronous
  xmlHttp.send(null);
}