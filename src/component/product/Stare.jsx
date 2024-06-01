import {  FaStar } from "react-icons/fa";

// create [1,2,3,4,5] once
const starArray = [...Array(5).keys()].map((i) => i + 1);
const colors = {
  orange: "FEA700",
  grey: "646464",
};
const Rating = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {starArray.map((_, index) => {
        return (
          <FaStar
            key={index}
            size={24}
            color={rating > index ? colors.orange : colors.grey}
          />
        );
      })}
    </div>
  );
};

export default Rating;
