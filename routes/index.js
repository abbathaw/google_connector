const axios = require('axios');
const {DEVELOPER_KEY, CLIENT_ID}= process.env;

module.exports = function (app, addon) {

    // Root route. This route will serve the `atlassian-connect.json` unless the
    // documentation url inside `atlassian-connect.json` is set
    app.get('/', function (req, res) {
        res.format({
            // If the request content-type is text-html, it will decide which to serve up
            'text/html': function () {
                res.redirect('/atlassian-connect.json');
            },
            // This logic is here to make sure that the `atlassian-connect.json` is always
            // served up when requested by the host
            'application/json': function () {
                res.redirect('/atlassian-connect.json');
            }
        });
    });

    // This is an example route that's used by the default "generalPage" module.
    // Verify that the incoming request is authenticated with Atlassian Connect
    app.get('/google-drive', addon.authenticate(), function (req, res) {

        let {url, width, height, editUrl, iconUrl, fileName, mimeType, fileId}= req.query;

            //
            // let isPublic = await isPublic(editUrl);

            res.render('drive', {
                title: 'Google drive',
                url, width, height, editUrl, iconUrl, fileName, mimeType, fileId
            });
        }
    );

    app.get('/drive-picker', addon.authenticate(), function (req, res) {

        res.render('editor', {
            title: 'Editor',
            DEVELOPER_KEY, CLIENT_ID
        });
    });

    // load any additional files you have in routes and apply those to the app
    {
        var fs = require('fs');
        var path = require('path');
        var files = fs.readdirSync("routes");
        for(var index in files) {
            var file = files[index];
            if (file === "index.js") continue;
            // skip non-javascript files
            if (path.extname(file) != ".js") continue;

            var routes = require("./" + path.basename(file));

            if (typeof routes === "function") {
                routes(app, addon);
            }
        }
    }

    // async function isPublic(url) {
    //    let res = await axios.get(url)
    //     console.log("response", res);
    // }
};
