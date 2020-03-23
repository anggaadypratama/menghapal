import React from "react";

export const Tombol = props => {
  const {
    style,
    judul,
    color,
    disabled = false,
    click = "",
    type = "submit",
    margin = "mt-0"
  } = props;
  return (
    <div>
      <input
        type={type}
        id="submit"
        style={{ backgroundColor: style, color: color }}
        className={`${margin} btn rounded-pill btn-block`}
        defaultValue={judul}
        disabled={disabled}
        onClick={click}

      />
    </div>
  );
};
