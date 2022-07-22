import { useEffect } from "react";
import { setStateThunk } from "./components/store/thunks/thunks";
import { useDispatch } from "react-redux";
import { Table } from "./components/Table/Table";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  
  useEffect(()=>{
    dispatch(setStateThunk());
  },[dispatch])

  return (
      <Table/>
  );
}

export default App;
