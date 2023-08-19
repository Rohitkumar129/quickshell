import Taskcard from './Taskcards';
import dot from '../images/dots.jpeg';
import plus from '../images/plus.png';
import immedi from '../images/urgent.png';
import Nopriority from '../images/Nopriority.png';
import high from '../images/high.png';
import medium from '../images/medium.png';
import low from '../images/low.png';








export default function View3({ data1 }) {
  let val1 = 0, val2 = 0, val3 = 0, val4 = 0, val5 = 0;
  // if (optionorder === 'priority') data1.sort((a, b) => { return b.priority - a.priority })
  data1.sort((a, b) => a.title.localeCompare(b.title)) 
  console.log(data1);
   const filtereddata1 = data1.filter(ticket => ticket.priority === 0);
    const filtereddata2 = data1.filter(ticket => ticket.priority === 1);
    const filtereddata3 = data1.filter(ticket => ticket.priority === 2);
    const filtereddata4 = data1.filter(ticket => ticket.priority === 3);
    const filtereddata5 = data1.filter(ticket => ticket.priority === 4);
    val1 = filtereddata1.length;
    val2 = filtereddata2.length;
    val3 = filtereddata3.length;
    val4 = filtereddata4.length;
    val5 = filtereddata5.length;
    return (
      <>
            <div style={{ width: '19vw', float: 'left', marginLeft: '1%', display: 'block', textAlign: 'center', marginTop: '30px' }}>
                <div style={{ display: 'inline-flex' }}>
                    <img src={Nopriority} alt='noprior' style={{ height: '13px' }} />
                    <p style={{ marginBlockStart: '0em', marginBlockEnd: '0em', marginLeft: '10px', fontSize: '15px' }}>No Priority</p>
                    <span style={{ marginLeft: '10px', color: '#676767', fontSize: '15px' }}>{val1}</span>
                    <img src={plus} alt='add' style={{ height: '18px', marginLeft: '100px' }} />
                    <img src={dot} style={{ height: '18px', marginLeft: '4px' }} alt='dots' />
                </div>
                {filtereddata1.map((ticket, index) => <Taskcard key={index} ticket={ticket} />)}
            </div>
        
            

            <div style={{ width: '19vw', float: 'left', marginLeft: '1%', display: 'block', textAlign: 'center', marginTop: '30px' }}>
                <div style={{ display: 'inline-flex' }}><img src={immedi} alt='urgent' style={{ height: '13px', padding: '2px' }} />
                    <p style={{ marginBlockStart: '0em', marginBlockEnd: '0em', marginLeft: '10px', fontSize: '15px' }}>Urgent</p>
                    <span style={{ marginLeft: '10px', color: '#676767', fontSize: '15px' }}>{val2}</span>
                    <img src={plus} alt='add' style={{ height: '18px', marginLeft: '100px' }} />
                    <img src={dot} style={{ height: '18px', marginLeft: '4px' }} alt='dots' />
                </div>
                {filtereddata2.map((ticket, index) => <Taskcard key={index} ticket={ticket} />)}
            </div>
        
            

            <div style={{ width: '19vw', float: 'left', marginLeft: '1%', display: 'block', textAlign: 'center', marginTop: '30px' }}>
                <div style={{ display: 'inline-flex' }}><img src={high} alt='high' style={{ height: '13px', padding: '2px' }} />
                    <p style={{ marginBlockStart: '0em', marginBlockEnd: '0em', marginLeft: '10px', fontSize: '15px' }}>High</p>
                    <span style={{ marginLeft: '10px', color: '#676767', fontSize: '15px' }}>{val3}</span>
                    <img src={plus} alt='add' style={{ height: '18px', marginLeft: '100px' }} />
                    <img src={dot} style={{ height: '18px', marginLeft: '4px' }} alt='dots' />
                </div>
                {filtereddata3.map((ticket, index) => <Taskcard key={index} ticket={ticket} />)}
            </div>
        
            

            <div style={{ width: '19vw', float: 'left', marginLeft: '1%', display: 'block', textAlign: 'center', marginTop: '30px' }}>
                <div style={{ display: 'inline-flex' }}>
                    <img src={medium} alt='med' style={{ height: '13px', padding: '2px' }} />
                    <p style={{ marginBlockStart: '0em', marginBlockEnd: '0em', marginLeft: '10px', fontSize: '15px' }}>Medium</p>
                    <span style={{ marginLeft: '10px', color: '#676767', fontSize: '15px' }}>{val4}</span>
                    <img src={plus} alt='add' style={{ height: '18px', marginLeft: '100px' }} />
                    <img src={dot} style={{ height: '18px', marginLeft: '4px' }} alt='dots' />
                </div>
                {filtereddata4.map((ticket, index) => <Taskcard key={index} ticket={ticket} />)}
            </div>



            <div style={{ width: '19vw', float: 'left', marginLeft: '1%', display: 'block', textAlign: 'center', marginTop: '30px' }}>
                <div style={{ display: 'inline-flex' }}>
                    <img src={low} alt='low' style={{ height: '13px', padding: '2px' }} />
                    <p style={{ marginBlockStart: '0em', marginBlockEnd: '0em', marginLeft: '10px', fontSize: '15px' }}>Low</p>
                    <span style={{ marginLeft: '10px', color: '#676767', fontSize: '15px' }}>{val5}</span>
                    <img src={plus} alt='add' style={{ height: '18px', marginLeft: '100px' }} />
                    <img src={dot} style={{ height: '18px', marginLeft: '4px' }} alt='dots' />
                </div>
                {filtereddata5.map((ticket, index) => <Taskcard key={index} ticket={ticket} />)}
            </div>
      </>
    );
}