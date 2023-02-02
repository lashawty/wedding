import './formwrap.styles.sass'
import Form from '../form/form.component'

const FormWrap = ({ handleClick }) =>{
  return (
    <div className="form-wrap">
      <div
      className='form-button'
      onClick={handleClick}>
        <p className='show form-show'>Form</p>
        <p className='close form-close'>Close</p>
      </div>
      <Form />
    </div>
  );
}

export default FormWrap;
