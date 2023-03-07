import React from 'react'

  function PriorityCheck(props) {
    const { priority } = props;
  
    let priorityText = "";
  
    switch (priority) {
      case "high":
        priorityText = "High";
        break;
      case "medium":
        priorityText = "Medium";
        break;
      case "low":
        priorityText = "Low";
        break;
      default:
        break;
    }
  
    return <span>{priorityText}</span>;
  }
  
export default PriorityCheck
