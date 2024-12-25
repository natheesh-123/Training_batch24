
import React, { useState } from "react";

const FormValComp = () => {
  let course = ["react", "java", "angular", "python"];
  const [user, setUser] = useState({
    fname: "",
    term: false,
    email: "",
    contact: "",
    course: ""
  });

  const changeInput = (event) => {
    const { type, name, value, checked } = event.target;
    setUser({ ...user, [name]: type === "checkbox" ? checked : value });
  };

  const checkData = (event) => {
    event.preventDefault();

    if (user.fname.trim() === "") {
      window.alert("Enter your name.");
      return false;
    }
    if (!user.fname.trim().match(/^[a-zA-Z\s]{3,20}$/)) {
      window.alert("fname must contain only character min-3 max-20");
      return false;
    }


    if (user.email.trim() === "") {
      window.alert("Enter your email.");
      return false;
    }
    if (!user.email.trim().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      window.alert("Enter a valid email address.");
      return false;
    }

    if (user.contact.trim() === "") {
      window.alert("Enter your contact number.");
      return false;
    }
    if (!user.contact.trim().match(/^[7-9][0-9]{9}$/)) {
      window.alert("Enter a valid 10-digit contact number starting with 7, 8, or 9.");
      return false;
    }


    if (!user.term) {
      window.alert("You must accept the terms and conditions.");
      return false;
    }

    if (course.course === "") {
      window.alert("you must select one course");
      return false;
    }


    window.alert(JSON.stringify(user));
  };

  return (
    <div>
      <h2>This is Form Validation component </h2>
      <form onSubmit={checkData}>
        <div>
          <label for="fname">Enter your first name:</label>
          <input type="text" id="fname" name="fname" onChange={changeInput} value={user.fname}
          />
        </div>
        <div>
          <label for="email">Enter your email:</label>
          <input type="text" id="email" name="email" onChange={changeInput} value={user.email}
          />
        </div>

        <div>
          <label for="contact">Enter your contact:</label>
          <input
            type="text" id="contact" name="contact" onChange={changeInput} value={user.contact}
          />
        </div>

        <div>
          <select name="course" onChange={changeInput}>
            <option value="">select your course </option>
            {
              course.map((val, index) => {
                return <option value={val} key={index}>{val}</option>
              })
            }

          </select>

        </div>
        <div>
          <input
            type="checkbox" id="term" name="term" onChange={changeInput} checked={user.term} />
          <label for="term"> Accept the terms and conditions.</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormValComp;
