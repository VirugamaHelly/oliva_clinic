import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Services.css';

const OtherServices = () => {
  const [services, setServices] = useState([]);
  const [serviceName, setServiceName] = useState("");
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
      const newService = { serviceName };
      await axios.post('http://localhost:8981/services/add', newService, authHeader);
      setServiceName("");
      setSuccessMessage("✓ Service added successfully!");
      const response = await axios.get('http://localhost:8981/services');
      setServices(response.data);
    } catch (error) {
      console.error("Error adding service:", error);
    }
  };

  const handleEditService = async () => {
    try {
      const updatedService = { serviceName };
      await axios.put(`http://localhost:8981/services/edit/${editServiceId}`, updatedService, authHeader);
      setEditServiceId(null);
      setServiceName("");
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
    setServiceName(service.serviceName);
    setEditServiceId(service._id);
  };

  return (
    <div className="container">
      {isAdmin && (
        <div className="form-container">
          <h2>{editServiceId ? 'Edit Service' : 'Add Service'}</h2>
          <input
            type="text"
            placeholder="Service Name"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
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
          <h1>Other Services</h1>
          {services.map((service) => (
            <div key={service._id} className="service-item">
              {service.serviceName && (
                <p>&#10003; {service.serviceName}</p>
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

export default OtherServices;