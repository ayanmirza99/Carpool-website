import DetailsModal from './DetailsModal'
import "./Cards.css"
import carImg from "./car-1.png"
import axios from "axios"
import { useEffect, useState } from "react"

function Cards({ car }) {

    const [modal, setModal] = useState(false)


    return (
        <>
            <div className="parent">
                <div className="main-card">
                    <div className="imgd">
                        <img src={carImg} alt="" />
                    </div>
                    <div className="card-detail-section">
                        <div className='card-details'>
                        <h3 style={{paddingRight:'10px',color:'rgb(255,208,0)'}}>Route:</h3>
                            <h3>From:</h3>
                            <h3 className="data">{car.startPoint}</h3>
                            <h3 style={{paddingLeft:'91px'}}>To:</h3>
                            <h3 className="data">{car.destPoint}</h3>
                        </div>
                        <div className='card-details'>
                            <h3>Starting Time:</h3>
                            <h3 className="data">{car.goingTime}</h3>
                            <h3 style={{paddingLeft:'100px'}}>Approx. Time For Arrival:</h3>
                            <h3 className="data">{car.returnTime}</h3>
                        </div>
                        <div className='card-details'>
                            <h3>Seats Available:</h3>
                            <h3 className="data">{car.sittCap}</h3>
                        </div>
                        <div className='card-details'>
                            <h3>Trip: </h3>
                            <h3 className="data">{car.trip}</h3>
                        </div>
                        <div className='card-details'>
                            <h3>Price Per Seat: </h3>
                            <h3 className="data" style={{color:'#118c4f'}}>Rs.{car.price}</h3>
                        </div>
                        <div className="more-details-btn">
                        <button onClick={() => { setModal(true) }}>View More Details</button>
                        <button>Book Your Ride</button>
                        </div>
                    </div>
                </div>
                {modal && (<DetailsModal
                    setModal = {setModal}
                    key={car._id} car={car}
                />)}
            </div>



        </>
    )
}

export default Cards; 