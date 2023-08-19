import { useEffect,useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH } from '@fortawesome/fontawesome-free-solid';
import View1 from "./components/statusview";
import View2 from "./components/userview";
import View3 from "./components/priorityview";
import Card from "./components/Dropdownbutton";

export default function App() {
    const [data1, setdata1] = useState([]);
    const [data2, setdata2] = useState([]);
    const fetchData = async () => {
     try {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      if (!response.ok) {
        throw new Error(response.statusText);
      };
        const jsondata = await response.json();
        setdata2(jsondata.users);
      setdata1(jsondata.tickets);
    } catch (error) {
      console.log("error",error);
    }
  };
    console.log(data1);
    console.log(data2);
    
    useEffect(() => {
      fetchData();
    }, []);
    





  const [cardvisible, setCardvisible] = useState(false);
  const [optiongroup, setoptionGroup] = useState('status'); 
  const [optionorder, setoptionorder] = useState('priority');
    const handleClick = () => {
        setCardvisible(!cardvisible);
    } 
    const handleChange = (event) => {
        setoptionGroup(event.target.value);
    }
    const handleChange2 = (event) => {
        setoptionorder(event.target.value);
    }
    
  
//   let hashmap1 = new Map();
//   hashmap1.set('Anoop sharma', { Anoop });
//   hashmap1.set('Yogesh', { yogesh });
//   hashmap1.set('Shankar Kumar', { shankar });
//   hashmap1.set('Ramesh', { ramesh });
//   hashmap1.set('Suresh', { suresh });
  

  return (
    <div className="App">
      <div className='Navbar' style={{ backgroundColor: '#FEFEFE', height: '4.5em', width: '100vw' }}>
        <div>
            <button onClick={handleClick} style={{ marginTop: '1.5em', marginLeft: '3.25em', width: '8em', height: '1.8em', backgroundColor: '#FEFEFE', borderWidth: '1px', borderColor: '#EAEBEC', boxShadow: '0 0 10px #CED1D1', borderRadius: '5px', fontWeight: '100' }}>
                <span>
                    <FontAwesomeIcon icon={faSlidersH} style={{ marginRight: '10px' }} />
                </span>
                Display
                <span style={{ marginLeft: '10px' }}>
                    <FontAwesomeIcon icon="fa-solid fa-angle-down" />
                </span>
                  </button>
                  
          <Card iscardvisible={cardvisible}
          optiongroup={optiongroup} // Pass the optiongroup state as prop
            handleChange={handleChange}
            handleChange2={handleChange2}
            optionorder={optionorder}
          />
        </div>
      </div>
      <div className='Body' style={{ backgroundColor: '#F3F4F7', width: '100vw', height: '100vh' }}>
        {optiongroup === 'status' && <View1 data1={data1} optionorder={optionorder} />}
        {optiongroup === 'user' && <View2 data1={data1}  data2={data2} optionorder={optionorder} />}
        {optiongroup === 'priority' && <View3 data1={data1} />}
      </div>
    </div>
      );
}