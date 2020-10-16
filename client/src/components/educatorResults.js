import React from "react";

//make so that it isn't always present, but populates after "submit" with results of search

// const EducatorResults = (props) => {
//   return (
//       <li>
//         {props.articleName}
//       </li>
//   );
// };

// export default EducatorResults;

export function List ({ children }){
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}