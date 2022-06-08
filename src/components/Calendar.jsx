import React, { useState , useEffect } from 'react';
import './calendar.css'

export default function Calendar() {

  const [fecha,setFecha] = useState(new Date());
  const [dates,setDates]=useState([]);
  const [selected,setSelected]=useState(new Date());

  const getDays=(mov)=>{
    setDates([]);
    let aux=new Date(fecha);
    if(mov===1){
      aux.setMonth(aux.getMonth()+1)
    }else if(mov===-1){
      aux.setMonth(aux.getMonth()-1)
    }else if(mov===0){
      aux.setMonth(aux.getMonth())
    }
    aux.setDate(1);
    setFecha(new Date(aux))
    const monthDays = document.querySelector('.days');
    const prevLastDay = new Date(aux.getFullYear(), aux.getMonth(), 0).getDate();
    const lastDay = new Date(aux.getFullYear(), aux.getMonth() + 1, 0).getDate();
    const firstDayIndex = aux.getDay();
    const lastDayIndex = new Date(aux.getFullYear(), aux.getMonth() + 1, 0).getDay();
    const nextDays = 7 - lastDayIndex - 1;
    const months = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];

    document.querySelector(".date h2").innerHTML = months[aux.getMonth()];
    const currentDay = new Date();
    document.querySelector(".date h3").innerHTML=aux.getFullYear();
    for (let x = firstDayIndex; x > 0; x--) {
        
      setDates((prevdays)=> [...prevdays,{
        which:"prev",
        no:prevLastDay - x + 1
      },]);
    }

    for (let i = 1; i <= lastDay; i++) {
      if (
        i === new Date().getDate() &&
        aux.getMonth() === new Date().getMonth()
      ) {
        setDates((prevdates)=> [...prevdates,{
          which:"today",
          no:i
        },]);
      } else {
        setDates((prevdates)=> [...prevdates,{
          which:"",
          no:i
        },]);
      }
    }

    for (let j = 1; j <= nextDays; j++) {
      setDates((prevdates)=>[...prevdates,{
        which:"next",
        no:j
      },]);
    }
  }
  
  useEffect(() => {
    getDays(0)
    return () => {
    }
  }, [])


  const prev=()=>{
    getDays(-1)
  }

  const next=()=>{
    getDays(1)
  }
  const picked=(NO)=>{
    setSelected(new Date(fecha).setDate(NO));
  }


  const [value, onChange] = useState(new Date());
  return (
        <div className="calendar-container">
          <div className="calendar">
            <div className="month">
              <i className="fi fi-rr-angle-left" onClick={prev}></i>
              <div className="date">
                <h3></h3>
                <h2></h2>
              </div>
              <i className="fi fi-rr-angle-right" onClick={next}></i>
            </div>
            <div className="weekdays">
              <div>Sun</div>
              <div>Mon</div>
              <div>Tue</div>
              <div>Wed</div>
              <div>Thu</div>
              <div>Fri</div>
              <div>Sat</div>
            </div>
            <div className="days">
              {
                dates.filter(prev => prev.which==="prev").map(item => <div className='prev-date' key={new Date(fecha).setDate(item.no)}> {item.no} </div>)
              }
              {
                dates.filter(prev => prev.which==="" || prev.which==="today").map((item) =>{
                  if(item.which==="today")
                  return (<div className='today' onClick={()=>picked(item.no)}  key={new Date(fecha).setDate(item.no)} >{item.no}</div>)
                  else
                  return (<div onClick={()=>picked(item.no)} key={new Date(fecha).setDate(item.no)} >{item.no}</div>);
                })
                  
              }
              {
                dates.filter(prev => prev.which==="next").map(item=> <div className='next-date' key={new Date(fecha).setDate(item.no)}>{item.no}</div>)
              }
            </div>
          </div>
          <div className='schedule'>
              <div className='current-day'>
              <h3>
              {
                new Date(selected).toDateString()
              }
              </h3>
              </div>
              <div className='schedule-content'>
              <div className='actividades-box'>
                   <div className='hora'> <p>5:00am</p> </div>
                    <div className='actividades'>
                    </div>
                  </div>
                  <div className='actividades-box'>
                   <div className='hora'> <p>6:00am</p> </div>
                    <div className='actividades color'>
                       <p> Desayunar con mis padres</p>
                    </div>
                  </div>
                  <div className='actividades-box'>
                   <div className='hora'> <p>7:00am</p> </div>
                    <div className='actividades'>
                    </div>
                  </div>
                  <div className='actividades-box'>
                   <div className='hora'> <p>8:00am</p> </div>
                    <div className='actividades'>
                    </div>
                  </div>
                  <div className='actividades-box'>
                   <div className='hora'> <p>9:00am</p> </div>
                    <div className='actividades'>
                    </div>
                  </div>
                  <div className='actividades-box'>
                   <div className='hora'> <p>10:00am</p> </div>
                    <div className='actividades'>
                    </div>
                  </div>
                  <div className='actividades-box'>
                   <div className='hora'> <p>11:00am</p> </div>
                    <div className='actividades'>
                    </div>
                  </div>
                  <div className='actividades-box'>
                   <div className='hora'> <p>12:00pm</p> </div>
                    <div className='actividades'>
                    </div>
                  </div>
                  <div className='actividades-box'>
                   <div className='hora'> <p>1:00pm</p> </div>
                    <div className='actividades'>
                    </div>
                  </div>
                  <div className='actividades-box'>
                   <div className='hora'> <p>2:00pm</p> </div>
                    <div className='actividades color'>
                      <p>Clase de Aleman</p>
                    </div>
                  </div>
                  <div className='actividades-box'>
                   <div className='hora'> <p>3:00pm</p> </div>
                    <div className='actividades'>
                    </div>
                  </div>
                  <div className='actividades-box'>
                   <div className='hora'> <p>4:00pm</p> </div>
                    <div className='actividades'>
                    </div>
                  </div>
              </div>
          </div>
        </div>
  )
}
