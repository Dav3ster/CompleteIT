import React from "react";

const styles = {
    priorityList: {
        width: "30%",
        backgroundColor: "black"
    },

    highPriority: {
        color: "white",
        backgroundColor: "maroon"
    },

    midPriority: {
        color: "white",
        backgroundColor: "goldenrod"
    },

    lowPriority: {
        color: "white",
        backgroundColor: "green"
    }
}

export default function priorityList() {
  return (
    <div id="priorityList" style={styles.priorityList}>
      <div id="highPriority" style={styles.highPriority}>

      </div>
      <div id="midPriority" style={styles.midPriority}>

      </div>
      <div id="lowPriority" style={styles.lowPriority}>

      </div>
    </div>
  );
}
