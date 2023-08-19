import minus from '../images/minus.png';
import circle from '../images/circle.png';
import timer from '../images/time.png';
import done from '../images/done.png';
import cancel from '../images/cancel.png';
import dot from '../images/dots.jpeg';
import plus from '../images/plus.png';
import Taskcard from './Taskcards';



export default function View1({ data1, optionorder }) {
  let val1 = 0, val2 = 0, val3 = 0, val4 = 0, val5 = 0;
if (optionorder === 'priority') data1.sort((a, b) => { return b.priority - a.priority })
  else if(optionorder==='title')data1.sort((a, b) => a.title.localeCompare(b.title)) 
  console.log(data1);

  const filtereddata1 = data1.filter(ticket => ticket.status === 'Backlog');
  const filtereddata2 = data1.filter(ticket => ticket.status === 'Todo');
  const filtereddata3 = data1.filter(ticket => ticket.status === 'In progress');
  const filtereddata4 = data1.filter(ticket => ticket.status === 'Done');
  const filtereddata5 = data1.filter(ticket => ticket.status === 'Canceled');
  val1 = filtereddata1.length;
  val2 = filtereddata2.length;
  val3 = filtereddata3.length;
  val4 = filtereddata4.length;
  val5 = filtereddata5.length;
  
    return (
      <>
            <div style={{ width: '19vw', height: '4vh', float: 'left', marginLeft: '1%', display: 'block', textAlign: 'center', marginTop: '30px', }}>
                <div style={{ display: 'inline-flex', }}>
                    <img src={minus} alt='minus' style={{ marginRight: '10px', height: '13px' }} />
                    <p style={{ marginBlockStart: '0em', marginBlockEnd: '0em' }}>Backlog</p>
            <span style={{ marginLeft: '10px', color: '#676767' }}>{val1}</span>
            <img src={plus} alt='add' style={{ height: '20px', marginLeft: '100px' }} />
            <img src={dot} style={{ height: '20px', marginLeft: '4px' }} alt='dots' />
          </div>
                  {filtereddata1.map((ticket, index) => <Taskcard key={index} ticket={ticket} />)}

        </div>
        
        <div style={{ width: '19vw', height: '4vh', float: 'left', marginLeft: '1%', display: 'block', textAlign: 'center', marginTop: '30px' }}><div style={{ display: 'inline-flex', }}>
          <img src={circle} alt='circle' style={{ paddingTop: '3px', marginRight: '10px', height: '13px' }} />
          <p style={{ marginBlockStart: '0em', marginBlockEnd: '0em' }}>Todo</p>
          <span style={{ marginLeft: '10px', color: '#676767' }}>{val2}</span>
          <img src={plus} alt='add' style={{ height: '20px', marginLeft: '100px' }} />
          <img src={dot} style={{ height: '20px', marginLeft: '4px' }} alt='dots' />
        </div>
               {filtereddata2.map((ticket, index) => <Taskcard key={index} ticket={ticket} />)}

          </div>
        
        <div style={{ width: '19vw', height: '4vh', float: 'left', marginLeft: '1%', display: 'block', textAlign: 'center', marginTop: '30px' }}><div style={{ display: 'inline-flex', }}>
          <img src={timer} alt='timer' style={{ paddingTop: '3px', marginRight: '10px', height: '15px' }} />
          <p style={{ marginBlockStart: '0em', marginBlockEnd: '0em' }}>In progress</p>
          <span style={{ marginLeft: '10px', color: '#676767' }}>{val3}</span>
          <img src={plus} alt='add' style={{ height: '20px', marginLeft: '90px' }} />
          <img src={dot} style={{ height: '20px', marginLeft: '4px' }} alt='dots' />
        </div>
          {filtereddata3.map((ticket, index) => <Taskcard key={index} ticket={ticket} />)}
        </div>
        
        <div style={{ width: '19vw', float: 'left', marginLeft: '1%', display: 'block', textAlign: 'center', marginTop: '30px' }}><div style={{ display: 'inline-flex', }}>
          <img src={done} alt='done' style={{ paddingTop: '3px', marginRight: '10px', height: '15px' }} />
          <p style={{ marginBlockStart: '0em', marginBlockEnd: '0em' }}>Done</p>
          <span style={{ marginLeft: '10px', color: '#676767' }}>{val4}</span>
          <img src={plus} alt='add' style={{ height: '20px', marginLeft: '100px' }} />
          <img src={dot} style={{ height: '20px', marginLeft: '4px' }} alt='dots' />
        </div>
          {filtereddata4.map((ticket, index) => <Taskcard key={index} ticket={ticket} />)}
        </div>

        <div style={{ width: '19vw', float: 'left', marginLeft: '1%', display: 'display', textAlign: 'center', marginTop: '30px' }}><div style={{ display: 'inline-flex', }}>
          <img src={cancel} alt='cancel' style={{ paddingTop: '3px', marginRight: '10px', height: '14px' }} />
          <p style={{ marginBlockStart: '0em', marginBlockEnd: '0em' }}>Canceled</p>
          <span style={{ marginLeft: '10px', color: '#676767' }}>{val5}</span>
          <img src={plus} alt='add' style={{ height: '20px', marginLeft: '100px' }} />
          <img src={dot} style={{ height: '20px', marginLeft: '4px' }} alt='dots' />
        </div>
          {filtereddata5.map((ticket, index) => <Taskcard key={index} ticket={ticket} />)}
        </div>
      </>
    );
}