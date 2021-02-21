import {DynamoDB} from 'aws-sdk'
const documentClient = new DynamoDB.DocumentClient();

interface Params {
    TableName: string | ""
}

async function getLolly() {

    const params:Params = {
        TableName: process.env.Virtual_Table || ""
    }
    try{
        const data = await documentClient.scan(params).promise()
        return data.Items
    }
    catch(e){
        return null
    }

}

export default getLolly;
