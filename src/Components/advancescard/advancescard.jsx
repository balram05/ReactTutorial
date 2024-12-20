import React from 'react'
import './advancescard.css'

function advancescard({ restaurantdata }) {
    const restaurants = restaurantdata.slice(0, 4)
    return (
        <div className='row'>
            <div className='col'>{restaurants.map((restaurant) => (
                <div className='d-flex advances-mycard gap-2'>
                    <div className='advances-mycardimage'>
                        <img src={restaurant.image} alt="" className='advances-cardimage' />
                    </div>
                    <div className='advances-cardcontent'>
                        <span className='restaurant-name'>{restaurant.name}</span>
                        <p className='mb-0 d-flex gap-1 rating-value'>
                            <span className="ratings-value">{restaurant.ratings}</span>
                            <span className='ratings'>★★★★☆</span>
                        </p>
                        <p className='mb-0 restaurant-address'>{restaurant.address}</p>
                        <div className='d-flex justify-content-between status'>
                            <span className="open"><i class="bi bi-door-open"/>open</span>
                            <span className='closed'><i class="bi bi-door-closed" />closed at 11:00 PM</span>
                        </div>
                        <div className='d-flex gap-2'>
                            {restaurant.services.map((service) => (
                                <div key={service.id} className='services'>{service}</div>
                        ))}
                        </div>
                    </div>
                </div>
            ))}

            </div>

        </div>
    )
}

export default advancescard
