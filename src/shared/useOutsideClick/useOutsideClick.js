import { useEffect } from "react";

const useOutsideClick = (ref, handler) => {

  const handleClick = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      handler();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export default useOutsideClick;