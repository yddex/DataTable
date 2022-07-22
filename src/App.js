import { useEffect, useState } from "react";
import { setStateThunk } from "./components/store/thunks/thunks";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "./components/TableComponent/Table";
import {LoadingComponent} from './components/LoadingComponent'
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const loading = useSelector((state)=>{return state.loading})
  const enableLoader = ()=>{
    setTimeout((setLoader(true)),1000)
  }
  
  useEffect(()=>{
    dispatch(setStateThunk());
    enableLoader();
  },[])

  return (
    <>
    {loading && !loader && <LoadingComponent/>}
     {!loading && loader && <Table/>}
     </>
  )
}

export default App;
