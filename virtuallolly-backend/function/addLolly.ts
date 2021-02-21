import {DynamoDB} from 'aws-sdk'
const documentClient = new DynamoDB.DocumentClient();
import {Lolly} from './Lolly';

interface Params {
    TableName : string | ""
    Item: Lolly
}

async function addLolly(lolly:Lolly){

    const params: Params = {
        TableName: process.env.Virtual_Table || '',
        Item: lolly
    }

    try{
        const data = await documentClient.put(params).promise()
        return lolly
    }
    catch(e){
        return null
    }

}

export default addLolly