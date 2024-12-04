import { useState } from "react";
const useState2 = (obj) => {
  const [state, update] = useState({
    ...obj
  });
  
  const set = (obj) => {  
    if (typeof obj === "object" && obj !== null) {
      update((prev) => ({ ...prev, ...obj }));
    } else {
      console.error("객체를 넣어주세요.");
    }
  };
  
  const get =()=> state
  return { set, get };
};

export default useState2;
