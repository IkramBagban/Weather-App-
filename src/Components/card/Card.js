import {React} from "react";
// import "../App.css";
import './Card.css'

const Card = ({city,card}) => {

  const icon = `https://openweathermap.org/img/wn/${card?.weather[0]["icon"]}@2x.png`;
  return (
  <div>
      <section className="ajax-section">
        <div className="container">
          <ul className="cities">
            <li className="city">
              <h2 className="city-name" data-name="{name},{sys.country}">
                {/* <span>{'props.data.name'}</span> */}
                {/* <sup>{'props.data.sys.country'}</sup> */}
                <span>{city}</span>
                <sup>{card?.sys?.country}</sup>
              </h2>
              <div className="city-temp">
              {(card?.main?.temp)}<sup>°C</sup>
              </div>
              <figure>
                <img className="city-icon" src={icon} alt={card?.weather[0]["main"]}/>
                <figcaption>{card?.weather[0]["description"]}</figcaption>
              </figure>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Card;
