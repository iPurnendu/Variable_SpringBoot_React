import React from "react";
// import { Footer } from "../components";

const AboutPage = () => {
  const contacts = [
    {
      name: "Purnendu Bhattacharjee",
      image:
        "https://i.postimg.cc/3Rn1K90Q/251a67c6-18f4-4935-ae3e-42d46c83956a.jpg",
      socialMedia: {
        linkedin: "https://www.linkedin.com/in/purnendubhattacharjee/",
      },
    },
    {
      name: "Yogesh Patel",
      image:
        "https://i.postimg.cc/cLSFBKSj/49d8ed9c-b936-4c1d-bf96-4fd2d3775226.jpg",
      socialMedia: {
        linkedin: "https://www.linkedin.com/in/yogesh-patel-8b426b229/",
      },
    },
    {
      name: "Shouvik Dey",
      image: "https://i.postimg.cc/rpL6V5wn/230940320107-Shouvik-Dey-KH.jpg",
      socialMedia: {
        linkedin: "https://www.linkedin.com/in/shouvik-dey-91841122a/",
      },
    },
    {
      name: "Aniket Tawade",
      image: "https://i.postimg.cc/PxgWfcfc/DSC-0087-1.jpg",
      socialMedia: {
        linkedin: "https://www.linkedin.com/in/aniket-tawade-2007b521b/",
      },
    },
    {
      name: "Anshul Massey",
      image:
        "https://i.postimg.cc/RZSc0w9M/f65a7a70-b8cf-4069-b66c-bc11840446af.jpg",
      socialMedia: {
        linkedin:
          "https://www.linkedin.com/in/anshul-d-massey-898747239?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B4w9KQW%2BjQg24F1Tfbi3lCQ%3D%3D",
      },
    },
  ];

  return (
    <div
      className="contact-page"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        marginBottom: "50px",
      }}
    >
      <div
        className="aboutRamble"
        style={{
          fontFamily: "Space Mono",
          textAlign: "center",
          maxWidth: "800px",
          margin: "50px auto",
        }}
      >
        <div className="col-12">
          <h2 className="display-5 text-center">About</h2>
          <hr />
        </div>
        <p style={{ fontSize: "18px", fontFamily: "Space Mono" }}>
          Welcome to Variable, your tech haven for bespoke electronics! Dive
          into our e-commerce realm, a haven for enthusiasts seeking tailor-made
          computers and smartphones. Empowering your journey is our
          state-of-the-art chatbot, meticulously designed to navigate the
          intricacies of PC customization. Harness the power of RazerPay for
          seamless, tech-driven transactions, ensuring swift and secure
          payments. At Variable, we transcend traditional limits, bringing
          innovation to the forefront of your shopping experience. Immerse
          yourself in the future of electronics, where cutting-edge technology
          meets personalized craftsmanship. Unleash your tech desires with
          Variable—a realm where every click unlocks a world of limitless
          possibilities.
        </p>
      </div>
      <h1
        style={{
          textAlign: "center",
          marginTop: "-40px",
          width: "100%",
          fontSize: "28px",
          fontWeight: "bold",
        }}
      >
        Team Variable
      </h1>
      {contacts.map((contact, index) => (
        <div
          key={index}
          className="contact-card"
          style={{
            flex: "0 0 30%",
            margin: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={contact.image}
            alt={contact.name}
            style={{
              width: "100%",
              height: "200px",
              maxWidth: "200px",
              objectFit: "cover",
            }}
          />
          <h2 style={{ textAlign: "center", margin: "10px 0 5px 0" }}>
            {contact.name}
          </h2>
          <div
            className="social-media-links"
            style={{
              textAlign: "center",
              marginTop: "5px",
              marginBottom: "10px",
            }}
          >
            {contact.socialMedia.linkedin && (
              <a
                href={contact.socialMedia.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "grey",
                  transition: "color 0.3s ease",
                  cursor: "pointer",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutPage;
