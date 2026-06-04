import React from "react";

const TestimonialCard = ({ customerName, subject, content }) => {
  return (
    <div className="bg-white p-7 rounded">
      <h1 className="font-quicksand font-bold text-2xl">{customerName}</h1>
      <h1 className="pb-6 font-quicksand font-semibold text-gray-700">
        {subject}
      </h1>
      <hr className="opacity-30" />
      <p className="font-quicksand font-semibold text-gray-600 py-5">
        "{content}"
      </p>
    </div>
  );
};

export default TestimonialCard;
