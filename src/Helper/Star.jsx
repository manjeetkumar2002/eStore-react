import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Star = ({ stars, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className="text-warning fs-6" />
        ) : stars >= number ? (
          <FaStarHalfAlt className="text-warning fs-6" />
        ) : (
          <AiOutlineStar className="text-warning fs-6" />
        )}
      </span>
    );
  });

  return (
    <div className="icon-style d-flex gap-2 align-items-center justify-content-start">
      {ratingStar}
      {/* <p className="mb-0 ps-3">({reviews} customer reviews)</p> */}
    </div>
  );
};

export default Star;