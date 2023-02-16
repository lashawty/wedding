import './form.styles.sass'
import React, { useState, useEffect } from 'react';

const inputArr = [
  {
    title: 'Name',
    placeholder: '姓名',
    type: 'text',
  },
  {
    title: 'Number',
    placeholder: '人數',
    type: 'number',
  },
  {
    title: 'Children',
    placeholder: '是否攜帶兒童',
    type: 'text',
  },
  {
    title: 'Veggie',
    placeholder: '是否吃素',
    type: 'text',
  },
]

const Form =()=>{
  const [inputs, setInputs] = useState({})
  const handleSubmit = () => {
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbyjcCobCnEY4eraM2Fj30_KKsO5YUXYBe9S1E3DiXb9Z8MdpGy_e1Z43EO6uab0tDPk/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });

      formEle.reset()
      //設置cookie辨識
  }
  const handleChange = (e, title) => {
    setInputs({...inputs, [title]: e.target.value})
  }
  return (
    <div className='form-container'>
      <div className='title-wrap box'>
        <h3>Form</h3>
        <p>表單</p>
      </div>
      <form className='input-wrap'>
        {inputArr.map((data) =>(
          <div className='input-box box' key={data.title}>
            <label>{data.title}</label>
            <input
              className='form-input' 
              placeholder={data.placeholder} 
              name={data.title}
              type={data.type} 
              maxLength="10"
              onChange={(e) => handleChange(e, data.title)}
            />
          </div>
        ))}
        <div
          className='input-submit box'
          onClick={handleSubmit}
        >
          <p className='submit-eng'>Send</p>
          <p className='submit-chi'>送出</p>
        </div>
      </form>
    </div>
  );
}

export default Form;
