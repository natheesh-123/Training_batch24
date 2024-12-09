import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import CommonData from '../shared/constant/constantData';
const MyCarouselComp = () => {
    return (
        <div>
            <h2>this is mu carousel comp</h2>
            <Carousel>
                <Carousel.Item>
                <img src={CommonData.bird}alt='img1'height="200px" width="200px"/>

                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    
            <img src={CommonData.butterfly} alt='img2'height="70%" width="70%"/>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    
                <img src={CommonData.bird}alt='img1'height="100%" width="100%"/>
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
