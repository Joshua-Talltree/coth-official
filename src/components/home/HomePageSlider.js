import React from 'react';
import Slider from 'react-slick';
import $ from 'jquery';
import HomePageSlide from './HomePageSlide'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomePageSlider.css"


class HomePageSlider extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            padding: this.getPadding(),
            slides: [{
                "type":"SUNDAY SERIES",
                "title":"SHIPS OF SCRIPTURE",
                "imageUrl":"img/slides/ships.jpg",
                "internalLink":true,
                "url":"/",
                "backgroundPosition":"center"
            },{
                "type":"SUNDAY NIGHT SERIES",
                "title":"WHAT IS A CHRISTIAN?",
                "imageUrl":"img/slides/christ-in-all-the-scriptures.jpg",
                "internalLink":true,
                "url":"/",
                "backgroundPosition":"center"
            },{
                "type":"BIBLE STUDY SERIES",
                "title":"UNSEARCHABLE RICHES",
                "subtitle":"Studies in Ephesians",
                "url":"/",
                "imageUrl":"img/slides/riches.jpg",
                "internalLink":true
            }
            ]
        }
    }

    getPadding = () => {
        if($(window).width() > 700) {
            return ($(window).width() - 700) / 2
        } else {
            return 0;
        }
    }

    updateDimensions = () => {
        this.setState({
            padding: this.getPadding()
        })
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    render(){
        const settings = {
            centerMode: true,
            centerPadding: this.state.padding + 'px',
            slidesToShow: 1,
            autoplay: true,
            arrows: false,
            autoplaySpeed: 5000,
            dots: true
        };

        const slides = this.state.slides.map((slide,index)=>{
            return(
                <div key={index}>
                    <HomePageSlide {...slide}/>
                </div>
            )
        })

        return (
            <Slider {...settings}>
                {slides}
            </Slider>
        );
    }
}

export default HomePageSlider;
