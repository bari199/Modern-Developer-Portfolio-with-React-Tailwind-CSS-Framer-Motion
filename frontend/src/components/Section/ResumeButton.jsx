import React from "react";
import { FileDown } from "lucide-react";

const ResumeButton = () => {
  return (
    <a
      href="./public/ABDUL BARI.resume.pdf"     // path to your PDF
      download="ABDUL BARI.resume.pdf"
      className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl
                 hover:bg-blue-700 transition-all duration-300 shadow-md"
    >
      <FileDown size={20} />
      Download Resume
    </a>
  );
};

export default ResumeButton;
