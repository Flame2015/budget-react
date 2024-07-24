import logo from './logo.svg';
import './App.css';
import { Container, Statistic, Header, Segment, Grid, Icon, Form, Button } from 'semantic-ui-react';

function App() {
  return (
    <Container>
      <Header as="h1">
        Budget
      </Header>
      <Statistic size="small">
        <Statistic.Label>
          Your Balance
        </Statistic.Label>
        <Statistic.Value>
          2505.53
        </Statistic.Value>
      </Statistic>

      <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic size='tiny' color='green'>
              <Statistic.Label style={{textAlign:"left"}}>
                Incoming :
              </Statistic.Label>
              <Statistic.Value>
                1045.50
              </Statistic.Value>
              </Statistic>
            </Grid.Column>

            <Grid.Column>
              <Statistic size='tiny' color='red'>
                <Statistic.Label style={{textAlign:"right"}}>
                  Expense : 
                </Statistic.Label>
                <Statistic.Value>
                  500.43
                </Statistic.Value>
              </Statistic>
            </Grid.Column>

          </Grid.Row>
        </Grid>
      </Segment>


      <Header as="h3">History</Header>
      <Segment color='red'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>
              Something
            </Grid.Column>
            <Grid.Column width={3} textAlign='right'>
              $40.00
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered />
              <Icon name='trash' bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color='green'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>
              Something
            </Grid.Column>
            <Grid.Column width={3} textAlign='right'>
              $10.00
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered />
              <Icon name='trash' bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color='red'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>
              Something
            </Grid.Column>
            <Grid.Column width={3} textAlign='right'>
              $30.00
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered />
              <Icon name='trash' bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color='green'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>
              Something
            </Grid.Column>
            <Grid.Column width={3} textAlign='right'>
              $20.00
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered />
              <Icon name='trash' bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as="h3">Add New Transaction</Header>
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

      <Button.Group style={{marginTop:20}}>
        <Button>Cancel</Button>
        <Button.Or />
        <Button primary>Ok</Button>
      </Button.Group>

    </Container>
  );
}

export default App;
