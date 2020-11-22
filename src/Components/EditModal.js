import React from 'react';
import Button from './Button'

const EditModal = ({mclose,mdata,setval,fupdate}) => {
    return(
        <div>
            <h3>Edit Task</h3>
            <div className="input">
                <input type="text" value={mdata.title} onChange={setval}/>
            </div>
            <div className="btn-group">
                <Button label="Update" variant="primary" action={fupdate}/>
                <Button label="Close" variant="danger" action={mclose}/>
            </div>
        </div>
    )
}


export default EditModal;