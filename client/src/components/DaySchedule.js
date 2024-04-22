import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import "../stylesV2/DaySchedule.css";

const DaySchedule = ({handleScheduleChange, first_name, last_name}) => {
    const [mondayHour, setMondayHour] = useState('');
    const [mondayHour2, setMondayHour2] = useState('');
    const [mondayPeriod, setMondayPeriod] = useState('');

    const [tuesdayHour, setTuesdayHour] = useState('');
    const [tuesdayHour2, setTuesdayHour2] = useState('');
    const [tuesdayPeriod, setTuesdayPeriod] = useState('');

    const [wednesdayHour, setWednesdayHour] = useState('');
    const [wednesdayHour2, setWednesdayHour2] = useState('');
    const [wednesdayPeriod, setWednesdayPeriod] = useState('');

    const [thursdayHour, setThursdayHour] = useState('');
    const [thursdayHour2, setThursdayHour2] = useState('');
    const [thursdayPeriod, setThursdayPeriod] = useState('');

    const [fridayHour, setFridayHour] = useState('');
    const [fridayHour2, setFridayHour2] = useState('');
    const [fridayPeriod, setFridayPeriod] = useState('');

    const [saturdayHour, setSaturdayHour] = useState('');
    const [saturdayHour2, setSaturdayHour2] = useState('');
    const [saturdayPeriod, setSaturdayPeriod] = useState('');

    const [sundayHour, setSundayHour] = useState('');
    const [sundayHour2, setSundayHour2] = useState('');
    const [sundayPeriod, setSundayPeriod] = useState('');

    const handleScheduleEdit = () => {
        axios.put(`http://localhost:5001/api/userdemographics/${first_name}/${last_name}`, {
            editType: 'schedule',
            updatedData: {
                monday: mondayHour && mondayHour2 && mondayPeriod ? `${mondayHour}:00 - ${mondayHour2}:00 ${mondayPeriod}` : "None",
                tuesday: tuesdayHour && tuesdayHour2 && tuesdayPeriod ? `${tuesdayHour}:00 - ${tuesdayHour2}:00 ${tuesdayPeriod}` : "None",
                wednesday: wednesdayHour && wednesdayHour2 && wednesdayPeriod ? `${wednesdayHour}:00 - ${wednesdayHour2}:00 ${wednesdayPeriod}` : "None",
                thursday: thursdayHour && thursdayHour2 && thursdayPeriod ? `${thursdayHour}:00 - ${thursdayHour2}:00 ${thursdayPeriod}` : "None",
                friday: fridayHour && fridayHour2 && fridayPeriod ? `${fridayHour}:00 - ${fridayHour2}:00 ${fridayPeriod}` : "None",
                saturday: saturdayHour && saturdayHour2 && saturdayPeriod ? `${saturdayHour}:00 - ${saturdayHour2}:00 ${saturdayPeriod}` : "None",
                sunday: sundayHour && sundayHour2 && sundayPeriod ? `${sundayHour}:00 - ${sundayHour2}:00 ${sundayPeriod}` : "None",
            }
        })
        .then(() => {
            console.log("Schedule updated successfully");
            axios.get(`http://localhost:5001/api/userdemographics/${first_name}/${last_name}`)
                .then(response => {
                    console.log("Updated user information:", response.data);
                    handleScheduleChange(response.data[0]);
                })
                .catch(error => {
                    console.error('Error fetching updated user information:', error);
                });
        })
            .catch(error => {
                console.error('Error updating rate:', error);
            });
    }

    return (
        <div className='schedule-form'>
            <div className="input-group2">
                <label htmlFor="monday">Monday</label>
                <div className="time-select">
                    <select
                        id="mondayHour"
                        value={mondayHour}
                        onChange={(e) => {
                            setMondayHour(e.target.value);
                        }}
                    >
                        <option value="">HH</option>
                        {Array.from({ length: 12 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>
                                {i + 1}
                            </option>
                        ))}
                    </select>
                    <span>-</span>
                    <select
                        id="mondayHour2"
                        value={mondayHour2}
                        onChange={(e) => {
                            setMondayHour2(e.target.value);
                        }}
                    >
                        <option value="">HH</option>
                        {Array.from({ length: 12 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>
                                {i + 1}
                            </option>
                        ))}
                    </select>
                    <select
                        id="mondayPeriod"
                        value={mondayPeriod}
                        onChange={(e) => {
                            setMondayPeriod(e.target.value);
                        }}
                    >
                        <option value="">AM/PM</option>
                        <option value="AM">AM</option>
                        <option value="PM">PM</option>
                    </select>
                    
                    <input
                        type="checkbox"
                        style={{marginLeft: "10px"}}
                        id="mondayNone"
                        checked={!mondayHour && !mondayHour2 && !mondayPeriod}
                        onChange={(e) => {
                            if (!mondayHour && !mondayHour2 && !mondayPeriod) {
                                setMondayHour("12");
                                setMondayHour2("12");
                                setMondayPeriod("AM");
                            } else if (mondayHour || mondayHour2 || mondayPeriod){
                                setMondayHour("");
                                setMondayHour2("");
                                setMondayPeriod("");
                            }
                        }}
                    />
                    <label htmlFor="mondayNone">None</label>
                </div>
            </div>


            <div className="input-group2">
                <label htmlFor="tuesday">Tuesday</label>
                <div className="time-select">
                    <select
                        id="tuesdayHour"
                        value={tuesdayHour}
                        onChange={(e) => {
                            setTuesdayHour(e.target.value);
                        }}
                    >
                        <option value="">HH</option>
                        {Array.from({ length: 12 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>
                                {i + 1}
                            </option>
                        ))}
                    </select>
                    <span>-</span>
                    <select
                        id="tuesdayHour2"
                        value={tuesdayHour2}
                        onChange={(e) => {
                            setTuesdayHour2(e.target.value);
                        }}
                    >
                        <option value="">HH</option>
                        {Array.from({ length: 12 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>
                                {i + 1}
                            </option>
                        ))}
                    </select>
                    <select
                        id="tuesdayPeriod"
                        value={tuesdayPeriod}
                        onChange={(e) => {
                            setTuesdayPeriod(e.target.value);
                        }}
                    >
                        <option value="">AM/PM</option>
                        <option value="AM">AM</option>
                        <option value="PM">PM</option>
                    </select>

                    <input
                        type="checkbox"
                        style={{marginLeft: "10px"}}
                        id="tuesdayNone"
                        checked={!tuesdayHour && !tuesdayHour2 && !tuesdayPeriod}
                        onChange={(e) => {
                            if (!tuesdayHour && !tuesdayHour2 && !tuesdayPeriod) {
                                setTuesdayHour("12");
                                setTuesdayHour2("12");
                                setTuesdayPeriod("AM");
                            } else if (tuesdayHour || tuesdayHour2 || tuesdayPeriod){
                                setTuesdayHour("");
                                setTuesdayHour2("");
                                setTuesdayPeriod("");
                            }
                        }}
                    />
                    <label htmlFor="tuesdayNone">None</label>
                </div>
            </div>

            <div className="input-group2">
                <label htmlFor="wednesday">Wednesday</label>
                <div className="time-select">
                    <select
                        id="wednesdayHour"
                        value={wednesdayHour}
                        onChange={(e) => {
                            setWednesdayHour(e.target.value);
                        }}
                    >
                        <option value="">HH</option>
                        {Array.from({ length: 12 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>
                                {i + 1}
                            </option>
                        ))}
                    </select>
                    <span>-</span>
                    <select
                        id="wednesdayHour2"
                        value={wednesdayHour2}
                        onChange={(e) => {
                            setWednesdayHour2(e.target.value);
                        }}
                    >
                        <option value="">HH</option>
                        {Array.from({ length: 12 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>
                                {i + 1}
                            </option>
                        ))}
                    </select>
                    <select
                        id="wednesdayPeriod"
                        value={wednesdayPeriod}
                        onChange={(e) => {
                            setWednesdayPeriod(e.target.value);
                        }}
                    >
                        <option value="">AM/PM</option>
                        <option value="AM">AM</option>
                        <option value="PM">PM</option>
                    </select>

                    <input
                        type="checkbox"
                        style={{marginLeft: "10px"}}
                        id="wednesdayNone"
                        checked={!wednesdayHour && !wednesdayHour2 && !wednesdayPeriod}
                        onChange={(e) => {
                            if (!wednesdayHour && !wednesdayHour2 && !wednesdayPeriod) {
                                setWednesdayHour("12");
                                setWednesdayHour2("12");
                                setWednesdayPeriod("AM");
                            } else if (wednesdayHour || wednesdayHour2 || wednesdayPeriod){
                                setWednesdayHour("");
                                setWednesdayHour2("");
                                setWednesdayPeriod("");
                            }
                        }}
                    />
                    <label htmlFor="wednesdayNone">None</label>
                </div>
            </div>

            <div className="input-group2">
                <label htmlFor="thursday">Thursday</label>
                <div className="time-select">
                    <select
                        id="thursdayHour"
                        value={thursdayHour}
                        onChange={(e) => {
                            setThursdayHour(e.target.value);
                        }}
                    >
                        <option value="">HH</option>
                        {Array.from({ length: 12 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>
                                {i + 1}
                            </option>
                        ))}
                    </select>
                    <span>-</span>
                    <select
                        id="thursdayHour2"
                        value={thursdayHour2}
                        onChange={(e) => {
                            setThursdayHour2(e.target.value);
                        }}
                    >
                        <option value="">HH</option>
                        {Array.from({ length: 12 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>
                                {i + 1}
                            </option>
                        ))}
                    </select>
                    <select
                        id="thursdayPeriod"
                        value={thursdayPeriod}
                        onChange={(e) => {
                            setThursdayPeriod(e.target.value);
                        }}
                    >
                        <option value="">AM/PM</option>
                        <option value="AM">AM</option>
                        <option value="PM">PM</option>
                    </select>

                    <input
                        type="checkbox"
                        style={{marginLeft: "10px"}}
                        id="thursdayNone"
                        checked={!thursdayHour && !thursdayHour2 && !thursdayPeriod}
                        onChange={(e) => {
                            if (!thursdayHour && !thursdayHour2 && !thursdayPeriod) {
                                setThursdayHour("12");
                                setThursdayHour2("12");
                                setThursdayPeriod("AM");
                            } else if (thursdayHour || thursdayHour2 || thursdayPeriod){
                                setThursdayHour("");
                                setThursdayHour2("");
                                setThursdayPeriod("");
                            }
                        }}
                    />
                    <label htmlFor="thursdayNone">None</label>
                </div>
            </div>

            <div className="input-group2">
                <label htmlFor="friday">Friday</label>
                <div className="time-select">
                    <select
                        id="fridayHour"
                        value={fridayHour}
                        onChange={(e) => {
                            setFridayHour(e.target.value);
                        }}
                    >
                        <option value="">HH</option>
                        {Array.from({ length: 12 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>
                                {i + 1}
                            </option>
                        ))}
                    </select>
                    <span>-</span>
                    <select
                        id="fridayHour2"
                        value={fridayHour2}
                        onChange={(e) => {
                            setFridayHour2(e.target.value);
                        }}
                    >
                        <option value="">HH</option>
                        {Array.from({ length: 12 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>
                                {i + 1}
                            </option>
                        ))}
                    </select>
                    <select
                        id="fridayPeriod"
                        value={fridayPeriod}
                        onChange={(e) => {
                            setFridayPeriod(e.target.value);
                        }}
                    >
                        <option value="">AM/PM</option>
                        <option value="AM">AM</option>
                        <option value="PM">PM</option>
                    </select>

                    <input
                        type="checkbox"
                        style={{marginLeft: "10px"}}
                        id="fridayNone"
                        checked={!fridayHour && !fridayHour2 && !fridayPeriod}
                        onChange={(e) => {
                            if (!fridayHour && !fridayHour2 && !fridayPeriod) {
                                setFridayHour("12");
                                setFridayHour2("12");
                                setFridayPeriod("AM");
                            } else if (fridayHour || fridayHour2 || fridayPeriod){
                                setFridayHour("");
                                setFridayHour2("");
                                setFridayPeriod("");
                            }
                        }}
                    />
                    <label htmlFor="fridayNone">None</label>
                </div>
            </div>

            <div className="input-group2">
                <label htmlFor="saturday">Saturday</label>
                <div className="time-select">
                    <select
                        id="saturdayHour"
                        value={saturdayHour}
                        onChange={(e) => {
                            setSaturdayHour(e.target.value);
                        }}
                    >
                        <option value="">HH</option>
                        {Array.from({ length: 12 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>
                                {i + 1}
                            </option>
                        ))}
                    </select>
                    <span>-</span>
                    <select
                        id="saturdayHour2"
                        value={saturdayHour2}
                        onChange={(e) => {
                            setSaturdayHour2(e.target.value);
                        }}
                    >
                        <option value="">HH</option>
                        {Array.from({ length: 12 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>
                                {i + 1}
                            </option>
                        ))}
                    </select>
                    <select
                        id="saturdayPeriod"
                        value={saturdayPeriod}
                        onChange={(e) => {
                            setSaturdayPeriod(e.target.value);
                        }}
                    >
                        <option value="">AM/PM</option>
                        <option value="AM">AM</option>
                        <option value="PM">PM</option>
                    </select>

                    <input
                        type="checkbox"
                        style={{marginLeft: "10px"}}
                        id="saturdayNone"
                        checked={!saturdayHour && !saturdayHour2 && !saturdayPeriod}
                        onChange={(e) => {
                            if (!saturdayHour && !saturdayHour2 && !saturdayPeriod) {
                                setSaturdayHour("12");
                                setSaturdayHour2("12");
                                setSaturdayPeriod("AM");
                            } else if (saturdayHour || saturdayHour2 || saturdayPeriod){
                                setSaturdayHour("");
                                setSaturdayHour2("");
                                setSaturdayPeriod("");
                            }
                        }}
                    />
                    <label htmlFor="saturdayNone">None</label>
                </div>
            </div>

            <div className="input-group2">
                <label htmlFor="sunday">Sunday</label>
                <div className="time-select">
                    <select
                        id="sundayHour"
                        value={sundayHour}
                        onChange={(e) => {
                            setSundayHour(e.target.value);
                        }}
                    >
                        <option value="">HH</option>
                        {Array.from({ length: 12 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>
                                {i + 1}
                            </option>
                        ))}
                    </select>
                    <span>-</span>
                    <select
                        id="sundayHour2"
                        value={sundayHour2}
                        onChange={(e) => {
                            setSundayHour2(e.target.value);
                        }}
                    >
                        <option value="">HH</option>
                        {Array.from({ length: 12 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>
                                {i + 1}
                            </option>
                        ))}
                    </select>
                    <select
                        id="sundayPeriod"
                        value={sundayPeriod}
                        onChange={(e) => {
                            setSundayPeriod(e.target.value);
                        }}
                    >
                        <option value="">AM/PM</option>
                        <option value="AM">AM</option>
                        <option value="PM">PM</option>
                    </select>

                    <input
                        type="checkbox"
                        style={{marginLeft: "10px"}}
                        id="sundayNone"
                        checked={!sundayHour && !sundayHour2 && !sundayPeriod}
                        onChange={(e) => {
                            if (!sundayHour && !sundayHour2 && !sundayPeriod) {
                                setSundayHour("12");
                                setSundayHour2("12");
                                setSundayPeriod("AM");
                            } else if (sundayHour || sundayHour2 || sundayPeriod){
                                setSundayHour("");
                                setSundayHour2("");
                                setSundayPeriod("");
                            }
                        }}
                    />
                    <label htmlFor="sundayNone">None</label>
                </div>
            </div>
            <Button 
                style={{marginTop: "10px"}}
                onClick={handleScheduleEdit}>
                Submit
            </Button>
        </div>
    );
};

export default DaySchedule;
