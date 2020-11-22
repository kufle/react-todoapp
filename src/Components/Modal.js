import React from 'react';
import '../styles/Modal.css';
import EditModal from './EditModal';
import DeleteModal from './DeleteModal';

class Modal extends React.Component {
    render(){
        const {status,close,data,setval,fupdate,fdelete} = this.props
        return(
            <div className="modal-container">
                <div className="modal-box">
                   {status==="edit" ? 
                        <EditModal mclose={close} mdata={data} setval={setval} fupdate={fupdate}/> :
                        <DeleteModal mclose={close} mdata={data} fdelete={fdelete}/>
                    }
                </div>
            </div>
        )
    }
}

export default Modal;