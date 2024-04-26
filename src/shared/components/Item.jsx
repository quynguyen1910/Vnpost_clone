import React from "react";

const Item = ({ icon,iconStyle ="w-12 h-12" , content, style }) => {
  return (
    <div className="flex flex-col items-center gap-y-1">
      <img className={iconStyle} src={icon} alt="" />
      <span className={style}>{content}</span>
    </div>
  );
};

export default Item;
