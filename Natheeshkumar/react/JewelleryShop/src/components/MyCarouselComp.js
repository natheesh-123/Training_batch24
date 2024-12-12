import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import CommonData from '../shared/constant/constantData';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
const MyCarouselComp = () => {
    return (
        <div>
            {/* <h2></h2> */}
            <Carousel>
                <Carousel.Item>
                    <img src={CommonData.ring} alt='imgring' height="100%" width='100%' objectFit="cover"/>

                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>

                   <img src={CommonData.ring} alt='imgring' height="100%" width='100%' objectFit="cover"/>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>

                    <img src={CommonData.ring} alt='imgring' height="100%" width='100%' objectFit="cover"/>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            


        </div>
    )
}

export default MyCarouselComp