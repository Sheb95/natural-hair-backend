const data = require("./data.json");

exports.handler = async function (event) {
   //undefined - can filter object using array
   //    console.log("request", JSON.stringify(event, undefined, 2));
   return {
      statusCode: 200,
      headers: { "Content-Type": "text/plain" },
      body: `YIKES, CDK! You've hit ${JSON.stringify(data)}\n`,
   };
};

//cdk yaml --> core of infra as code to aws
