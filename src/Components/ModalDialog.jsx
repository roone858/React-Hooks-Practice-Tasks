import { useState } from "react";

export default function ModalDialog({ content }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="container">
      <button onClick={handleOpen}>Open New Dialog</button>
      {isOpen && (
        <>
          <div
            className="model"
            style={{
              border: "2px solid red",
              backgroundColor: "gray",
              height: "400px",
              width: "300px",
            }}
          >
            <div className="massages-box" style={{ height: "90%" }}>
              {content}
            </div>
            <input
              className="send-box"
              style={{
                border: "2px solid black",
                backgroundColor: "white",
                height: "10%",
                width: "100%",
              }}
            />
          </div>
        </>
      )}
    </div>
  );
}
