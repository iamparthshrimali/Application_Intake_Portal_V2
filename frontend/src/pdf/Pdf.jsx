
import { useEffect, useRef, useState } from "react";

import { Document, Page, pdfjs } from "react-pdf";
import { PDFDocument, rgb } from "pdf-lib";
import { blobToURL } from "./utils/Utils";
import PagingControl from "./components/PagingControl";
import { AddSigDialog } from "./components/AddSigDialog";
import { BigButton } from "./components/BigButton";
import DraggableSignature from "./components/DraggableSignature";
import DraggableText from "./components/DraggableText";
import dayjs from "dayjs";
import axios from "axios";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function downloadURI(uri) {
  var link = document.createElement("a");
  console.log(uri)
  // link.download = name;
  // link.href = uri;
  // document.body.appendChild(link);
  // link.click();
  // document.body.removeChild(link);
}

function Pdf() {
  const styles = {
    container: {
      maxWidth: 900, 
      height:"100px",
      margin: "0 auto",
 
    },
    sigBlock: {
      display: "inline-block",
      border: "1px solid #000",
    },
    documentBlock: {
      maxWidth: 800,
      
      border: "1px solid #999",
      position:"absoulte",
      top:"50%"
    },
    controls: {
      maxWidth: 800,
      background:"white",
      display:"flex", 
      margin: "0 auto",
      marginTop: 8,
      zIndex:"1000"
    },
  };
  const [pdf, setPdf] = useState(null);
  function handler(pdf) {
    const pdfSrc = `data:application/pdf;base64,${pdf}`;
        // document.querySelector('#frame').src = pdfSrc;
        // document.querySelector('#frame2').src = pdfSrc;
        setPdf(pdfSrc)
    
  }
  const [autoDate, setAutoDate] = useState(true);
  const [signatureURL, setSignatureURL] = useState(null);
  const [position, setPosition] = useState(null);
  const [signatureDialogVisible, setSignatureDialogVisible] = useState(false);
  const [textInputVisible, setTextInputVisible] = useState(false);
  const [pageNum, setPageNum] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [pageDetails, setPageDetails] = useState(null);
  const documentRef = useRef(null);
 


  useEffect(()=>{
    axios.get("http://localhost:8080/retrieveFile2?username=dwarkesh@gmail.com").then((res)=>{
      handler(res.data.data);
   
    })
  },[])

  return (
    <div>
      <div style={styles.container}>
    
        {signatureDialogVisible ? (
          <AddSigDialog
            autoDate={autoDate}
            setAutoDate={setAutoDate}
            onClose={() => setSignatureDialogVisible(false)}
            onConfirm={(url) => {
              setSignatureURL(url);
              setSignatureDialogVisible(false);
            }}
          />
        ) : null}

      
      
        {pdf ? (
          <div>
            <div style={styles.controls}>
              {!signatureURL ? (
                <BigButton
                  marginRight={8}
                  title={"Add signature"}
                  onClick={() => setSignatureDialogVisible(true)}
                />
              ) : null}

              <BigButton
                marginRight={8}
                title={"Reset"}
                onClick={() => {
                
                  setSignatureDialogVisible(false);
                  setSignatureURL(null);
                  
              
                }}
              />
              {pdf ? (
                <BigButton
                  marginRight={8}
                  inverted={true}
                  title={"Download"}
                  onClick={() => {
                    downloadURI(pdf);
                  }}
                />
              ) : null}
            </div>
            <div ref={documentRef} style={styles.documentBlock}>
              {textInputVisible ? (
                <DraggableText
                  initialText={
                    textInputVisible === "date"
                      ? dayjs().format("M/d/YYYY")
                      : null
                  }
                  onCancel={() => setTextInputVisible(false)}
                  onEnd={setPosition}
                  onSet={async (text) => {
                    const { originalHeight, originalWidth } = pageDetails;
                    const scale = originalWidth / documentRef.current.clientWidth;

                    const y =
                      documentRef.current.clientHeight -
                      (position.y +
                        (12 * scale) -
                        position.offsetY -
                        documentRef.current.offsetTop);
                    const x =
                      position.x -
                      166 -
                      position.offsetX -
                      documentRef.current.offsetLeft;

                    // new XY in relation to actual document size
                    const newY =
                      (y * originalHeight) / documentRef.current.clientHeight;
                    const newX =
                      (x * originalWidth) / documentRef.current.clientWidth;

                    const pdfDoc = await PDFDocument.load(pdf);

                    const pages = pdfDoc.getPages();
                    const firstPage = pages[pageNum];

                    firstPage.drawText(text, {
                      x: newX,
                      y: newY,
                      size: 20 * scale,
                    });

                    const pdfBytes = await pdfDoc.save();
                    const blob = new Blob([new Uint8Array(pdfBytes)]);

                    const URL = await blobToURL(blob);
                    setPdf(URL);
                    setPosition(null);
                    setTextInputVisible(false);
                  }}
                />
              ) : null}
              {signatureURL ? (
                <DraggableSignature
                  url={signatureURL}
                  onCancel={() => {
                    setSignatureURL(null);
                  }}
                  onSet={async () => {
                    const { originalHeight, originalWidth } = pageDetails;
                    const scale = originalWidth / documentRef.current.clientWidth;

                    const y =
                      documentRef.current.clientHeight -
                      (position.y -
                        position.offsetY +
                        64 -
                        documentRef.current.offsetTop);
                    const x =
                      position.x -
                      160 -
                      position.offsetX -
                      documentRef.current.offsetLeft;

                    // new XY in relation to actual document size
                    const newY =
                      (y * originalHeight) / documentRef.current.clientHeight;
                    const newX =
                      (x * originalWidth) / documentRef.current.clientWidth;

                    const pdfDoc = await PDFDocument.load(pdf);

                    const pages = pdfDoc.getPages();
                    const firstPage = pages[pageNum];

                    const pngImage = await pdfDoc.embedPng(signatureURL);
                    console.log(signatureURL);
                    const pngDims = pngImage.scale( scale * .3);

                    firstPage.drawImage(pngImage, {
                      x: newX,
                      y: newY,
                      width: pngDims.width,
                      height: pngDims.height,
                    });

              

                    const pdfBytes = await pdfDoc.save();
                    const blob = new Blob([new Uint8Array(pdfBytes)]);

                    const URL = await blobToURL(blob);
                    setPdf(URL);
                    setPosition(null);
                    setSignatureURL(null);
                  }}
                  onEnd={setPosition}
                />
              ) : null}
             <Document
                file={pdf}
                onLoadSuccess={(data) => {
                  setTotalPages(data.numPages);
                }}
                style={{
                  height:"max-content"
                }}
              >
                <Page
                  pageNumber={pageNum + 1}
                  width={800}
                  
                  onLoadSuccess={(data) => {
                    setPageDetails(data);
                  }}
                  renderTextLayer={false}
                  style={{
                    height:"300px"
                  }}
                />
              </Document>
            </div>
            <PagingControl
              pageNum={pageNum}
              setPageNum={setPageNum}
              totalPages={totalPages}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Pdf;