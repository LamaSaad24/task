import React from 'react'
import classes from './Projects.module.css'
import Slider from "react-slick";

export default function Projects() {
  const settings = {
    className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      dots: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
  };
  return (
    <section className='bg-dark'>
      <div className="container py-5 mt-4">
        <h2 className='text-center text-white'>آخر مشاريعنا</h2>
        <p className='text-center text-white'>البناء والديكور وتنسيقات الحدائق بالصورة التي تتخيلها نقدم أفضل الخدمات في المجال</p>
        <Slider {...settings}>
            <div className="col-md-4">
              <div className={`${classes["projects-item"]}`}>
                <img src="assets/images/project/pro1.jpg" className='w-100' alt="project one" />
                <p className='text-white text-center my-3'>02/02/2022</p>
                <h3 className='text-white text-center'>مشروع مجمع تجاري</h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className={`${classes["projects-item"]}`}>
                <img src="assets/images/project/pro2.jpg" className='w-100' alt="project one" />
                <p className='text-white text-center my-3'>02/02/2022</p>
                <h3 className='text-white text-center'>مشروع مجمع تجاري</h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className={`${classes["projects-item"]}`}>
                <img src="assets/images/project/pro3.jpg" className='w-100' alt="project one" />
                <p className='text-white text-center my-3'>02/02/2022</p>
                <h3 className='text-white text-center'>مشروع مجمع تجاري</h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className={`${classes["projects-item"]}`}>
                <img src="assets/images/project/prod4.jpg" className='w-100' alt="project one" />
                <p className='text-white text-center my-3'>02/02/2022</p>
                <h3 className='text-white text-center'>مشروع مجمع تجاري</h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className={`${classes["projects-item"]}`}>
                <img src="assets/images/project/prod5.jpg" className='w-100' alt="project one" />
                <p className='text-white text-center my-3'>02/02/2022</p>
                <h3 className='text-white text-center'>مشروع مجمع تجاري</h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className={`${classes["projects-item"]}`}>
                <img src="assets/images/project/prod6.jpg" className='w-100' alt="project one" />
                <p className='text-white text-center my-3'>02/02/2022</p>
                <h3 className='text-white text-center'>مشروع مجمع تجاري</h3>
              </div>
            </div>
        </Slider>
      </div>
    </section>
  )
}
