import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Treatment.css";
import { Link } from 'react-router-dom';
const token = localStorage.getItem("token");

const Treatment = () => {
  const [treatments, setTreatments] = useState([]);
  const [form, setForm] = useState({
    image: "",
    Title: "",
    Small_description: "",
    description: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetchTreatments();
    checkAdminStatus();
  }, []);

  const fetchTreatments = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:8981/treatment/get");
      setTreatments(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError("Failed to load treatments.");
      setLoading(false);
    }
  };

  const checkAdminStatus = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const normalizedRole = user?.role?.trim().toLowerCase();
    if (normalizedRole === "admin") {
      setIsAdmin(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setForm((prev) => ({ ...prev, image: e.target.files[0] }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData();
    formData.append("image", form.image);
    formData.append("Title", form.Title);
    formData.append("Small_description", form.Small_description);
    formData.append("description", form.description);

    try {
      if (editingId) {
        await axios.put(
          `http://localhost:8981/treatment/edit/${editingId}`,
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
      } else {
        await axios.post("http://localhost:8981/treatment/create", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        });
      }

      setForm({
        image: "",
        Title: "",
        Small_description: "",
      });
      setEditingId(null);
      fetchTreatments();
    } catch (err) {
      console.error(err);
      setError("Something went wrong while submitting.");
    }
  };

  const handleEdit = (treatment) => {
    setForm({
      image: "", 
      Title: treatment.Title,
      Small_description: treatment.Small_description,
      description: treatment.description,
    });
    setEditingId(treatment._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this treatment?")) {
      try {
        await axios.delete(`http://localhost:8981/treatment/delete/${id}`);
        fetchTreatments();
      } catch (err) {
        console.error(err);
        setError("Failed to delete treatment.");
      }
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Treatments</h2>

      {error && <div className="alert alert-danger">{error}</div>}

      {isAdmin && (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="mb-3">
            <input
              type="text"
              name="Title"
              placeholder="Title"
              value={form.Title}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="Small_description"
              placeholder="Small Description"
              value={form.Small_description}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <textarea
              name="description"
              placeholder="Full Description"
              value={form.description}
              onChange={handleChange}
              className="form-control"
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <input
              type="file"
              name="image"
              onChange={handleFileChange}
              className="form-control"
              accept="image/*"
              required={!editingId} // optional on edit
            />
          </div>

          <button type="submit" className="btn btn-success">
            {editingId ? "Update Treatment" : "Add Treatment"}
          </button>
        </form>
      )}

      <hr />

      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary"></div>
          <p>Loading treatments...</p>
        </div>
      ) : (
        <div className="row">
         {treatments.map((item) => (
  <div key={item._id} className="col-md-4 mb-4">
    <div className="card h-100 shadow-sm">
      <Link to={`/treatment/${item._id}`}>
        <img
          src={`http://localhost:8981/uploads/${item.image}`}
          alt={item.Title}
          className="card-img-top"
          style={{ height: "250px", objectFit: "cover" }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/default.jpg"; // Fallback image
          }}
        />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{item.Title}</h5>
        <p className="card-text">{item.Small_description}</p>

        {isAdmin && (
          <>
            <button
              className="btn btn-warning btn-sm me-2"
              onClick={() => handleEdit(item)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDelete(item._id)}
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  </div>
))}
        </div>
      )}
    </div>
  );
};

export default Treatment;
