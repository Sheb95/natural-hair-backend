exports.handler = async function (event) {
   //undefined - can filter object using array
   console.log("request", JSON.stringify(event, undefined, 2));
   return {
      statusCode: 200,
      headers: { "Content-Type": "text/plain" },
      body: `YIKES, CDK! You've hit ${event.path}\n`,
   };
};
