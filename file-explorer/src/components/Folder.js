import React, { useState } from "react";

const Folder = ({ explorerData, handleInsertNode }) => {
  let [expand, setExpand] = useState(false);
  let [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleAddFolder = (e, isFolder) => {
    e.stopPropagation();

    setShowInput({
      visible: true,
      isFolder,
    });
  };

  const handleInputBlur = () => {
    setShowInput({ ...showInput, visible: false });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.target.value) {
      handleInsertNode(explorerData.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
      setExpand(true);
    }
  };

  if (explorerData.isFolder) {
    return (
      <div style={{ margin: "0 0 10px 20px" }}>
        <div
          style={{
            width: "500px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "lightgray",
            padding: "5px",
            marginBottom: "5px",
          }}
        >
          <span onClick={() => setExpand(!expand)}>📂 {explorerData.name}</span>
          <div>
            <button
              onClick={(e) => handleAddFolder(e, true)}
              style={{ marginRight: "20px" }}
            >
              Add 📂
            </button>
            <button onClick={(e) => handleAddFolder(e, false)}>Add 🗃️</button>
          </div>
        </div>
        {showInput.visible && (
          <div style={{ margin: "0 0 10px 20px" }}>
            <span>{showInput.isFolder ? "📂" : "🗃️"}</span>
            <input
              autoFocus
              type="text"
              onBlur={handleInputBlur}
              onKeyDown={handleKeyDown}
            ></input>
          </div>
        )}
        {expand &&
          explorerData.items.map((item) => {
            return (
              <Folder
                key={item.id}
                explorerData={item}
                handleInsertNode={handleInsertNode}
              />
            );
          })}
      </div>
    );
  } else {
    return (
      <div
        style={{
          margin: "0 0 10px 20px",
          backgroundColor: "lightgoldenrodyellow",
          padding: "5px",
          maxWidth: "500px",
        }}
      >
        <span>🗃️ {explorerData.name}</span>
      </div>
    );
  }
};

export default Folder;
