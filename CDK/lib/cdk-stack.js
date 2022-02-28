const { Stack, Duration } = require("aws-cdk-lib");
const lambda = require("aws-cdk-lib/aws-lambda");
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
      const yikes = new lambda.Function(this, "YikesHandler", {
         functionName: "myFirstLambda",
         runtime: lambda.Runtime.NODEJS_14_X,
         code: lambda.Code.fromAsset("lambda"),
         handler: "yikes.handler",
      });
   }
}

module.exports = { CdkStack };
