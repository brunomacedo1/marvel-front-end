import React from 'react';
import './Characters.css';

const characterCard = ({data, }) => {

  const href = data.name.replace(' ', '-').replace(' ', '-').toLowerCase()

  const onClick = (event) =>{
    
    if (event.metaKey || event.ctrlKey){
      return;
    }

    event.preventDefault();
    window.history.pushState({}, '', href);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return(
    <a href={href} onClick={onClick}>
      <div className="card">
        <img src={data.imagePath} alt=""/>
      </div>
    </a>
  )
}

export default characterCard;