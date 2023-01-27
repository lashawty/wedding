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
  const handleSubmit = async () => {
    console.log(inputs);
  }
  const handleChange = (e, title) => {
    setInputs({...inputs, [title]: e.target.value})
  }
  return (
    <div className='form-container'>
      <div className='title-wrap'>
        <h3>Form</h3>
        <p>表單</p>
      </div>
      <div className='input-wrap'>
        {inputArr.map((data) =>(
          <div className='input-box' key={data.title}>
            <label>{data.title}</label>
            <input
              className='form-input' 
              placeholder={data.placeholder} 
              type={data.type} 
              maxLength="10"
              onChange={(e) => handleChange(e, data.title)}
            />
          </div>
        ))}
        <div
          className='input-submit'
          onClick={handleSubmit}
        >
          <p className='submit-eng'>Send</p>
          <p className='submit-chi'>送出</p>
        </div>
      </div>
    </div>
  );
}

export default Form;