import React from 'react'
import classes from './Service.module.css'
export default function Service() {
  const style =  {
    backgroundImage:"url(assets/images/services/service.jpg)"
  }
  return (
    <section className=''>
      <div className="container py-5 mt-4">
        <h2 className='text-center'>خدماتنا</h2>
        <p className='text-center my-2'>
           البناء والديكور وتنسيقات الحدائق بالصورة التي نتخيلها  <br/> نقدم أفضل الخدمات في المجال
        </p>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className={`${classes["service-item"]}`} >
              <span className={`${classes["service-item-icon"]}`}>
              <i className="bi bi-house-heart text-primary"></i>
              </span>
              <h3 className='my-2'>ديكور</h3>
              <p className='my-3 text-black-50'>
                التقنية للوصول إلى مبنى متكامل مستدام.
                معايير الجودة , بإشراف مختصصين بالأمور الهندسية 
                .نقوم ببناء مشاريعنا بدقة عالية
              </p>
              <a href="#" className="text-black text-decoration-none">قراءة المزيد</a>
            </div>
          </div>
          <div className="col-md-4">
            <div className={`service-item ${classes["service-item"]}`} style={style}>
              <span className={`${classes["service-item-icon"]}`}>
              <i className="bi bi-brush text-primary"></i>
              </span>
              <h3 className='my-2 text-white'>تنسيق الحدائق</h3>
              <p className='my-3  text-white'>
                التقنية للوصول إلى مبنى متكامل مستدام.
                معايير الجودة , بإشراف مختصصين بالأمور الهندسية 
                .نقوم ببناء مشاريعنا بدقة عالية
              </p>
              <a href="#" className="text-white text-decoration-none">قراءة المزيد</a>
            </div>
          </div>
          <div className="col-md-4">
            <div className={`${classes["service-item"]}`} >
              <span className={`${classes["service-item-icon"]}`}>
              <i className="bi bi-bricks text-primary"></i>
              </span>
              <h3 className='my-2'>بناء وتعمير</h3>
              <p className='my-3 text-black-50'>
                التقنية للوصول إلى مبنى متكامل مستدام.
                معايير الجودة , بإشراف مختصصين بالأمور الهندسية 
                .نقوم ببناء مشاريعنا بدقة عالية
              </p>
              <a href="#" className="text-black text-decoration-none">قراءة المزيد</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
