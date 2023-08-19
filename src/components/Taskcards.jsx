export default function Taskcard({ ticket,imag }) {
    return (
        <div className="taskcard" style={{ fontSize:'15px',marginTop: '20px',marginLeft:'18px', border: 'thin ', borderRadius: '10px', backgroundColor: 'white', width: '18vw', padding: '1px', height:'15vh' ,boxShadow:'0 0 5px #949595'}}>
            <div className="taskcard-body" style={{backgroundColor:'white'}}>
                    <div style={{display:'contents',float:'left'}}>
                        {ticket.id}
                        {/* <img src={ticket.user} alt=""/> */}
                    </div>
                    <p style={{fontWeight:'bold'}}>{ticket.title}</p>
                    <div display='inline-flex'>
                        {/* <img src={imag} alt='img' />  */}
                        <span style={{border:'2px light #949595 ', padding:'7px'}}>{ticket.tag[0]}</span>
                    </div>
                </div>
        </div>
    );
}