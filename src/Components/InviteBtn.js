import React, { useState } from "react";

const InviteBtn = () => {
  const [isActive, setIsActive] = useState(false);

  const handleMouseEffect = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <button
        onMouseOver={handleMouseEffect}
        onMouseOut={handleMouseEffect}
        style={{
          background: isActive
            ? "linear-gradient( to right, hsl(136, 65%, 70%), hsl(192, 70%, 70%))"
            : "linear-gradient( to right, hsl(136, 65%, 51%), hsl(192, 70%, 51%))",
        }}
        className=" py-3 px-8 text-gray-100  rounded-full text-lg font-bold btn">
        Request Invite
      </button>
    </div>
  );
};

export default InviteBtn;
