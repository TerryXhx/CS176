// Reference: https://github.com/youkeyao/Modern-Web-Application-Development/blob/main/lesson-7-homework/cache-control/server.js

const http = require("http");
const fs = require("fs");
const port = 3000;
const ETag = 176;

http.createServer((req, res) => {
  let url = req.url.replace(/^\//, '');
  if (!url) {
    url = "index.html";
  }
  let [filePath, params] = url.split("?");

  if (!fs.existsSync(filePath)) {
      res.statusCode = 404;
      res.end();
      return;
  } else {
    if (filePath != "index.html") {
        let [key, value] = params.split("=");
        switch (value) {
            case "max-age":
                res.writeHead(200, "Success", {
                    "Cache-Control": "max-age=60"
                });
                break;
            case "no-cache":
                if (req.headers["if-none-match"] == ETag) {
                    res.statusCode = 304;
                    res.end();
                    return;
                } else {
                    res.writeHead(200, "Success", {
                        "Cache-Control": "no-cache",
                        "ETag": ETag
                    });
                }
                break;
            case "no-store":
                res.writeHead(200, "Success", {
                    "Cache-Control": "no-store"
                });
                break;
        }
    }
    fs.createReadStream(filePath).pipe(res);
  }
}).listen(port)

console.log(`listening port ${port}`)