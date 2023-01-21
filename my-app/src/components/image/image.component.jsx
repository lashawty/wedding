import './images.styles.sass';
import pictureArr from '../picture/picture.component'
import gsap from 'gsap'
import { Observer } from "gsap/Observer";
gsap.registerPlugin(Observer);

Observer.create({
  target: window,         // can be any element (selector text is fine)
  type: "wheel,touch",    // comma-delimited list of what to listen for ("wheel,touch,scroll,pointer")
  onUp: () => goUp(),
  onDown: () => goDown()
});


const goUp = () => {
  const first = document.querySelector('.first')
  const second = document.querySelector('.second')
  const third = document.querySelector('.third')
  const fourth = document.querySelector('.fourth')
  const fifth = document.querySelector('.fifth')

  if(first) {
    first.classList.remove('first')
    first.classList.add('fifth')
  }
  
  if(second) {
    second.classList.remove('second')
    second.classList.add('first')
  }
  
  if(third) {
    third.classList.remove('third')
    third.classList.add('second')
  }
  
  if(fourth){
    fourth.classList.remove('fourth')
    fourth.classList.add('third')
  }
  
  if(fifth) {
    fifth.classList.remove('fifth')
    fifth.classList.add('fourth')
  }
}

const goDown = () => {
  const first = document.querySelector('.first')
  const second = document.querySelector('.second')
  const third = document.querySelector('.third')
  const fourth = document.querySelector('.fourth')
  const fifth = document.querySelector('.fifth')

  if(first) {
    first.classList.remove('first')
    first.classList.add('second')
  }
  
  if(second) {
    second.classList.remove('second')
    second.classList.add('third')
  }
  
  if(third) {
    third.classList.remove('third')
    third.classList.add('fourth')
  }
  
  if(fourth){
    fourth.classList.remove('fourth')
    fourth.classList.add('fifth')
  }
  
  if(fifth) {
    fifth.classList.remove('fifth')
    fifth.classList.add('first')
  }
}

const Images = () => {
  return (
    <div className='img-wrap'>
      {pictureArr.map((data)=>(
        <div className={`${data.position} img-box`} key={data.id} order={data.order}>
          <img src={data.src} alt="image" />
          <p className='text'>{data.text}</p>
        </div>
    ))}
    </div>
    
  );
};

export default Images;