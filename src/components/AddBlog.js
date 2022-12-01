import React, { useState } from "react";
import "./AddBlog.css";

const AddBlog = () => {
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const [textarea, setTextarea] = useState("Your Feedback");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    setTextarea(event.target.value);
  };
  return (
    <>
      <div className="contain">
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <label>
              Name: 
              <input
                type="text"
                name="username"
                value={inputs.username || ""}
                onChange={handleChange}
              />
            </label>
            <br />
            <br />
            <label>
              Number:
              <input
                type="text"
                name="title"
                value={inputs.title || ""}
                onChange={handleChange}
              />
            </label>
            <br />
            <br />
            <textarea
              rows={10}
              cols={160}
              value={textarea}
              onChange={handleChange}
            />
            <input type="submit" />
            <br />
            <br />
          </form>
        </div>
      </div>
    </>
  );
};

export default AddBlog;
