import React, { Fragment } from "react"
import { Checkbox, Form, Segment } from "semantic-ui-react"

const EntryForm = ({description,value,isExpense,setValue,setIsExpense,setDescription}) => {
    return(
        <Fragment>
        <Form.Group>
        <Form.Input 
          icon='tags'
          width={12}
          label='Description'
          placeholder='New Shinny thing'
          value={description}
          onChange={(event)=>setDescription(event.target.value)}
          
          />
          <Form.Input 
          width={4} 
          label='Value' 
          placeholder='100.00' 
          icon="dollar" 
          iconPosition='left'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          
          ></Form.Input>
      </Form.Group>
      <Segment compact>
        <Checkbox 
          toggle 
          label="Is Expense" 
          checked={isExpense}
          onChange={()=>setIsExpense(oldState => ! oldState)}
          />
      </Segment>
      </Fragment>
    )
}

export default EntryForm;