import "./Hero.css";
import { images } from "../constants";
import { FaArrowRight } from "react-icons/fa6";
import { IoArrowForwardCircleOutline, IoArrowBackCircleOutline } from "react-icons/io5";

const bg = {
    backgroundImage: `url(${images.Hero_img})`,
    height: "586px",
    backgroundPosition: "center",
    backgroundSize: "cover"
}

function Hero() {
    return (
        <section className="hero_section">
            <div className="hero_img_wrapper" style={bg}>
                <div className="hero_overlay"></div>
                <div className="container">
                    <div className="hero_text_wrapper">
                        <p className="hero_text">
                            Learn the latest digital<br /> skills for tomorrow’s jobs
                        </p>
                        <p className="hero_subtext">The fastest, most effective training to get future-ready</p>
                        <button className="hero_btn">Explore Courses <span className="hero_arrow"><FaArrowRight /></span> </button>
                    </div>
                </div>
                <span className="left_hero_arrow">
                <IoArrowBackCircleOutline />
                </span>
                <span className="right_hero_arrow">
                <IoArrowForwardCircleOutline />
                </span>
            </div>
        </section>
    )
}

export default Hero;