import React from 'react'

  function PriorityCheck(props) {
    const { priority } = props;
  
    let priorityClass = "";
    let priorityText = "";
  
    switch (priority) {
      case "high":
        priorityClass = "text-danger";
        priorityText = "High";
        break;
      case "medium":
        priorityClass = "text-warning";
        priorityText = "Medium";
        break;
      case "low":
        priorityClass = "text-info";
        priorityText = "Low";
        break;
      default:
        break;
    }
  
    return <span className={priorityClass}>{priorityText}</span>;
  }
  
export default PriorityCheck
