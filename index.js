const request = require('request');

var URL = 'http://api.ekispert.jp/v1/json/search/course/light?';

request.get({
    uri: URL,
    headers: {'Content-type': 'application/json'},
    qs: {
        // GETのURLの後に付く ?hoge=hugaの部分
        key : '',               //API key
        from : '',              //始点の駅
        to : '',                //目的の駅
    },
    json: true
}, function(err, req, data){
    //console.log(err);
    //console.log(req);
    //console.log(data);
    
    let url = data.ResultSet.ResourceURI;
    console.log(url);
});
