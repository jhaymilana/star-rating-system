import { useState } from 'react';
import { FaStar } from "react-icons/fa";

function Star() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating">
      <div className='flex'>
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= ((rating && hover) || hover) ? "on" : "off"}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
              onDoubleClick={() => {
                setRating(0);
                setHover(0);
                }}
            >
              <FaStar size={50}/>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Star