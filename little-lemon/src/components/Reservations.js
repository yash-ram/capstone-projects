import React, {useState} from 'react';
const Reservations = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [diners, setDiners] = useState(1);

    const handleSubmit = (event) => {
        event.preventDefault();

        alert(`Reservation Confirmed!\nName: ${name}\nEmail: ${email}\nDate: ${date}\nTime: ${time}\nGuests: ${diners}`);

        setName('');
        setEmail('');
        setDate('');
        setTime('');
        setDiners(1);
    };

    return (
        <div className="reservations-container">
        <h1>Reservation a table</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Name:</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} required/>
            </div>

            <div className="form-group">
                <label>Email:</label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
            </div>

            <div className="form-group">
                <label>Date:</label>
                <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} required/>
            </div>

            <div className="form-group">
                <label>Time:</label>
                <input type="time" value={time} onChange={(e)=>setTime(e.target.value)} required/>
            </div>

            <div className="form-group">
                <label>Number of Diners:</label>
                <input type="number" value={diners} onChange={(e)=>setDiners(e.target.value)} min="1" required/>
            </div>

            <button tpe="submit">Reserve table</button>
        </form>
        </div>
    )
}

export default Reservations;