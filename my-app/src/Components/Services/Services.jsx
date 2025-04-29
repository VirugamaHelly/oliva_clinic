import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Services.css';

const Services = () => {
  const [services, setServices] = useState([]);
  const [description, setDescription] = useState("");
  const [editServiceId, setEditServiceId] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");

  const authHeader = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.role) {
      console.log("Logged-in role:", user.role);
      const normalizedRole = user.role.trim().toLowerCase();
      if (normalizedRole === "admin") {
        setIsAdmin(true);
      }
    }

    const fetchServices = async () => {
      try {
        const response = await axios.get('http://localhost:8981/services');
        setServices(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching services:", error);
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const handleAddService = async () => {
    try {
      const newService = { description };
      await axios.post('http://localhost:8981/services/add', newService, authHeader);
      setDescription("");
      setSuccessMessage("✓ Service added successfully!");
      const response = await axios.get('http://localhost:8981/services');
      setServices(response.data);
    } catch (error) {
      console.error("Error adding service:", error);
    }
  };

  const handleEditService = async () => {
    try {
      const updatedService = {  description };
      await axios.put(`http://localhost:8981/services/edit/${editServiceId}`, updatedService, authHeader);
      setEditServiceId(null);
      setDescription("");
      setSuccessMessage("✓ Service updated successfully!");
      const response = await axios.get('http://localhost:8981/services');
      setServices(response.data);
    } catch (error) {
      console.error("Error editing service:", error);
    }
  };

  const handleDeleteService = async (id) => {
    try {
      await axios.delete(`http://localhost:8981/services/delete/${id}`, authHeader);
      setSuccessMessage("✓ Service deleted successfully!");
      const response = await axios.get('http://localhost:8981/services');
      setServices(response.data);
    } catch (error) {
      console.error("Error deleting service:", error);
    }
  };

  const handleEditClick = (service) => {
    setDescription(service.description);
    setEditServiceId(service._id);
  };

  return (
    <div className="container">
      {isAdmin && (
        <div className="form-container">
          <h2>{editServiceId ? 'Edit Service' : 'Add Service'}</h2>
          <textarea
            placeholder="Service Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button onClick={editServiceId ? handleEditService : handleAddService}>
            {editServiceId ? 'Update Service' : 'Add Service'}
          </button>
        </div>
      )}

      {successMessage && (
        <p style={{ color: 'green', fontWeight: 'bold' }}>{successMessage}</p>
      )}

      {loading ? (
        <p>Loading services...</p>
      ) : (
        <div className="services-list">
          <h1>Leading chain of Skin, Hair & Body Clinic In India</h1>
          <p>We are a leading chain of medico-aesthetic clinics, revolutionizing the concept of aesthetic dermatology. Our expert Dermatologists are rigorously trained to give visible results for all your skin, hair & body concerns.</p>
          {services.map((service) => (
            <div key={service._id} className="service-item">
              {service.description && (
                <p>&#10003; {service.description}</p>
              )}
              {isAdmin && (
                <div className="action-buttons">
                  <button onClick={() => handleEditClick(service)}>Edit</button>
                  <button onClick={() => handleDeleteService(service._id)}>Delete</button>
                </div>
              )}
            </div>
          ))}

        </div>
      )}
    </div>
  );
};

export default Services;
