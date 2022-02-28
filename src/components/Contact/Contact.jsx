import React from 'react'
import Order from '../Order/Order'
import classes from './Contact.module.css'
export default function Contact() {
  return (
    <section >
        <div className="container pt-5 mt-3">
            <h2 className=''>
                كن على اتصال دائم بنا 
            </h2>
            <p className='my-3 text-muted'>
                يرحب المكتب بالتواصل مع العملاء على مختلف المستويات و بكل الطرق الممكنة مما يسهل عملية التواصل، لهذا نوفر كل الطرق للإستجابة لطلابات العملاء أو الإستفسارات
            </p>
            <Order/>
            <div className={`row py-3 mb-5 ${classes.contact}`}>
                <div className="col-md-6">
                    <div className="">
                        <h3>بيانات الاتصال</h3>
                        <ul className={`mt-4 ${classes.list}`}>
                            <li>أبراج قمراية رشدي , الدور الأول</li>
                            <li>+96321547896</li>
                            <li>info@arch.com</li>
                            <li>www.arch.com</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6">
                    <h3> أرسل استفسارك</h3>
                    <div class="row mt-4">
                        <div class="col-md-6">
                            <label htmlFor="#">الاسم</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="col-md-6">
                            <label htmlFor="#">البريد الالكتروني</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="col-md-6">
                            <label htmlFor="#"> التلفون</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="col-md-6">
                            <label htmlFor="#">الموضوع</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="#">الموضوع</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="col-12">
                            <button className=' mt-3 btn btn-primary' type="submit">أرسل</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
