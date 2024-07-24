import logo from './logo.svg';
import './App.css';
import { Container, Segment, Grid, Icon } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import ButtonSaveOrcancel from './components/ButtonSaveOrCancel';
import DisplayBlance from './components/DisplayBalance';
import DisplayAllBalances from './components/DisplayAllBlances';
import EntryLine from './components/EntryLine';

function App() {
  return (
    <Container>
      <MainHeader title="Budget" type="h1"/>

      <DisplayBlance title=" Your Balance" value="2505.53" size="small"/>

      <DisplayAllBalances/>

      
      <MainHeader title="History" type="h3"/>

      <EntryLine description="Expense" value="$10.88" isExpense/>

      <EntryLine description="Income" value="$1000.88" />


      <MainHeader title="Add New Transaction" type="h3"/>
    
     <NewEntryForm/>

     <ButtonSaveOrcancel/>

    </Container>
  );
}

export default App;
