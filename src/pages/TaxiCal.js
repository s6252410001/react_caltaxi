/* eslint-disable jsx-a11y/alt-text */
import taxi from "../images/Aha-Soft-Travel-Taxi.256.png";
import React, { useState } from 'react'

function TaxiCal() {

    const [disTance,setDisTance] = useState(0)
    const [overtime,setOvertime] = useState(0)
    const [result,setResult] = useState(0)



    const cal = (v) =>{
        if(disTance <= 1 ){
            setResult(40 + overtime)
        }else if(disTance >1 && disTance <= 10){
            setResult(disTance*6.5+ overtime)
        }else if(disTance >10 && disTance <= 20){
            setResult(disTance*7+ overtime)
        }else if(disTance >20 && disTance <= 40){
            setResult(disTance*8+ overtime)
        }else if(disTance >40 && disTance <= 60){
            setResult(disTance*8.50+ overtime)
        }else if(disTance >60 && disTance <= 80){
            setResult(disTance*9)
        }else if(disTance > 80){
            setResult(disTance*10.5+ overtime)
        }
      }


    const setDis = (v) =>{
        v.target.value === '' ? setDisTance(0) :  setDisTance(v.target.value)
      }

      const setTime = (v) =>{
        v.target.value === '' ? setOvertime(0) :  setOvertime(v.target.value*3)
      }


  return (
    <div style={{ textAlign: "center" }}>
        
      <img height={150} style={{ top: 5 }} src={taxi} />
      <br />
      <h3>คำนวณค่าแท็กซี่</h3>
      <br />
      <center>
      <table >
        <tr>
            <td>
            ระยะทาง 
            </td>
            <td>
            <input onChange={setDis} type="number" />
            </td>
            <td>
            กิโลเมตร
            </td>
        </tr>
        <tr>
            <td>
            ระยะเวลารถติด
            </td>
            <td>
            <input onChange={setTime} type="number" />
            </td>
            <td>
            นาที
            </td>
        </tr>
      </table>
      </center>
      <br/>
      <button onClick={cal} >คำนวณ</button>
      <h4>ค่าแท็กซี่เป็นเงิน &nbsp; <span className="foot1">{result}</span> &nbsp; บาท</h4>
    </div>
  );
}

export default TaxiCal;
