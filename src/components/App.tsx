import { RootState } from "@/store";
import { IMenuItems, initialState } from "@/store/slices/menuSlice";
import { fetchData } from "@/utils/api";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const [loadedMenu, setLoadedMenu] = useState<IMenuItems>(initialState);
  const dispatch = useDispatch();
  const { sections, loading, error } = useSelector(
    (state: RootState) => state.menuItems
  );

  useEffect(() => {
    dispatch(fetchData() as any);
  }, [dispatch]);

  useEffect(() => {
    if (sections || sections === null) {
      console.log(sections, "!");
      setLoadedMenu(sections as any);
    }
  }, [sections]);

  useEffect(() => {
    if (loadedMenu) {
      console.log(loadedMenu.id, "!Loaded");
    }
  }, [loadedMenu]);

  return <div style={{ background: "red" }}>{loadedMenu?.id}</div>;
}
