import React from "react";
import { Segment,Grid } from "semantic-ui-react";
import DisplayBlance from "./DisplayBalance";

function DisplayAllBalances(props){
    const {title,type} = props;
    return (
        <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
             <DisplayBlance title="Income" value="1234.43" color="green"/>
            </Grid.Column>

            <Grid.Column>
            <DisplayBlance title="Expanse" value="234.43" color="red"/>
            </Grid.Column>

          </Grid.Row>
        </Grid>
      </Segment>
    )
}

export default DisplayAllBalances;