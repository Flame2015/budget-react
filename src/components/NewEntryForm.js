import React from "react";
import {  Form } from "semantic-ui-react";
import ButtonSaveOrcancel from "./ButtonSaveOrCancel";
import EntryForm from "./EntryForm";

function NewEntryForm(props) {
  const { 
    addEntry,
    description, 
    setDescription,
    value, 
    setValue, 
    isExpense, 
    setIsExpense } = props;




  return (
    <Form unstackable>
      <EntryForm
        description={description}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
        isExpense={isExpense}
        setIsExpense={setIsExpense} />
      <ButtonSaveOrcancel addEntry={addEntry}  />
    </Form>
  )
}

export default NewEntryForm;