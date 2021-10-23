import * as React from "react";

const ListOfContents = ({ items }) => {
  const rec = (items) => {
    if (items != null) {
      return <ListOfContents items={items}></ListOfContents>;
    }
  };
  return (
      <ul>
        {items.map((item) => (
          <li key={item.url}>
            <a href={item.url}>{item.title}</a>
            {rec(item.items)}
          </li>
        ))}
      </ul>
  );
};

const TableOfContents = ({ items }) => {
    return(
        <div>
            <p>Table Of Contents</p>
            <ListOfContents items={items}></ListOfContents>
        </div>
    );
};

export default TableOfContents;
