import { Worker } from "@react-pdf-viewer/core";
// Import the main component
import { Viewer } from "@react-pdf-viewer/core";
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import pdfFile from '../styles/files/BlockChain_Survey_Paper.pdf';

const PDFViewer = () => {
  return (
    <div
    //   style={{
    //     border: '1px solid rgba(0, 0, 0, 0.3)',
    //     height: '750px',
    // }} 
    >
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer fileUrl={pdfFile} />;
      </Worker>
    </div>
  );
};

export default PDFViewer;
