import { useState } from "react";
import File from "../file/File";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolder,
  faFolderOpen,
  faFile
} from "@fortawesome/free-solid-svg-icons";

import "./folder.css";

export default function Folder({ handleNewFolder, explorer }, ...props) {
  const [showItems, setShowItems] = useState(false);
  const [showInput, setShowInput] = useState({ show: false, isFolder: true });

  function toggleShowItems(e) {
    e.stopPropagation();
    setShowItems(!showItems);
  }

  function toggleInput(e, isFolder) {
    e.stopPropagation();
    if (!showItems) setShowItems(true);
    setShowInput({ show: true, isFolder: isFolder });
  }

  function addNewFolder(e, isFolder) {
    if (e.keyCode !== 13 || !e.target.value) return;
    handleNewFolder(explorer.id, e.target.value, isFolder);
    setShowInput({ ...showInput, show: false });
  }

  const folders = explorer.items.filter((item) => item.isFolder);
  const files = explorer.items.filter((item) => !item.isFolder);
  return (
    <div className="folder" onClick={toggleShowItems}>
      <span className="folderTitle">
        <span>
          {showItems ? (
            <FontAwesomeIcon icon={faFolderOpen} className="folderIcon" />
          ) : (
            <FontAwesomeIcon icon={faFolder} className="folderIcon" />
          )}{" "}
          <span className="folderName">{explorer.name}</span>
        </span>
        <span className="addButtons">
          <span className="addButton" onClick={(e) => toggleInput(e, true)}>
            + Folder
          </span>
          <span className="addButton" onClick={(e) => toggleInput(e, false)}>
            + File
          </span>
        </span>
      </span>
      <div>
        {showItems && (
          <div className="folderContents">
            {showInput.show && (
              <span className="input">
                {showInput.isFolder ? (
                  <FontAwesomeIcon icon={faFolder} className="folderIcon" />
                ) : (
                  <FontAwesomeIcon className="fileIcon" icon={faFile} />
                )}{" "}
                <input
                  autoFocus
                  type="text"
                  onBlur={(e) => setShowInput({ ...showInput, show: false })}
                  onKeyUp={(e) => addNewFolder(e, showInput.isFolder)}
                ></input>
              </span>
            )}
            {folders.map((folder) => (
              <Folder
                key={folder.id}
                handleNewFolder={handleNewFolder}
                explorer={folder}
              />
            ))}
            {files.map((file) => (
              <File key={file.id} explorer={file} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
