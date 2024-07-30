import React,{useEffect, useState} from 'react';
import './App.css';
import { Container} from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBlance from './components/DisplayBalance';
import DisplayAllBalances from './components/DisplayAllBlances';
import EntryLines from './components/EntryLines';
import ModalEdit from './components/Modal';


import {useSelector} from 'react-redux';



function App() {

  const[entries, setEntries] = useState(initialEntires);
  const [description, setDescription] = useState('');
  const [value, setValue] = useState("")
  const [isExpense,setIsExpense]=useState(true);
  const [isOpen, SetIsopen] = useState(false)
  const [entryID, setEntryId] = useState();
  const [totalBalance,setTotalBalance] = useState(0);

  const entriesRedux = useSelector((state) => state.entries);

  useEffect(() =>{
    if(!isOpen && entryID){
      const index = entries.findIndex(entry => entry.id === entryID);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
      resetEntry();
    }
  },[isOpen]);

  useEffect(() => {
    let totalincome = 0;
    let totalexpense = 0;
    entries.map(entry =>{
      if(entry.isExpense){
        return totalexpense += entry.value;

      }else
      {
        return totalincome += entry.value;
      }
      
    });
    let total = totalincome - totalexpense;
    setTotalBalance(total);
    },[entries])


  const resetEntry = () => {
    setDescription('');
      setValue('');
      setIsExpense(true);
  }

  const deleteEntry = (id) => {
    const result = entries.filter(entry => entry.id !== id);
    setEntries(result);
  }

  const addEntry=()=>{
      const result = entries.concat({id:entries.lenght+1,description:description,value:"$"+value,isExpense:isExpense})
      setEntries(result);
      resetEntry();

    }

  const editEntry = (id) => {
      if(id){
        const index = entries.findIndex(entry => entry.id === id);
        const entry = entries[index];
        setEntryId(entry.id);
        setDescription(entry.description);
        setValue(entry.value);
        setIsExpense(entry.isExpense);
        SetIsopen(true);

      }
  }  


  return (
    <Container>
      <MainHeader title="Budget" type="h1"/>

   

      <DisplayBlance title=" Your Balance" value={totalBalance} size="small"/>

      <DisplayAllBalances/>

      
      <MainHeader title="History" type="h3"/>

      <EntryLines 
        entries={entriesRedux} 
        deleteEntry={deleteEntry} 
        description={description}  
        value={value}
        editEntry={editEntry}
      />
     

      <MainHeader title="Add New Transaction" type="h3"/>
    
     <NewEntryForm 
        addEntry={addEntry}
        description={description}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
     />

     <ModalEdit 
        isOpen={isOpen} 
        SetIsopen={SetIsopen}
        addEntry={addEntry}
        description={description}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
      />
     

    </Container>
  );
}

export default App;


var initialEntires=[
  {
  id:1,
  description: "Work Income",
  value: 32334,
  isExpense: false
},
{
  id:2,
  description: "Work Bill",
  value: 34,
  isExpense: true
},
{
  id:3,
  description: "Rent Bill",
  value: 540,
  isExpense: true
},
{
  id:4,
  description: "power Bill",
  value: 540,
  isExpense: true
},
{
  id:5,
  description: "post come",
  value: 540,
  isExpense: false
}
]