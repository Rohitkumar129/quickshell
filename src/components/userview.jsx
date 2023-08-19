import Taskcard from './Taskcards';
import Anoop  from '../images/anoop.jpeg';
import yogesh from '../images/Yogesh.png';
import shankar from '../images/Shankar.png';
import ramesh from '../images/Ramesh.jpeg';
import suresh from '../images/suresh.png';
import dot from '../images/dots.jpeg';
import plus from '../images/plus.png';




export default function View2({ data1, data2, optionorder }) {
  let val1 = 0, val2 = 0, val3 = 0, val4 = 0, val5 = 0;
  if (optionorder === 'priority') data1.sort((a, b) => { return b.priority - a.priority })
  else if(optionorder==='title')data1.sort((a, b) => a.title.localeCompare(b.title)) 
  if (!data2 || data2.length===0) return <>Loading</>
  else {
    const filtereddata1 = data1.filter(ticket => ticket.userId === 'usr-1');
    const filtereddata2 = data1.filter(ticket => ticket.userid === 'usr-2');
    const filtereddata3 = data1.filter(ticket => ticket.userId === 'usr-3');
    const filtereddata4 = data1.filter(ticket => ticket.userId === 'usr-4');
    const filtereddata5 = data1.filter(ticket => ticket.userId === 'usr-5');
    val1 = filtereddata1.length;
    val2 = filtereddata2.length;
    val3 = filtereddata3.length;
    val4 = filtereddata4.length;
    val5 = filtereddata5.length;
    return (
      <>
            <div style={{ width: '19vw', float: 'left', marginLeft: '1%', display: 'block', textAlign: 'center', marginTop: '30px' }}>
                <div style={{ display: 'inline-flex' }}>
          <img src={Anoop} alt='anoop' style={{ height: '18px' }} />
          <p style={{ marginBlockStart: '0em', marginBlockEnd: '0em', fontSize: '15px', marginLeft: '10px' }}>{data2[0].name}</p>
          <span style={{ marginLeft: '15px', fontSize: '15px', color: '#676767' }}>{val1}</span>
          <img src={plus} alt='add' style={{ height: '18px', marginLeft: '50px' }} />
          <img src={dot} style={{ height: '20px', marginLeft: '4px' }} alt='dots' />
        </div>
          {filtereddata1.map((ticket, index) => <Taskcard key={index} ticket={ticket} />)}
          </div>
        
            <div style={{ width: '19vw', float: 'left', marginLeft: '1%', display: 'block', textAlign: 'center', marginTop: '30px' }}>
                <div style={{ display: 'inline-flex' }}>
          <img src={yogesh} alt='yogesh' style={{ height: '18px' }} />
          <p style={{ marginBlockStart: '0em', marginBlockEnd: '0em', fontSize: '15px', marginLeft: '10px' }}>{data2[1].name}</p>
          <span style={{ marginLeft: '15px', fontSize: '15px', color: '#676767' }}>{val2}</span>
          <img src={plus} alt='add' style={{ height: '18px', marginLeft: '50px' }} />
          <img src={dot} style={{ height: '20px', marginLeft: '4px' }} alt='dots' />
        </div>
          {filtereddata2.map((ticket, index) => <Taskcard key={index} ticket={ticket} />)}
          </div>
        
            <div style={{ width: '19vw', float: 'left', marginLeft: '1%', display: 'block', textAlign: 'center', marginTop: '30px' }}>
                <div style={{ display: 'inline-flex' }}>
          <img src={shankar} alt='shankar' style={{ height: '18px', borderadius: '50%' }} />
          <p style={{ marginBlockStart: '0em', marginBlockEnd: '0em', fontSize: '15px', marginLeft: '10px' }}>{data2[2].name}</p>
          <span style={{ marginLeft: '15px', fontSize: '15px', color: '#676767' }}>{val3}</span>
          <img src={plus} alt='add' style={{ height: '18px', marginLeft: '50px' }} />
          <img src={dot} style={{ height: '20px', marginLeft: '4px' }} alt='dots' />
        </div>
          {filtereddata3.map((ticket, index) => <Taskcard key={index} ticket={ticket} />)}
          </div>
        
            <div style={{ width: '19vw', float: 'left', marginLeft: '1%', display: 'block', textAlign: 'center', marginTop: '30px' }}>
                <div style={{ display: 'inline-flex' }}>
          <img src={ramesh} alt='ramesh' style={{ height: '18px' }} />
          <p style={{ marginBlockStart: '0em', marginBlockEnd: '0em', fontSize: '15px', marginLeft: '10px' }}>{data2[3].name}</p>
          <span style={{ marginLeft: '15px', fontSize: '15px', color: '#676767' }}>{val4}</span>
          <img src={plus} alt='add' style={{ height: '18px', marginLeft: '50px' }} />
          <img src={dot} style={{ height: '20px', marginLeft: '4px' }} alt='dots' />
        </div>
          {filtereddata4.map((ticket, index) => <Taskcard key={index} ticket={ticket} />)}
          </div>
        

            <div style={{ width: '19vw', float: 'left', marginLeft: '1%', display: 'block', textAlign: 'center', marginTop: '30px' }}>
                <div style={{ display: 'inline-flex' }}>
          <img src={suresh} alt='suresh' style={{ height: '18px' }} />
          <p style={{ marginBlockStart: '0em', marginBlockEnd: '0em', fontSize: '15px', marginLeft: '10px' }}>{data2[4].name}</p>
          <span style={{ marginLeft: '15px', fontSize: '15px', color: '#676767' }}>{val5}</span>
          <img src={plus} alt='add' style={{ height: '18px', marginLeft: '50px' }} />
          <img src={dot} style={{ height: '20px', marginLeft: '4px' }} alt='dots' />
        </div>
          {filtereddata5.map((ticket, index) => <Taskcard key={index} ticket={ticket} />)}
          </div>
      </>
    );
  } 
}