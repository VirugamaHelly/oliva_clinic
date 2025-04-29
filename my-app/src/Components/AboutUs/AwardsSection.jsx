// AwardsSection.jsx
import React from "react";

const awards = [
    { title: "ABP NEWS", image: "https://www.olivaclinic.com/land/common/images/pic-3.png" },
    { title: "FRANCHISE INDIA", image: "https://www.olivaclinic.com/land/common/images/pic-2.png" },
    { title: "ET NOW", image: "https://www.olivaclinic.com/land/common/images/pic-3.png" },
    { title: "PRIME TIME", image: "https://www.olivaclinic.com/land/common/images/pic-5.png" },
];

const AwardsSection = ({ awards }) => {
    return (
        <section style={{ textAlign: "center", width: "80%", margin: "0 auto", paddingTop: "40px" }}>
            <h2 style={{ color: "#333", fontSize: "28px", marginBottom: "10px" }}>
                Awards and Recognitions
            </h2>
            <p style={{ color: "#666", marginBottom: "20px", fontSize: "16px" }}>
                Below are a few honors we have received for excellence in Dermatology.
            </p>

            {/* Awards Grid */}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "start", gap: "20px", paddingTop: "20px" }}>
                {awards.map((award, index) => (
                    <div key={index} style={{ textAlign: "center", minWidth: "120px", flex: "0 1 150px" }}>
                        <img src={award.image} alt={award.title} style={{ width: "90px", height: "90px", objectFit: "contain", marginBottom: "10px" }} />
                        <p style={{ fontWeight: "bold", color: "#007bff", fontSize: "15px" }}>
                            {award.title}
                        </p>
                    </div>
                ))}
            </div>

            {/* Responsive adjustments */}
            <style>
                {`
                @media (max-width: 768px) {
                    section {
                        padding: 40px 5%;
                    }
                    iframe {
                        height: 200px !important;
                    }
                }
                @media (max-width: 480px) {
                    h2 {
                        font-size: 24px !important;
                    }
                    p {
                        font-size: 14px !important;
                    }
                }
                `}
            </style>
        </section>
    );
};

export { awards };
export default AwardsSection;
