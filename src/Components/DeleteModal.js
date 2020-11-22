import React from 'react';
import Button from './Button';

const DeleteModal = ({mclose, mdata, fdelete}) => {
    const handleDelete = id => {
        fdelete(id);
    }
    return(
        <>  
            <h3>Are You Sure ?</h3>
            <div className="btn-group">
                <Button label="Delete" variant="primary" action={() => handleDelete(mdata.id)}/>
                <Button label="Cancel" variant="danger" action={mclose}/>
            </div>
        </>
    )
}

export default DeleteModal;