import "./index.css";
import { useState } from "react";
import Cookies from "js-cookie";

const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    profile: "",
    password: "",
    passwordConfirm: "",
  });

  const [emptyData, setEmpty] = useState({
    name: null,
    mobile: null,
    email: null,
    profile: null,
    password: null,
    passwordConfirm: null,
  });

  const onChangeFormData = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onClickAddStudent = async (e) => {
    e.preventDefault();

    setEmpty((prevEmptyData) => {
      const updatedEmptyData = {
        name: formData.name === "",
        mobile: formData.mobile === "",
        email: formData.email === "",
        profile: formData.profile === "",
        password: formData.password === "",
        passwordConfirm: formData.passwordConfirm === "",
      };

      const allDetailsFilled = Object.values(updatedEmptyData).every(
        (value) => value === false
      );

      return updatedEmptyData;
    });

    const allDetailsFilled = Object.values(emptyData).every(
      (value) => value === false
    );

    if (allDetailsFilled) {
      try {
        const token = Cookies.get("jwtToken");
        const auth = `Bearer ${token}`;
        const details = {
          name: formData.name,
          mobile: formData.mobile,
          email: formData.email,
          profile: formData.profile,
          password: formData.password,
        };
        const api = "api";
        const options = {
          method: "POST",
          headers: { Authorization: auth, "Content-type": "application/json" },
          body: JSON.stringify(details),
        };
        const res = await fetch(api, options);
        const data = await res.json();
      } catch (error) {
        console.log("Data fetching error", error);
      }
    }
  };

  return (
    <div>
      <form className="admin-page-form" onSubmit={onClickAddStudent}>
        <h2>Add student</h2>
        <div className="label-input">
          <label htmlFor="student-name" className="form-label">
            Student name
          </label>
          <input
            type="text"
            id="student-name"
            name="name"
            value={formData.name}
            className="form-input"
            onChange={onChangeFormData}
          />
          {emptyData.name && <p className="req-msg">* Name required</p>}
        </div>
        <div className="label-input">
          <label htmlFor="student-mobile" className="form-label">
            Student mobile
          </label>
          <input
            type="number"
            id="student-mobile"
            name="mobile"
            value={formData.mobile}
            onChange={onChangeFormData}
            className="form-input"
          />
          {emptyData.mobile && <p className="req-msg">* Mobile required</p>}
        </div>
        <div className="label-input">
          <label htmlFor="student-email" className="form-label">
            Student email
          </label>
          <input
            type="email"
            id="student-email"
            name="email"
            value={formData.email}
            onChange={onChangeFormData}
            className="form-input"
          />
          {emptyData.email && <p className="req-msg">* Email required</p>}
        </div>
        <div className="label-input">
          <label htmlFor="student-profile" className="form-label">
            Student image
          </label>
          <input
            type="text"
            id="student-profile"
            name="profile"
            value={formData.profile}
            onChange={onChangeFormData}
            className="form-input"
          />
          {emptyData.profile && <p className="req-msg">* Profile required</p>}
        </div>
        <div className="label-input">
          <label htmlFor="student-password" className="form-label">
            Student password
          </label>
          <input
            type="password"
            id="student-password"
            name="password"
            value={formData.password}
            onChange={onChangeFormData}
            className="form-input"
          />
          {emptyData.password && <p className="req-msg">* Password required</p>}
        </div>
        <div className="label-input">
          <label htmlFor="student-password-cnf" className="form-label">
            Confirm password
          </label>
          <input
            type="text"
            id="student-password-cnf"
            name="passwordConfirm"
            value={formData.passwordConfirm}
            onChange={onChangeFormData}
            className="form-input"
          />
          {emptyData.passwordConfirm && (
            <p className="req-msg">* Confirm password can't be empty</p>
          )}
        </div>

        <button type="submit" className="admin-add-btn">
          Add student
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
