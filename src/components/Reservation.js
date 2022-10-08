import { useState } from "react"
import Msj from "./Msj"
import Modal from '../components/Modal'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons" 
import React from 'react'

const Reservation = () => {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');

  const [msj, setMsj] = useState('');
  const [modal, setModal] = useState(false);
  const [animationModal, setAnimationModal] = useState(false);

  const [client, setClient] = useState({});
  
  const handleReserve = (e) => {
    e.preventDefault();
    if([amount, date, hour].includes('')) {
      setMsj('Todos los campos son obligatorios')

      setTimeout(() => {
        setMsj('');
      }, 5000)

      return;
    }
    openModal();
  }

  const openModal = () => {
    setModal(true);

    setTimeout(() => {
      setAnimationModal(true);
    }, 500)
  }

  return (
    <article className="article-reserve">
      <div className="container-reservation">
        <div className="description-reservation">
          <h3 className="title-reservation">RESERVA CON NOSTROS</h3>
          <p className="paragraph-reservation">Reserva tu visita con tiempo. Te confirmaremos tu reserva vía email.</p>
        </div>
        <form>
          <div className="select">
            <label htmlFor="number-persons"></label>
            <select 
              name="number-persons" 
              id="number-persons"
              value={amount}
              onChange={e => setAmount(e.target.value)}
            >
              <option value="">Selecciona una cantidad</option>
              <option value="1">1 Persona</option>
              <option value="2">2 Personas</option>
              <option value="3">3 Personas</option>
              <option value="4">4 Personas</option>
              <option value="5">5 Personas</option>
              <option value="6">6 Personas</option>
            </select>
          </div>
          <div>
            <p className="paragraph-reserve">PARA EL</p>
          </div>
          <div>
            <label htmlFor="date-reservation"></label>
            <input
              type="date" 
              name="date-reservation" 
              id="date-reservation"
              value={date}
              onChange={e => setDate(e.target.value)}
            />
          </div>
          <div>
            <p className="paragraph-reserve">A LAS</p>
          </div>
          <div className="select">
            <label htmlFor="hour-reservation"></label>
            <select
              name="hour-reservation"
              id="hour-reservation"
              value={hour}
              onChange={e => setHour(e.target.value)}
            >
              <option value="">Selecciona una hora</option>
              <option value="9:00">9:00 AM</option>
              <option value="9:30">9:30 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="10:30">10:30 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="11:30">11:30 AM</option>
              <option value="12:00">12:00 PM</option>
              <option value="12:30">12:30 PM</option>
              <option value="1:00">1:00 PM</option>
              <option value="1:30">1:30 PM</option>
              <option value="2:00">2:00 PM</option>
              <option value="2:30">2:30 PM</option>
              <option value="3:00">3:00 PM</option>
              <option value="3:30">3:30 PM</option>
              <option value="4:00">4:00 PM</option>
              <option value="4:30">4:30 PM</option>
              <option value="5:00">5:00 PM</option>
              <option value="5:30">5:30 PM</option>
              <option value="6:00">6:00 PM</option>
              <option value="6:30">6:30 PM</option>
              <option value="7:00">7:00 PM</option>
              <option value="7:30">7:30 PM</option>
              <option value="8:00">8:00 PM</option>
              <option value="8:30">8:30 PM</option>
              <option value="9:00">9:00 PM</option>
            </select>
          </div>
          <div
            className="container-fullmenu" 
            type="button"
            onClick={handleReserve}
          >
            <div className="btn-fullmenu" to="/menu">
              Reservar
              <span className="arrow-fullmenu">
                <FontAwesomeIcon icon={faChevronRight} />
              </span>    
            </div>
          </div>
        </form>
        {msj && <Msj type='error'>{msj}</Msj>}
      </div>

      {modal && (
        <Modal 
          setModal={setModal}
          animationModal={animationModal} 
          setAnimationModal={setAnimationModal} 
          msj={msj}
          setMsj={setMsj}
          amount={amount}
          setAmount={setAmount}
          date={date}
          setDate={setDate}
          hour={hour}
          setHour={setHour}
          client={client}
          setClient={setClient}
        />
      )}

    </article>
  )
}

export default Reservation