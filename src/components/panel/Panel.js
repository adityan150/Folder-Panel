import { useState } from "react";
import explorer from "../../data/folderData";
import useTraverseTree from "../../hooks/useTraverseTree";
import Folder from "../folder/Folder";
import "./panel.css";

export default function Panel() {
  const [folderTree, setFolderTree] = useState(explorer);
  const insertNode = useTraverseTree();

  const handleNewFolder = (folderId, item, isFolder) => {
    const updatedTree = insertNode(folderTree, folderId, item, isFolder);
    setFolderTree(updatedTree);
  };
  return (
    <div className="panel">
      <Folder handleNewFolder={handleNewFolder} explorer={folderTree} />
    </div>
  );
}
