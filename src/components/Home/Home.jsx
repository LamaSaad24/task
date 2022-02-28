import React from 'react'
import Navbar from '../Navbar/Navbar'
import classes from './Home.module.css'

export default function Home() {
  return (
    <header className={`p-1 ${classes.header}`} style={{backgroundImage:`url("assets/images/header/header.jpg")`}}>
      <div className={`container`}>
      <div className={`p-3 m-2 ${classes["header-content"]}`}>
        <h1>مرحبا بكم في شركة سيف ون للأعمال الهندسية</h1>
        <p className="my-4">
          بشعور قوي بقيمة التنوع, نقوم بإنشاء تصميم بناء متين وفريد وحلول حصرية أخرى .
        </p>
        <a href="#" className="btn btn-primary">تابع المزيد</a>
      </div>
      </div>
    </header>
  )
}
