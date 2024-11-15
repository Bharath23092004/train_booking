import React, { useState } from 'react'
import { FaAngleDoubleDown } from "react-icons/fa";
import './Tab.css'
export default function SeatSelection() {
    const [name, setName] = useState([])
    const [arrowDown, setArrowDown] = useState(false)
    const [gender, setGender] = useState([])
    const [reservedSeat, setReservedSeat] = useState(["1A", "2A", "2B", "3B", "4A", "5C", "6A", "7B", "7C", '8B', "9B", "9C"])
    const [seatNumber, setSeatnumber] = useState([])
    // const [passengers, setPassengers] = useState([])
    // useEffect(()=>{
    //     let bId = localStorage.getItem('selectedBusId')
    //     if(bId){
    //         getSeatArray(bId)            
    //     }
    //     else return
    // },[localStorage])
    // const getSeatArray = async bId => {
    //     const baseURL = "http://localhost:8080/booking/"
    //     await axios.get(baseURL, bId)
    //     .this(response=>response.data)
    //     .this(data=>{
    //         setReservedSeat(data)
    //         console.log(reservedSeat)
    //     })
    // }
    const getSeatNumber = (e) => {
        renderPassengerData(seatNumber)
        let newSeat = e.target.value
        if (reservedSeat.includes(newSeat)) {
            e.disabled = true
            if (seatNumber.includes(newSeat)) {
                setSeatnumber(seatNumber.filter(seat => seat !== newSeat))
            }
        } else {
            setSeatnumber([...seatNumber, newSeat])
            setReservedSeat([...reservedSeat, newSeat])
            console.log(seatNumber)
        }
    }
    const handleGender = (e, seatNo) => {
        const { value } = e.target
        setGender(gender.concat(value))
        // console.log(value)
        // setPassengers(prevState => ({ ...prevState, SeatNo: seatNo, Gender: value }))
    }
    const handlePassengerName = (e, seatNo) => {
        e.preventDefault()
        let value = e.target.value
        // console.log(value)
        if (!value) {
            return (setName("name is required"))
        } else {
            setName(name.concat(value))
            // setPassengers(prevState => ({ ...prevState, SeatNo: seatNo, Name: value }))
        }
    }
    const handleSubmitDetails = e => {
        e.preventDefault()
        setArrowDown(true)
        localStorage.setItem("reservedSeats", JSON.stringify(seatNumber))
        localStorage.setItem("nameData", JSON.stringify(name))
        console.log(name)
        console.log(gender)
    }

    const renderPassengerData = (seatArray) => {
        return seatArray.map((seat, idx) => {
            return (
                <form key={idx} className="form seatfrm">
                    <p class="text-capitalize text-center">Seat No:{seat}</p>
                    <input className="form-control seatInp" onBlur={e => handlePassengerName(e, seat)} type="text" name="passenger-name" placeholder="Enter Name" />
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gender" id="male" value="Male" onClick={e => handleGender(e, seat)} />
                        <label class="form-check-label" for="male">Male</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gender" id="female" value="Female" onClick={e => handleGender(e, seat)} />
                        <label class="form-check-label" htmlFor="female">Female</label>
                    </div>
                </form>)

        })
    }
    return (
        <div className="ss">
            <div className="row">
                <div className="column1">
                    <div className="plane">
                        <form onChange={e => getSeatNumber(e)}>
                            <ol className="cabin fuselage">
                                <li className="row row--1">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" value="1L" id="1L" />
                                            <label htmlFor="1L">1L</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" id="2M" value="2M" />
                                            <label htmlFor="2M">2M</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="3U" id="3U" />
                                            <label htmlFor="3U">3U</label>
                                            </li>
                                        <li className="seat">
                                            <input type="checkbox" id="31SL" value="31SL" />
                                            <label htmlFor="31SL">31SL</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="32SU" id="32SU" />
                                            <label htmlFor="32SU">32SU</label>
                                        </li>
                                    </ol>
                                </li>
                                <li className="row row--2">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" disabled value="4L" id="4L" />
                                            <label htmlFor="4L">4L</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="5M" id="5M" />
                                            <label htmlFor="5M">5M</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="6U" id="6U" />
                                            <label htmlFor="6U">6U</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="2B" id="2B" />
                                            <label htmlFor="2B">33SL</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="34SU" id="34SU" />
                                            <label htmlFor="34SU">34SU</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--3">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" value="7L" id="7L" />
                                            <label htmlFor="7L">7L</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="8M" id="8M" />
                                            <label htmlFor="8M">8M</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="9U" id="9U" />
                                            <label htmlFor="9U">9U</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="35SL" id="35SL" />
                                            <label htmlFor="35SL">35SL</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="36SU" id="36SU" />
                                            <label htmlFor="36SU">36SU</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--4">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" disabled value="10L" id="10L" />
                                            <label htmlFor="10L">10L</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="11M" id="11M" />
                                            <label htmlFor="11M">11M</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="12U" id="12U" />
                                            <label htmlFor="12U">12U</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="37SL" id="37SL" />
                                            <label htmlFor="37SL">37SL</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="38SU" id="38SU" />
                                            <label htmlFor="38SU">38SU</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--5">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" value="13L" id="13L" />
                                            <label htmlFor="13L">13L</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="14M" id="14M" />
                                            <label htmlFor="14M">14M</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="15U" id="15U" />
                                            <label htmlFor="15U">15U</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="39SL" id="39SL" />
                                            <label htmlFor="39SL">39SL</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="40SU" id="40SU" />
                                            <label htmlFor="40SU">40SU</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--6">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" disabled value="16L" id="16L" />
                                            <label htmlFor="16L">16L</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="17M" id="17M" />
                                            <label htmlFor="17M">17M</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="18U" id="18U" />
                                            <label htmlFor="18U">18U</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="41SL" id="41SL" />
                                            <label htmlFor="41SL">41SL</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="42SU" id="42SU" />
                                            <label htmlFor="42SU">42SU</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--7">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" value="19L" id="19L" />
                                            <label htmlFor="19L">19L</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="20M" id="20M" />
                                            <label htmlFor="20M">20M</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="21U" id="21U" />
                                            <label htmlFor="21U">21U</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="43SL" id="43SL" />
                                            <label htmlFor="43SL">43SL</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="4SU" id="44SU" />
                                            <label htmlFor="44SU">44SU</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--8">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" value="22L" id="22L" />
                                            <label htmlFor="22L">22L</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="23M" id="23M" />
                                            <label htmlFor="23M">23M</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="24U" id="24U" />
                                            <label htmlFor="24U">24U</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="45SL" id="45SL" />
                                            <label htmlFor="45SL">45SL</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="46SU" id="46SU" />
                                            <label htmlFor="46SU">46SU</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--9">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" value="25L" id="25L" />
                                            <label htmlFor="25L">25L</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="26M" id="26M" />
                                            <label htmlFor="26M">26M</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="27U" id="27U" />
                                            <label htmlFor="27U">27U</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="47SL" id="47SL" />
                                            <label htmlFor="47SL">47SL</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="48SU" id="48SU" />
                                            <label htmlFor="48SU">48SU</label>
                                        </li>

                                    </ol>
                                </li>
                                <li className="row row--10">
                                    <ol className="seats" type="A">
                                        <li className="seat">
                                            <input type="checkbox" value="28L" id="28L" />
                                            <label htmlFor="28L">28L</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="29M" id="29M" />
                                            <label htmlFor="29M">29M</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="30U" id="30U" />
                                            <label htmlFor="30U">30U</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" value="49SL" id="49SL" />
                                            <label htmlFor="49SL">49SL</label>
                                        </li>
                                        <li className="seat">
                                            <input type="checkbox" disabled value="50SU" id="50SU" />
                                            <label htmlFor="50SU">50SU</label>
                                        </li>
                                    </ol>
                                </li>
                
                            </ol>
                        </form>
                    </div>
                </div>
                <div className="column2">
                    <div className="seatInfo">
                        <form className="form-group">
                            {renderPassengerData(seatNumber)}
                        </form>
                        <div>
                            <button onClick={e => handleSubmitDetails(e)} className="btn btn-info seatBT">
                                Confirm Details
                            </button>
                        </div>
                        <div className={arrowDown ? "activeArrow2" : "nonActive"}>
                            <FaAngleDoubleDown />
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}
