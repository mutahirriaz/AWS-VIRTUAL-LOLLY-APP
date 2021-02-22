import {DynamoDB} from 'aws-sdk'
const documentClient = new DynamoDB.DocumentClient();



async function getLolly(lollyPath: string) {

    const params = {
        TableName: process.env.Virtual_Table || "",
        Key:{
            lollyPath:lollyPath
        }
    }
    try{
        const data = await documentClient.get(params).promise();
        return data.Item

    }
    catch(e){
        return null
    }

}

export default getLolly;
