import "./App.css";
import { useState } from "react";
import explorer from "./data/explorerData";
import Folder from "./components/Folder";
import useTraverseTree from "./hooks/useTraverseTree";

function App() {
  let [explorerData, setExplorerData] = useState(explorer);
  let { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const newTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(newTree);
  };

  return (
    <div className="App">
      <Folder explorerData={explorerData} handleInsertNode={handleInsertNode} />
    </div>
  );
}

export default App;

// Display files and folder in UI
// Clicking on folder should open and close the nested files/folders inside it
// Add functionality to add a folder/file inside a folder
// Add a functionality to delete a file/folder - pending
// Add a functionality to rename a file/folder - pending
