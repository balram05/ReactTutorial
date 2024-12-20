import React from 'react'
import Shorts from "../../assets/images/shorts.png"
import Fav from "../../assets/images/heart.png"
import Recent from "../../assets/images/recent.png"
import Offers from "../../assets/images/offers.png"
import Heathly from "../../assets/images/oats.png"
import './sidenav.css'

function sidenav() {
    return (
        <div className='row'>
            <div className='col'>
                <div className='sidenav'>

                    <div className='d-flex flex-column Shorts'>
                        <img src={Shorts} />
                        <span className='navcontent'>Shorts</span>

                    </div>
                    <div className='d-flex flex-column Fav'>
                        <img src={Fav} />
                        <span className='navcontent'>Fav</span>

                    </div>
                    <div className='line'>
                 
                        </div> 
                    <div className='d-flex flex-column Recent'>
                        <img src={Recent} />
                        <span className='navcontent'>Recent</span>

                    </div>
                    <div className='d-flex flex-column Offers'>
                        <img src={Offers} />
                        <span className='navcontent'>Offers</span>

                    </div>
                    <div className='d-flex flex-column Heathly'>
                        <img src={Heathly} />
                        <span className='navcontent'>Heathly</span>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default sidenav
