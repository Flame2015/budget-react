import React from "react";
import { Button, Modal } from "semantic-ui-react";
import EntryForm from "./EntryForm";

const ModalEdit = ({
    isOpen, 
    SetIsopen, 
    addEntry,
    description, 
    setDescription,
    value, 
    setValue, 
    isExpense, 
    setIsExpense }) => {
    return(
        <Modal open={isOpen}>
            <Modal.Header>Edit Entry</Modal.Header>
            <Modal.Content>
                <EntryForm  
                    description={description}
                    setDescription={setDescription}
                    value={value}
                    setValue={setValue}
                    isExpense={isExpense}
                    setIsExpense={setIsExpense} />
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={()=>SetIsopen(false)}>Close</Button>
                <Button onClick={() => SetIsopen(false)} positive>Save</Button>
            </Modal.Actions>
        </Modal>
    )
}

export default ModalEdit;