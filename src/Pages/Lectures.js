import { useEffect, useState } from "react";
import Randomizebackground from "../components/Randomizebackground";
import Slidebar from "../components/Slidebar";
import Navbar from "../components/Navbar";
import Bullets from "../components/Bullets";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import Footer from "../components/Footer";

function Lectures(){
    const [lectures, setlectures] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9000/lectures").then((res) => res.json()).then((data) => setlectures(data));
    } ,[])

    return(
        <>
            <Navbar />
            <Slidebar />
            <Randomizebackground />
            <Bullets />
            <div className="landing-text position-absolute top-50 start-50 translate-middle w-100 text-center z-1">
                <div className="container">
                    <h3 className="text-light fw-bold fs-2">We help you <span>achieve</span> your dream</h3>
                    <p className="text-light fs-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias at ab id animi.</p>
                </div>
            </div>
            <div className="Lectures">
                <div className="container">
                    <h2 className="section-title position-relative fw-bold overflow-hidden m-auto mt-4 mb-4">
                        <span className="w-100 position-absolute top-0 start-0"></span>
                        <span className="h-100 position-absolute top-0 end-0"></span>
                        <span className="w-100 position-absolute bottom-0 end-0"></span>
                        <span className="h-100 position-absolute bottom-0 start-0"></span>
                        Lectures
                    </h2>
                    <div className="row row-cols-1 row-cols-md-3 g-4 mt-4 mb-4">
                        {lectures.map((lecture) => {
                            return(
                                <Fade className="col col-md-6 col-lg-4 mb-4">
                                    <div className="card h-100 overflow-auto">
                                        <img src={lecture.thumbnailUrl} className="card-img-top h-75" alt="..."/>
                                        <div className="card-body h-50 mb-2">
                                            <h5 className="card-title pb-2 text-center">{lecture.title}</h5> 
                                            <p className="card-text">{lecture.description}</p>
                                        </div>
                                        <div className="card-footer d-flex justify-content-between align-items-center">
                                            <small>{lecture.uploadTime}</small>
                                            <Link to={`/lectures/${lecture.id}`} className="btn text-light">open</Link>
                                        </div>
                                    </div>
                                </Fade>
                            )
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Lectures;