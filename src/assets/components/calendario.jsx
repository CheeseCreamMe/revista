
import React, { useState } from 'react';
import '../css/calendario.css';

const EventCalendar = () => {
    const [showCalendar, setShowCalendar] = useState(false);

    const handleToggleCalendar = () => {
        setShowCalendar(!showCalendar);
    };

    return (
        <div className="container">
            <button onClick={handleToggleCalendar} className='btnPr'>
                {showCalendar ? 'Cerrar Calendario' : 'Mostrar Calendario'}
            </button>
            {showCalendar && <FullScreenCalendar />}
        </div>
    );
};

const FullScreenCalendar = () => {
    return (
        <div className="full-screen-calendar">
            <div className="full-screen-calendar">
                <div className="contaner-calendar">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th className="text-center">Domingo</th>
                                <th className="text-center">Lunes</th>
                                <th className="text-center">Martes</th>
                                <th className="text-center">Miércoles</th>
                                <th className="text-center">Jueves</th>
                                <th className="text-center">Viernes</th>
                                <th className="text-center">Sábado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-center">29</td>
                                <td className="text-center">30</td>
                                <td className="text-center">31</td>
                                <td className="text-center">
                                    1<br />
                                    <span className="event">
                                        Evento TechX
                                        <div className="event-details">Conferencia sobre avances en inteligencia artificial.</div>
                                    </span>
                                </td>
                                <td className="text-center">2</td>
                                <td className="text-center">3</td>
                                <td className="text-center">4</td>
                            </tr>
                            {/* ... (otros <tr> aquí) ... */}
                            <tr>
                                <td className="text-center">5</td>
                                <td className="text-center">6<br />
                                    <span className="event">
                                        iPhone Convention
                                        <div className="event-details">Conferencia sobre el nuevo iPhone.</div>
                                    </span></td>
                                <td className="text-center">7</td>
                                <td className="text-center">
                                    8
                                </td>
                                <td className="text-center">8</td>
                                <td className="text-center">9</td>
                                <td className="text-center">10</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default EventCalendar;



{/*xddddddd*/ }








