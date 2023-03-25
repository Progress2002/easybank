import React from "react";

const InviteBtn = () => {
  return (
    <div>
      <button
        style={{
          background:
            "linear-gradient( to right, hsl(136, 65%, 51%), hsl(192, 70%, 51%))",
        }}
        className=" py-3 px-8 text-gray-100  rounded-full text-lg font-bold">
        Request Invite
      </button>
    </div>
  );
};

export default InviteBtn;
