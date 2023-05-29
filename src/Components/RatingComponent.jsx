import { useState } from "react";
import iconStar from "../../images/icon-star.svg";

const RatingComponent = ({submitData}) => {
    const [active, setActive] = useState("");

  const handleChange = (e) => {
    setActive(e.target.value);
  };
  const radioButtons = () => {
    const buttons = [];
    for (let i = 1; i <= 5; i++) {
      buttons.push(
        <label key={i} className="text-white">
          <div
            className={`w-[50px] h-[50px] sm:w-20 sm:h-20 sm:text-xl cursor-pointer flex justify-center items-center rounded-full  hover:bg-gray-400 ${
              active === `${i}` ? "bg-orange-400/90" : "bg-gray-800"
            }`}
          >
            <input
              type="radio"
              name="rating"
              value={i}
              className="sr-only"
              onChange={handleChange}
            />
            {i}
          </div>
        </label>
      );
    }
    return buttons;
  };

  return (
    <div className="w-full max-w-[600px] pl-3 pr-3">
      <div className="bg-gradient-to-t from-gray-900 to-gray-800 p-8 flex flex-col rounded-3xl">
        <div className="w-16 h-16 flex justify-center items-center rounded-full bg-gray-700/30 mb-9">
          <img src={iconStar} className="w-6 h-6" />
        </div>
        <div>
          <h1 className="flex text-white text-center text-3xl font-semibold tracking-wide">
            How did we do?
          </h1>
          <p className="text-gray-400 mt-5 text-left text-lg">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </div>
        <div className="flex justify-center space-x-5 sm:space-x-8 mb-11 mt-11">
          {radioButtons()}
        </div>
        <div className="flex justify-center">
          <button className="w-full h-20 text-white text-xl font-medium rounded-full tracking-[3px] bg-orange-400/90 hover:bg-white hover:text-orange-400"
         
         onClick={() => submitData(true)}>
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default RatingComponent;
