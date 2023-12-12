import React from "react";
import Carousel from 'react-bootstrap/Carousel';
function Home() {
    return (
        <div>

            <Carousel>
                <Carousel.Item>
                    <img src="https://th.bing.com/th/id/OIP.IOGGKcmJMYKPkMuimQDLnwHaHv?pid=ImgDet&rs=1" width={"100%"} height={"750px"} />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://th.bing.com/th/id/OIP.oSSQTOcjQZvxI-6fa3iMxgHaE8?pid=ImgDet&rs=1" width={"100%"} height={"750px"} />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://th.bing.com/th/id/OIP.3T7pkGKUqgJ2iTCsWAzRNQHaLH?pid=ImgDet&w=600&h=900&rs=1" width={"100%"} height={"750px"} />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

    );

}

export default Home;