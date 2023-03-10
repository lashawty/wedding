import "./list.styles.sass";
import { useState } from "react";
import { gsap } from "gsap";
import pic1 from '../picture/1.jpg'
import pic2 from '../picture/2.jpg'
import pic3 from '../picture/3.jpg'
import pic4 from '../picture/4.jpg'
import pic5 from '../picture/5.jpg'
const dataArr = [
  {
    key: '1',
    title: 'test1',
    sub: 'sub1',
    content: '歡迎來到我們的婚禮，歡迎來到我們的婚禮，歡迎來到我們的婚禮，歡迎來到我們的婚禮，歡迎來到我們的婚禮，歡迎來到我們的婚禮，歡迎來到我們的婚禮，歡迎來到我們的婚禮，歡迎來到我們的婚禮，歡迎來到我們的婚禮，歡迎來到我們的婚禮，歡迎來到我們的婚禮，歡迎來到我們的婚禮，歡迎來到我們的婚禮，歡迎來到我們的婚禮，歡迎來到我們的婚禮，歡迎來到我們的婚禮，歡迎來到我們的婚禮，',
    src: pic1,
  },
  {
    key: '2',
    title: 'test2',
    sub: 'sub2',
    content: 'text2',
    src: pic2,
  },
  {
    key: '3',
    title: 'test3',
    sub: 'sub3',
    content: '歡迎來到我們的婚禮，歡迎來到我們的婚禮，歡迎來到我們的婚禮，歡迎來到我們的婚禮，歡迎來到我們的婚禮，歡迎來到我們的婚禮，歡迎來到我們的婚禮，歡迎來到我們的婚禮，歡迎來到我們的婚禮，歡迎來到我們的婚禮，歡迎來到我們的婚禮，歡迎來到我們的婚禮，歡迎來到我們的婚禮，歡迎來到我們的婚禮，歡迎來到我們的婚禮，歡迎來到我們的婚禮，歡迎來到我們的婚禮，歡迎來到我們的婚禮，歡迎來到我們的婚禮，歡迎來到我們的婚禮，歡迎來到我們的婚禮，歡迎來到我們的婚禮，歡迎來到我們的婚禮，',
    src: pic3,
  },
  {
    key: '4',
    title: 'test4',
    sub: 'sub4',
    content: 'text4',
    src: pic4,
  },
  {
    key: '5',
    title: 'test5',
    sub: 'sub5',
    content: 'text5',
    src: pic5,
  },
]

const List = ({ children }) => {
  const [activeKey, setActiveKey] = useState(null);
  const handleClick = (event, key) => {
    const list =  document.querySelector('.list')
    const currentLi = event.currentTarget
    const LiArr = list.querySelectorAll('li')
    LiArr.forEach((e) => {if (e !== currentLi) {
      e.classList.add('other-li')
    }})
    const currentContent = event.currentTarget.querySelector('.list-content')

    // 抓距離上方的距離 list的padding top
    let getListTopString = window.getComputedStyle(list).getPropertyValue('top')
    let topNumber = parseInt(getListTopString)
    let navPaddingTop = 20
    console.log(currentLi.getBoundingClientRect().y);
    let getDistanceY = currentLi.getBoundingClientRect().y - topNumber - navPaddingTop
    
    if (activeKey === key) {
      gsap.to('.other-li', { opacity: 1, delay: .8, xPercent: 0, stagger: .2});
      LiArr.forEach((e) => {e.classList.remove('other-li')})
      gsap.to(currentLi, { opacity: 1, y: 0,ease: 'power4.out', duration: 1});
      gsap.to(currentContent, {opacity:0, y: 20})
      setActiveKey(null);
    } else {
      gsap.to('.other-li', { opacity: 0, xPercent: 120, stagger: .2});
      gsap.to(currentLi, { opacity: 1, y: (getDistanceY * -1), delay: .8, ease:'power4.out', duration: 1}, );
      gsap.to(currentContent, {y: 0,delay: 1, opacity: 1})
      setActiveKey(key);
    }
  };

  return (
    <ul className="list">
      {children}
      {dataArr.map((data) => (
        <li
          key={data.key}
          onClick={(e) => handleClick(e, data.key)}
          className={activeKey === data.key ? 'active' : ''}
        >
          <div className="list-title">{data.title}</div>
          <div className="list-wrap">
            <p className="list-sub">{data.sub}</p>
            <div className="list-img">
              <img src={data.src}></img>
            </div>
          </div>
          <div className="list-content">{data.content}</div>
        </li>
      ))}
    </ul>
  );
}


export default List
