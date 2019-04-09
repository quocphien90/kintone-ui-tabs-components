import React from 'react';
import './tabs.css'

function Tabs(props) {
  const tabNames = (
    <ul className="kuc-tabs-tab-list">
      {props.items.map((item, value) => {
        let className = "kuc-tabs-container";
        if (props.value === value) {
          className += " kuc-tabs-container-selection";
        }

        if(item.isDisabled) {
          className += " kuc-tabs-disabled";
          return (
            <li className={className} 
                key={value}>
                {item.tabName}
            </li>
           );
        } else {
          return (
            <li className={className} 
               key={value}
               onClick={() => props.onClickTabItem(value)}>
             {item.tabName}
           </li>
          );
        }  
      }
    )}
    </ul>
  );
  const tabContents = props.items.map((item, value) => {
    if (value !== props.value) return undefined;
    else {
      return (
        <div className="kuc-tabs-tab-contents" key={value}>
          <div>{item.tabContent}</div>
        </div>
      );
    }
  });
  return (
    <div className="kuc-tabs-tabs">
      {tabNames}
      {tabContents}
    </div>
  );
  
}

export default Tabs;
