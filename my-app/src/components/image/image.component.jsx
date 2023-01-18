import './images.styles.sass';

const Images = () => {
  let imageElements = [];
  for (let i = 0; i < 5; i++) {
    imageElements.push(<img key={i} src='./assets/${i+1}.jpg' alt="" ></img>);
  }
  return (
    <div>
      {imageElements}
    </div>
  );
};

export default Images;