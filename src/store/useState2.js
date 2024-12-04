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


// const set = (FnOrObj) => {
  //   if (typeof FnOrObj === "function") {
  //     // 함수 기반 업데이트
  //     update((prev) => ({ ...prev, ...FnOrObj() }));
  //   } else if (typeof FnOrObj === "object" && FnOrObj !== null) {
  //     // 객체 기반 업데이트
  //     update((prev) => ({ ...prev, ...FnOrObj }));
  //   } else {
  //     console.error("함수 혹은 객체를 넣어주세요.");
  //   }
  // };
