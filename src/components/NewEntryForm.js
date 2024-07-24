import React from "react";
import { Form } from "semantic-ui-react";

function NewEntryForm(){
    
    return (
        <Form unstackable>
        <Form.Group>
          <Form.Input 
            icon='tags'
            width={12}
            label='Description'
            placeholder='New Shinny thing'
            />
            <Form.Input width={4} label='Value' placeholder='100.00' icon="dollar" iconPosition='left'></Form.Input>
        </Form.Group>
      </Form>
    )
}

export default NewEntryForm;