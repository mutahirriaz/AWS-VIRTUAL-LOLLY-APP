import * as cdk from '@aws-cdk/core';
import * as appsync from '@aws-cdk/aws-appsync';
import * as dynamodb from '@aws-cdk/aws-dynamodb';
import * as lambda from '@aws-cdk/aws-lambda';


export class VirtuallollyBackendStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    const api = new appsync.GraphqlApi(this, 'LollyAPI', {
      name: 'Lolly-API',
      schema: appsync.Schema.fromAsset('graphql/schema.gql'),
      authorizationConfig: {
        defaultAuthorization: {
          authorizationType: appsync.AuthorizationType.API_KEY,
        },
      },
    });

    const virtualLambda = new lambda.Function(this, 'AppSyncNotesHandler', {
      runtime: lambda.Runtime.NODEJS_12_X,
      code: lambda.Code.fromAsset('function'),
      handler: 'main.handler',
    });

    const datasource = api.addLambdaDataSource('lambdaDatasource', virtualLambda);

    datasource.createResolver({
      typeName: "Mutation",
      fieldName: "addLolly"
    });

    datasource.createResolver({
      typeName: "Query",
      fieldName: "getLolly"
    })

    const virtualTable = new dynamodb.Table(this, 'Lolly_Table', {
      tableName: 'LOLLY_TABLE',
      partitionKey: {
        name: 'lollyPath',
        type: dynamodb.AttributeType.STRING
      },
    });

    virtualTable.grantFullAccess(virtualLambda);
    virtualLambda.addEnvironment('Virtual_Table', virtualTable.tableName);

  }
}
