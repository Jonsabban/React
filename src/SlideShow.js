import React from 'react';


export default class SlideShow extends React.Component {
    constructor() {
        super();
        const imgArray = ["images/img1.jpg", "images/img3.jpg", " images/img2.jpg"];
        this.state = {images: imgArray, img: imgArray[0]}
    };

    imgAll(root) {
        return <img src={root} width='500' alt={root} style={{padding: 2, borderStyle: 'solid',}}/>
    };

    imgRandom(array) {
        return <img src={array[this.state.img]} width='500' alt={""} style={{padding: 2, borderStyle: 'solid',}}/>
    };


    render() {
        let images = this.state.images;
        const img = this.imgAll();
        let random = Math.floor((Math.random() * 3));
// Random img
//        return ( <div>
//
//            <h1>Hello from SlideShow</h1>
//
//            <div id="images">
//                {images.map((image, i) => <p key={i}> {this.imgAll(image)} </p>)}
//            </div>
//
//        </div>);

// 1 random img
        return ( <div>
            <h1>Hello from SlideShow</h1>

            <p> {this.imgRandom(images)} </p>

            <button onClick={this.setState({img: this.state.images[random]})}>new random img</button>

        </div>);
    };

}