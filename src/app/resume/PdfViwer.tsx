"use client";
import { saveAs } from "file-saver";
import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PdfViewer = ({ fileUrl }: { fileUrl: string }) => {
  const [width, setWidth] = useState(window.innerWidth * 0.65);

  const downloadPdf = () => {
    saveAs(fileUrl, "Abdelaziz Elhadry Resume.pdf");
  };

  const handleResize = () => {
    setWidth(window.innerWidth * 0.65);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Document file={fileUrl}>
        <div className="flex justify-center border-white bottom-2">
          <Page pageNumber={1} width={width} />
        </div>
      </Document>
      <div className="flex justify-center mt-4">
        <button
          onClick={downloadPdf}
          className="bg-gradient-to-r from-cyan-500 to-blue-500  px-4 py-1 rounded-md text-white hover:scale-110 duration-300 hover:from-blue-500 hover:to-cyan-500  w-28"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default PdfViewer;
