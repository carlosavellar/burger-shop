import { RootState } from "@/store";
import { fetchData } from "@/utils/api";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const dispatch = useDispatch();
  const { sections, loading, error } = useSelector(
    (state: RootState) => state.menuItems
  );

  const menuItems = useSelector((state: RootState) => state.menuItems);

  useEffect(() => {
    dispatch(fetchData() as any);
  }, [dispatch]);

  console.log(menuItems);

  return <div>App</div>;
}
