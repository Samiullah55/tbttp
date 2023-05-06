import React, { useState } from "react";
import "../styles/Formm.css";

// ...
let position1, position2;

function getLoc() {
  navigator.geolocation.getCurrentPosition(showPosition);

  function showPosition(position) {
    position1 = position.coords.latitude;
    position2 = position.coords.longitude;
    console.log(position1, position2);
  }
}

async function imageSubmit() {
  const fileInput = document.getElementById("fileInput");
  const file = fileInput.files[0];

  const { url } = await fetch("http://localhost:5000/s3Url").then((res) =>
    res.json()
  );

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": file.type,
    },
    body: file,
  });

  const imgUrl = url.split("?")[0];
  console.log(imgUrl);
  console.log(response);
  console.log("Image uploaded to S3 bucket");
}


function Form() {
  const [form, setForm] = useState({});

  const handleInputs = (e) => {
    console.log(e.target.value, e.target.name);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/demo", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
     
    });
    const data = await response.json();
    console.log(data);
    setForm({});
  };
  // setForm("");
  return (
    <div className="Form">
      <div className="testbox">
        <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
          {/* Form fields */}
          {/* ... */}
	<div className="banner">
            <h1 className="header">
              Performa for Agroforestry and Farm Forestry
            </h1>
          </div>
          <div className="item">
            <p>Location</p>
            <div className="name-item">
              <input
                className="input"
                type="text"
                name="typedLocation"
                onChange={(e) => handleInputs(e)}
                placeholder="Location"
                required
              />
            </div>
          </div>
          {/* Rest of the form code */}
          {/* ... */}
          <div className="item">
            <p>Name:</p>
            <div className="name-item">
              <input
                type="text"
                className="input"
                name="name"
                onChange={(e) => handleInputs(e)}
                placeholder="Enter name"
                required
              />
            </div>
          </div>
          <div className="item">
            <p>Email</p>
            <input
              type="email"
              className="input"
              name="email"
              onChange={(e) => handleInputs(e)}
              placeholder="email"
              required
            />
          </div>
          <div className="item">
            <p>Phone</p>
            <input
              type="text"
              name="phone"
              className="input"
              onChange={(e) => handleInputs(e)}
              placeholder="92 333000000"
              required
            />
          </div>
          <div className="item">
            <button
              style={{ marginTop: "1rem" }}
              onClick={(e) => handleInputs(e)}
              name="latitude"
            >
              Coordinates
            </button>
          </div>
          <div className="item" style={{ marginTop: "1rem" }}>
            <label>latitude:{position2}</label>
            <br />
            <input
              onChange={(e) => handleInputs(e)}
              className="input"
              name="latitude"
              placeholder="enter the above value"
            />
          </div>
          <div className="item">
            {/* <button  onClick={getLoc()}   onMouseLeave={(e)=>handleInputs(e)}>longitude</button> */}
          </div>
          <div className="item" style={{ marginTop: "1rem" }}>
            <label>longitude:{position1}</label>
            <br />
            <input
              onClick={getLoc()}
              className="input"
              onChange={(e) => handleInputs(e)}
              name="longitude"
              placeholder="enter the above value"
            />
          </div>

          <div className="item">
            <p>Aspect:</p>
            <input
              type="text"
              className="input"
              name="aspect"
              onChange={(e) => handleInputs(e)}
              placeholder="Aspect"
              required
            />
          </div>
          <div className="question">
            <p>OwnerShip:</p>
            <div className="question-answer">
              <div>
                <input
                  className="radio"
                  type="radio"
                  name="ownerShip"
                  onChange={(e) => handleInputs(e)}
                />
                <label htmlFor="radio" className="radio">
                  <span>Community</span>
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="ownerShip"
                  onChange={(e) => handleInputs(e)}
                />
                <label htmlFor="radio" className="radio">
                  <span>Individual</span>
                </label>
              </div>
            </div>
          </div>
          <div className="question">
            <p>Purpose of AF/FF:</p>
            <div className="question-answer radioopt">
              <div>
                <input
                  type="radio"
                  name="purpose"
                  onChange={(e) => handleInputs(e)}
                  id="radio_4"
                />
                <label htmlFor="radio_4" className="radio3">
                  <span>Fuel Wood</span>
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="purpose"
                  onChange={(e) => handleInputs(e)}
                  id="radio_5"
                />
                <label htmlFor="radio_5" className="radio4">
                  <span>Fodder</span>
                </label>
              </div>
              <div className="timber">
                <input
                  type="radio"
                  name="purpose"
                  onChange={(e) => handleInputs(e)}
                  id="radio_6"
                />
                <label htmlFor="radio_6" className="radio5">
                  <span>Timber</span>
                </label>
              </div>
              <div className="others">
                <label>
                  <span>Other(please specify)</span>
                </label>
                <input
                  type="text"
                  className="input1"
                  id="radio_6"
                  name="other"
                  //value={other}
                  onChange={(e) => handleInputs(e)}
                />
              </div>
              <div className="item">
                <p>Name Of Plant Provided:</p>
                <input
                  type="text"
                  className="input"
                  name="plantname"
                  onChange={(e) => handleInputs(e)}
                  placeholder="enter name of plant"
                  required
                />
              </div>
              <div className="item">
                <p>Species Of Plants Provided:</p>
                <input
                  type="text"
                  className="input"
                  name="specie"
                  placeholder="enter name of specie of plant"
                  onChange={(e) => handleInputs(e)}
                  required
                />
              </div>
              <div className="item">
                <p>Spacing:</p>
                <input
                  type="text"
                  className="input"
                  name="spacing"
                  placeholder="enter maintained spacing"
                  onChange={(e) => handleInputs(e)}
                  required
                />
              </div>
              <div className="item">
                <p>Survival Rate:</p>
                <input
                  type="text"
                  className="input"
                  name="survivalRate"
                  placeholder="enter survival rate"
                  onChange={(e) => handleInputs(e)}
                  required
                />
              </div>
              <div className="item">
                <p>Suggestions:</p>
                <input
                  type="text"
                  className="input"
                  name="suggestions"
                  placeholder="Any suggestions"
                  onChange={(e) => handleInputs(e)}
                  required
                />
              </div>
            </div>
          </div>
          <div className="item1">
            <p>Date of Planting:</p>
            <input
              type="date"
              name="date"
              onChange={(e) => handleInputs(e)}
              required
            />
            <i className="fas fa-calendar-alt"></i>
          </div>
          <div>
            <input
              type="file"
              className="input"
              name="picture"
              id="fileInput"
              onChange={(e) => handleInputs(e)}
            />
          </div>
          <div className="btn-block btn">
            <button type="submit" onClick={imageSubmit}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;