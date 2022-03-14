const { Stack, Duration } = require("aws-cdk-lib");
const lambda = require("aws-cdk-lib/aws-lambda");
const apigw = require("aws-cdk-lib/aws-apigateway");
// const sqs = require('aws-cdk-lib/aws-sqs');

class CdkStack extends Stack {
   /**
    *
    * @param {Construct} scope
    * @param {string} id
    * @param {StackProps=} props
    */
   constructor(scope, id, props) {
      super(scope, id, props);

      // The code that defines your stack goes here

      // example resource
      // const queue = new sqs.Queue(this, 'CdkQueue', {
      //   visibilityTimeout: Duration.seconds(300)
      // });

      //created infrastructure for my lambda function :D
      const api = new lambda.Function(this, "APIHandler", {
         functionName: "APILambda",
         runtime: lambda.Runtime.NODEJS_14_X,
         //dir where lambda lives  --> wrapped up in zip file and sent to AWS
         //define configs such as mb
         code: lambda.Code.fromAsset("lambda"),
         handler: "index.handler",
      });
      new apigw.LambdaRestApi(this, "Endpoint", {
         handler: api,
      });
   }
}

module.exports = { CdkStack };
