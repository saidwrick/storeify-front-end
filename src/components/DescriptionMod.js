import { useEffect, useState } from 'react';
import { ReactComponent as CloseIcon} from '../icons/close.svg'

function DescriptionMod(props) {

    const [text, setText] = useState("");

    function handleSubmit(){
        props.descChange(text)
        props.toggleDesc();
    }
    
    useEffect(() => {
        if (props.desc){
            setText(props.desc)
        }
    },[props])

    if (!props){
        return null;
    }

    return (
        <div className="modal" onClick={props.toggleDesc}>
            <div onClick={e=>e.stopPropagation()} className="desc-mod">
                <div className="modal-header">
                    <button className="close" onClick={props.toggleDesc}><CloseIcon/></button>
                    <h1>Edit Description</h1>
                </div>
                <textarea  onChange={e=>setText(e.target.value)} value={text}></textarea>
                <div className="buttons">
                    <button onClick={handleSubmit}>ok</button>
                    <button onClick={props.toggleDesc}>cancel</button>
                </div>
            </div>
        </div>
    );
}

export default DescriptionMod;
