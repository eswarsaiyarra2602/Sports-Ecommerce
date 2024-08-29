import React from 'react'
import './TextSlide.css'
export const TextSlide = () => {
  return (
    <div className="text-slide-top">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    SUMMER SALE IS NOW LIVE
                </div>
                <div className="carousel-item">
                    FREE DELIVERY ON ORDERS ABOVE ₹500
                </div>
                <div className="carousel-item">
                    AVAIL 10% OFF ON FIRST ORDER
                </div>
            </div>
        </div>
    </div>
  )
}
