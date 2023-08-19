export default function Card({ iscardvisible,optiongroup,handleChange,handleChange2,optionorder }) { 
   if (iscardvisible) {
            return (
                <div className="Card" style={{ width:'250px',boxShadow:'0 0 10px #B7B8B8',position: 'relative',zIndex:'3', marginLeft:'2.75em', marginTop:'10px', borderRadius:'10px', backgroundColor:'#F8F9FA' }}>
                    <div className="Card-body" style={{padding:'0px 10px 10px 10px',fontSize:'14px'}} >
                                <span style={{ marginLeft: '30px' }}>
                                    <form action="Groupingby">
                                        <label htmlFor="Grouping" style={{marginRight:'100px',color:'#676767'}}>Grouping</label>
                                <select value={optiongroup} onChange={handleChange} id="group" name="group">
                                            <option value="status">Status</option>
                                            <option value="user">User</option>
                                            <option value="priority">Priority</option>
                                        </select>
                            </form>
                            <form style={{ marginTop: '15px', paddingBottom:'8px'}} action="Orderingby">
                                <label htmlFor="Ordering" style={{ marginRight: '100px', color:'#676767'}}>Ordering</label>
                                <select value={optionorder} onChange={handleChange2 } id="order" name="order">
                                            <option value="priority">Priority</option>
                                            <option value="title">Title</option>
                                        </select>
                                        </form>
                        </span>
                    </div>
                </div>
            );
        }
    return null;
}