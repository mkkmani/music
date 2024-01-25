import { useState } from "react";

//add video component
export const AddVideo = () => {
  const [videoName, setVideoName] = useState("");
  const [videoLink, setVideoLink] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "video-name") {
      setVideoName(value);
    } else if (name === "video-link") {
      setVideoLink(value);
    }
  };

  return (
    <div>
      <form className="admin-page-form">
        <h2>Add student</h2>
        <div className="label-input">
          <label htmlFor="video-name" className="form-label">
            Video title
          </label>
          <input
            type="text"
            id="video-name"
            name="video-name"
            value={videoName}
            className="form-input"
            onChange={handleChange}
          />
        </div>
        <div className="label-input">
          <label htmlFor="video-name" className="form-label">
            Video link
          </label>
          <input
            type="text"
            id="video-link"
            name="video-link"
            value={videoLink}
            className="form-input"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="admin-add-btn">
          Add Video
        </button>
      </form>
    </div>
  );
};

//add image component
export const AddImage = () => {
  const [imageName, setImageName] = useState("");
  const [imageLink, setImageLink] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "image-name") {
      setImageName(value);
    } else if (name === "image-link") {
      setImageLink(value);
    }
  };

  return (
    <div>
      <form className="admin-page-form">
        <h2>Add Image</h2>
        <div className="label-input">
          <label htmlFor="image-name" className="form-label">
            Image title
          </label>
          <input
            type="text"
            id="image-name"
            name="image-name"
            value={imageName}
            className="form-input"
            onChange={handleChange}
          />
        </div>
        <div className="label-input">
          <label htmlFor="video-name" className="form-label">
            Image link
          </label>
          <input
            type="text"
            id="image-link"
            name="image-link"
            value={imageLink}
            className="form-input"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="admin-add-btn">
          Add Image
        </button>
      </form>
    </div>
  );
};

//add event images
export const AddEventImage = () => {
  const [imageName, setImageName] = useState("");
  const [imageLink, setImageLink] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "image-name") {
      setImageName(value);
    } else if (name === "image-link") {
      setImageLink(value);
    }
  };

  return (
    <div>
      <form className="admin-page-form">
        <h2>Add event image</h2>
        <div className="label-input">
          <label htmlFor="image-name" className="form-label">
            Image title
          </label>
          <input
            type="text"
            id="image-name"
            name="image-name"
            value={imageName}
            className="form-input"
            onChange={handleChange}
          />
        </div>
        <div className="label-input">
          <label htmlFor="video-name" className="form-label">
            Image link
          </label>
          <input
            type="text"
            id="image-link"
            name="image-link"
            value={imageLink}
            className="form-input"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="admin-add-btn">
          Add Event Image
        </button>
      </form>
    </div>
  );
};
