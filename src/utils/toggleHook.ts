import { useState } from "react";

const useToggle = (initialState = "") => {
  const [open, setOpen] = useState(initialState);

  const toggle = (id: any) => {
    if (open === id) {
      setOpen("");
    } else {
      setOpen(id);
    }
  };

  return {
    open,
    toggle,
  };
};

export default useToggle;
