import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const TreatmentDetail = () => {
  const { id } = useParams();
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    const fetchTreatment = async () => {
      try {
        const res = await axios.get(`http://localhost:8981/treatment/get/${id}`);
        setTreatment(res.data);
      } catch (err) {
        console.error("Error fetching treatment detail:", err);
      }
    };
    fetchTreatment();
  }, [id]);

  if (!treatment) return <div>Loading...</div>;

  return (
    <div className="container py-4">
      <h2 className="mb-3">{treatment.Title}</h2>
      <img
        src={`http://localhost:8981/uploads/${treatment.image}`}
        alt={treatment.Title}
        width="300"
        className="mb-3"
      />
      <h5>{treatment.Small_description}</h5>
      <p>{treatment.description}</p>
    </div>
  );
};

export default TreatmentDetail;
