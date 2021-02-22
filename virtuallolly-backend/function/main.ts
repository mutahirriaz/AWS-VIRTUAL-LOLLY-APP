import addLolly from './addLolly';
import {Lolly} from './Lolly';
import getLolly from './getLolly'

interface AppSyncEvent {
    info: {
        fieldName: string
    },
    arguments: {
        lolly: Lolly
        lollyPath: string
    }
}

exports.handler = async (event: AppSyncEvent) => {

    switch(event.info.fieldName){
        case "addLolly":
            return await addLolly(event.arguments.lolly);
        case "getLolly":
            return await getLolly(event.arguments.lollyPath);
        default: 
            return null;
    }

}