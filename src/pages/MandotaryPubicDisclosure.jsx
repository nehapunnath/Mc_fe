import React from "react";
import { FaInfoCircle } from "react-icons/fa";

const MandatoryPublicDisclosure = () => {
  const documents = [
    { icon: "fas fa-file-contract", title: "Affiliation Letter", link: "#" },
    { icon: "fas fa-file-signature", title: "Trust Deed", link: "#" },
    { icon: "fas fa-certificate", title: "No Objection Certificate", link: "#" },
    { icon: "fas fa-award", title: "Recognition Certificate", link: "#" },
    { icon: "fas fa-shield-alt", title: "Building Safety Certificate", link: "#" },
    { icon: "fas fa-fire-extinguisher", title: "Fire Safety Certificate", link: "#" },
    { icon: "fas fa-tint", title: "Water, Health & Sanitation Certificates", link: "#" },
    { icon: "fas fa-landmark", title: "Land Certificates", link: "#" },
    { icon: "fas fa-file-upload", title: "Self-Declaration", link: "#" }
  ];

  return (
    <div className="w-full bg-[#ebd8b4]">
      {/* Banner Section */}
      <div className="relative bg-[#541212] py-20 md:py-28">
        <div className="absolute inset-0 opacity-10 "></div>
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <div className="flex justify-center mb-4">
            <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
              <FaInfoCircle className="text-3xl" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Mandatory Public Disclosure</h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
            Accessible Information for Stakeholders: Our Commitment to Openness
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        {/* Section A */}
        <div className=" rounded-md  p-6 mb-12 border border-[#8B0000]">
          <h2 className="text-xl font-bold text-[#8B0000] mb-6 border-b-2 border-[#8B0000] pb-2">
            A. General Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <p className="font-semibold">1. Name Of The School:</p>
                <p>Mount Carmel School</p>
              </div>
              <div>
                <p className="font-semibold">2. Affiliation No.:</p>
                <p>831084</p>
              </div>
              <div>
                <p className="font-semibold">3. School Code:</p>
                <p>46713</p>
              </div>
              <div>
                <p className="font-semibold">4. Address With Pincode:</p>
                <p>No. 58, Palace Road, Vasanthnagar, Bengaluru – 560052</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="font-semibold">5. Principal Name:</p>
                <p>Sr. Annette</p>
              </div>
              <div>
                <p className="font-semibold">6. Qualification:</p>
                <p>M. A., B. Ed</p>
              </div>
              <div>
                <p className="font-semibold">7. School E-Mail ID:</p>
                <p>mountcarmel@gmail.com</p>
              </div>
              <div>
                <p className="font-semibold">8. Contact Details:</p>
                <p>987654321</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section B */}
        <div>
          <h2 className="text-xl font-bold text-[#8B0000] mb-8 border-b-2 border-[#8B0000] pb-2">
            B. Documents & Information
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="border-2 border-[#8B0000] bg-[#f0d6b4] rounded-md flex flex-col items-center p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-[#8B0000] mb-4 text-4xl">
                  <i className={doc.icon}></i>
                </div>
                <h3 className="text-lg font-semibold text-center mb-4 text-black">
                  {doc.title}
                </h3>
                <a
                  href={doc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#8B0000] hover:bg-[#600000] text-white text-sm font-semibold px-5 py-2 rounded-full flex items-center"
                >
                  View Details
                  <i className="fas fa-chevron-right text-xs ml-2"></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MandatoryPublicDisclosure;