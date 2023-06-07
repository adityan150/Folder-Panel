import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import "./file.css";

export default function File({ explorer }) {
  function handleDoubleClick(e) {
    e.stopPropagation();
    console.log(e.target.innerText);
  }
  return (
    <div
      className="file"
      onClick={(e) => e.stopPropagation()}
      onDoubleClick={handleDoubleClick}
    >
      <FontAwesomeIcon className="fileIcon" icon={faFile} />{" "}
      <span className="title">{explorer.name}</span>
    </div>
  );
}
