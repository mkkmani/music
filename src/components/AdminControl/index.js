import "./index.css";
import { useState } from "react";
import Navbar from "../Navbar";
import StudentForm from "../AddStudentForm";
import { AddVideo, AddImage, AddEventImage } from "../AdminControlForms";

const AdminControl = () => {
  const name = "Admin";
  const [activeMenu, setActiveMenu] = useState(null);

  const onClickMenu = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <>
      <Navbar />
      <div className="admin-page-container">
        <div className="menu-options-container">
          <div className="menu-container">
            <button
              type="button"
              className="menu-btn"
              name="student"
              onClick={(e) => onClickMenu(e.target.name)}
            >
              Add student
            </button>
            {activeMenu === "student" && (
              <div className="active-menu-container">
                <StudentForm />
              </div>
            )}
          </div>
          <div className="menu-container">
            <button
              type="button"
              className="menu-btn"
              name="video"
              onClick={(e) => onClickMenu(e.target.name)}
            >
              Add Video
            </button>
            {activeMenu === "video" && (
              <div className="active-menu-container">
                <AddVideo />
              </div>
            )}
          </div>
          <div className="menu-container">
            <button
              type="button"
              className="menu-btn"
              name="gallery"
              onClick={(e) => onClickMenu(e.target.name)}
            >
              Add Image
            </button>
            {activeMenu === "gallery" && (
              <div className="active-menu-container">
                <AddImage />
              </div>
            )}
          </div>
          <div className="menu-container">
            <button
              type="button"
              className="menu-btn"
              name="event"
              onClick={(e) => onClickMenu(e.target.name)}
            >
              Add event images
            </button>
            {activeMenu === "event" && (
              <div className="active-menu-container">
                <AddEventImage />
              </div>
            )}
          </div>

          <div className="menu-container">
            <button
              type="button"
              className="menu-btn"
              name="admin"
              onClick={(e) => onClickMenu(e.target.name)}
            >
              Add admin
            </button>
            {activeMenu === "admin" && (
              <div className="active-menu-container">
                <p>active menu admin</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminControl;
