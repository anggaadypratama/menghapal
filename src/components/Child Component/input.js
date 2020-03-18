import React from "react";

export const InputLess = props => {
  const { setText, judul } = props;
  return (
    <div className="mt-4 form-group">
      <input
        type="text"
        id="name"
        className="form-control"
        required
        onChange={e => setText(e.target.value.toLowerCase())}
      />
      <label className="form-control-placeholder" htmlFor="name">
        {judul}
      </label>
    </div>
  );
};
