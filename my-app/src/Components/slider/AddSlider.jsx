import axios from "axios";
import React, { useState, useEffect } from "react";

const SliderForm = () => {
  const [image, setImage] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const adminStatus = localStorage.getItem("isAdmin");
    setIsAdmin(adminStatus === "true");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) return alert("Please select an image.");

    const formData = new FormData();
    formData.append("image", image);

    const token = localStorage.getItem("token");

    try {
      const res = await axios.post(
        "http://localhost:8981/slider/add",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Slider added successfully!");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Error uploading slider");
    }
  };

  if (!isAdmin) {
    return <p style={{ color: "red", textAlign: "center" }}>Access Denied</p>;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Add Slider</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />
        <button type="submit" style={{ marginLeft: "10px" }}>
          Add Slider
        </button>
      </form>
    </div>
  );
};

export default SliderForm;