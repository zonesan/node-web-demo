var express = require('express')
var stringifyObject = require('stringify-object')
var app = express()

app.get('*', function (req, res) {
    var headersJson = stringifyObject(req.headers,{
        indent:'  ',
        singleQuotes: false
    });
    console.log(req.url)
    console.log(headersJson);
    
    headersJson='<pre><code>'+headersJson+'</code></pre>';

    res.send(headersJson);
})

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
})
