import React,{useState} from 'react'
import Header from '../components/header/header';
import Lolly from '../components/lolly';
import { TextField, Button, Container } from '@material-ui/core';
import { navigate } from 'gatsby';
import {addLolly} from '../graphql/mutations'
import {API} from 'aws-amplify'
import style from '../styles/main.module.css';
import shortid from 'shortid'

function createNew() {

    const [color1, setColer1] = useState('#d52358');
    const [color2, setColer2] = useState('#e95946');
    const [color3, setColer3] = useState('#deaa43');

    const [recipientName, setRecipientName] = useState('')
    const [message, setMessage] = useState('')
    const [sender, setSender] = useState('')

    const addLollyMutation = async() => {
        try{
            const lolly = {
                lollyPath: shortid.generate(),
                flavourTop:color1,
                flavourMiddle: color2,
                flavourBottom: color3,
                message: message,
                recipientName: recipientName,
                senderName: sender,
            }

            const data = await API.graphql({
                query: addLolly,
                variables: {
                    lolly: lolly
                },
            });
           
            console.log(data)

            navigate(`/showLolly?id=${data.data.addLolly.lollyPath}`)


            
        }
        catch(e){
            console.log(e)
        }
    }

    return (
        <div className={style.container} >
            <Header />
            <div className={style.create_lolly_div} >

                <div className={style.lolly_input_div} >
                    <div className={style.lolly} >
                        <Lolly fillLollyTop={color1} fillLollyMiddle={color2} fillLollyBottom={color3} />
                    </div>

                    <div className={style.input_div} >

                        <label htmlFor="flavourTop" className={style.colorPickerLabel} >
                            <input type='color' value={color1} className={style.colorPicker} name='flavourTop' id='flavourTop'
                                onChange={(e) => setColer1(e.target.value)}
                            />
                        </label>

                        <label htmlFor="flavourTop" className={style.colorPickerLabel} >
                            <input type='color' value={color2} className={style.colorPicker} name='flavourTop' id='flavourTop'
                                onChange={(e) => setColer2(e.target.value)}
                            />
                        </label>

                        <label htmlFor="flavourTop" className={style.colorPickerLabel} >
                            <input type='color' value={color3} className={style.colorPicker} name='flavourTop' id='flavourTop'
                                onChange={(e) => setColer3(e.target.value)}
                            />
                        </label>
                    </div>
                </div>

                <div className={style.message_input_div} >
                    <label htmlFor="to_input" className={style.to_input} >
                        To
                    </label>
                    <TextField
                        variant="outlined"
                        color="primary"
                        label="A lolly for"
                        type="text"
                        name='to_input'
                        className={style.to_input}
                        id={style.input}
                        required
                       onChange={(e)=> {
                        setRecipientName(e.target.value)
                       }}
                    />

                    <label htmlFor="to_message" className={style.to_message} >
                        Say something nice
                    </label>
                    <TextField multiline rows={7} name="to_message" id={style.textarea} className={style.to_message} label='Message' variant='outlined' onChange={(e)=> {
                        setMessage(e.target.value)
                       }}  />

                    <label htmlFor="to_from" className={style.to_from} >
                        From
                    </label>
                    <TextField
                        variant="outlined"
                        color="primary"
                        label="from your friend"
                        type="text"
                        name='to_from'
                        className={style.to_from}
                        id={style.input}
                        
                        onChange={(e)=> {
                            setSender(e.target.value)
                           }}
                    />

                    <div className={style.send_lolly_btn_div2}>
                        <button onClick={() => addLollyMutation()}   type='button' className={style.send_lolly_btn2}  >Freeze this lolly and get this link</button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default createNew
