import React from 'react'
import {useState} from 'react'
import data from './Data'


import './Portfolio.scss'

const Portfolio = () => { 
    const[myData, setMyData] = useState(data);
    const[value,setValue] = useState(0);
    
    
    
const {id, title, description, url, link} = myData[value];

  return (
  <section className='section'>
        <div className='port-container'>
            <aside className="btn-container">
                {myData.map((item, index)=>{
                    return(
                        <button 
                        key={item.id}
                        onClick={()=>setValue(index)}
                        className={`port-btn ${index === value && 'active-btn'}`}
                        >
                           {item.title} 
                        </button>
                    )
                })}
                <a href="https://github.com/AnthonyZet" className="port-btn">GitHub</a>
                
            </aside>
            <main className="main">
                <div className="title">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <div className="img-cover">
                        <img 
                        className='port-img'
                        src={require(`./img/learn${value}.png`)}
                        alt="pic" />
                    </div>
                    
                </div>
                <article className='btn-cover'>
                <a href={link}><button className="btn-bot">Enter</button></a>
                </article>
               
            </main>
        </div>
</section>        
  )
}

export default Portfolio