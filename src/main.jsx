import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterApp } from './CounterApp'
import { FirstAPP } from './FirstApp'
import './style.css'

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        {/* <FirstAPP title='Hola, SSr. Full Stack' /> */}
        <CounterApp value={ 20 }/>
    </React.StrictMode>
)