import React from 'react'
import { useHistory } from "react-router-dom";
import icon from './image/rates1.png'
function Usercard(props) {
    const history = useHistory();

    const handleClick = () => {
        history.push("/viewcourse");
    }
    return (
        <div className="card stretched-link" onClick={handleClick}>
            <img src={props.icon} className="card-img-top img-fluid img-thumbnail rounded" alt="..."></img>
            <div className="card-body">
                <h6 className="card-text" style={{ textAlign: "center", color: "black" }}>Cricket Academy</h6>
                <div className="row">
                    <div className="col-sm ">
                       <p  style={{fontSize:"12px",color:"black"}}>Place:Chennai</p> 
                    </div>
                    <div className="col-sm">
                        <img src={icon} alt="" className='img-fluid' />
                    </div>
                </div>



            </div>

        </div>

    )
}

export default Usercard