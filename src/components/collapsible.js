import React from "react";
import {
  collapsibleBody,
  collapseButton,
  collapseContent,
  contentShrink,
  buttonShrink,
} from "./collapsible.module.css";

var multiClass = require("classnames");

const Collapsible = ({ title, collapsed, children }) => {
  var a = document.getElementsByClassName(collapseButton);
  console.log(a.style);
  const [isCollapsed, setIsCollapsed] = React.useState(collapsed);
  return (
    <div className={collapsibleBody}>
      <button
        className={multiClass(collapseButton, isCollapsed && buttonShrink)}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? "Show" : "Hide"} {title}
      </button>
      <div
        className={multiClass(collapseContent, isCollapsed && contentShrink)}
        aria-expanded={isCollapsed}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapsible;
