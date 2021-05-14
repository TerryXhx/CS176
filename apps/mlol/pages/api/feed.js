// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const fs = require("fs");

const data = JSON.parse(fs.readFileSync("./public/feeds.json", "utf-8"))[
  "data"
];

export default (req, res) => {
  res.statusCode = 200;
  res.json({
    code: 200,
    "data": data
  });
};
