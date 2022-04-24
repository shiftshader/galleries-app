import React from 'react'
import { Carousel } from 'react-bootstrap'

export default function Slider() {
  return (
    <div className="slider__container">
      <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2022/04/03/22/05/buildings-7109918_960_720.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2022/04/11/09/32/glacier-7125359_960_720.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2022/04/16/14/51/woman-7136446_960_720.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
        </Carousel>
    </div>
  )
}
