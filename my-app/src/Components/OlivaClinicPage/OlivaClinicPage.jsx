import React from "react";

const OlivaClinicPage = () => {
    // Awards Data
   

    return (
        <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f1f8fb" }}>
            {/* Facilities and Treatments Section */}
            <section
                style={{
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "start",
                    padding: "60px 5%",
                    gap: "40px",
                    flexWrap: "wrap",
                }}
            >
                {/* Text Section */}
                <div style={{
                    flex: "1 1 400px",
                    minWidth: "300px",
                    maxWidth: "500px",
                }}>
                    <h2 style={{ color: "#333", fontSize: "28px", marginBottom: "20px" }}>
                        Facilities and Treatments at Oliva Clinics
                    </h2>
                    <p style={{ color: "#555", fontSize: "16px", lineHeight: "1.7" }}>
                        Oliva offers a Holistic Treatment. Check out the details on our procedure and gain
                        deeper insights into how the treatment proceeds under an expert dermatologist.
                    </p>
                </div>

                {/* Video Section */}
                <div
                    style={{
                        flex: "1 1 400px",
                        minWidth: "300px",
                        maxWidth: "500px",
                        backgroundColor: "#f0f8fa",
                        borderRadius: "10px",
                        padding: "20px",
                        boxSizing: "border-box",
                    }}
                >
                    <iframe
                        width="100%"
                        height="300"
                        src="https://www.youtube.com/embed/6S2SJPUkXkE"
                        title="Oliva Clinic Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ borderRadius: "10px", width: "100%", height: "200px" }}
                    ></iframe>
                </div>
            </section>

        </div>
    );
};

export default OlivaClinicPage;
