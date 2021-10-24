import * as React from "react";
import Collapsible from "./collapsible";
import { tree, contentLink } from "./tableOfContents.module.css";

const ListOfContents = ({ items }) => {
  const rec = (items) => {
    if (items != null) {
      return <ListOfContents items={items}></ListOfContents>;
    }
  };
  return (
    <ul className={tree}>
      {items.map((item) => (
        <li key={item.url}>
          <a href={item.url} className={contentLink}>
            {item.title}
          </a>
          {rec(item.items)}
        </li>
      ))}
    </ul>
  );
};

const TableOfContents = ({ items }) => {
  const rec = (items) => {
    if (items != null) {
      return <ListOfContents items={items}></ListOfContents>;
    }
  };
  return (
    <Collapsible title="Table of Contents" collapsed={true}>
      {rec(items)}
    </Collapsible>
  );
};

export default TableOfContents;
