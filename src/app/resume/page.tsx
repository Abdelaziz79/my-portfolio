"use client";

import { MiniFooter } from "../components/Footer/Footer";
import PdfViewer from "./PdfViwer";

const resume = "/resume.pdf";
const cv = "/cv.pdf";
const Resume = () => {
  return (
    <div className="min-h-screen">
      <PdfViewer fileUrl={resume} />
      <MiniFooter />
    </div>
  );
};

export default Resume;
