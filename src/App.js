import { useEffect, useState } from "react";
import { setStateThunk } from "./components/store/thunks/thunks";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "./components/TableComponent/Table";
import {LoadingComponent} from './components/LoadingComponent'
import {  useLocation } from "react-router-dom";
import { getCurrentPageSelector } from "./components/store/selectors/selectors";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const loading = useSelector((state)=>{return state.loading});
  const location = useLocation();
  const currentPage = useSelector(getCurrentPageSelector(location));

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
     {!loading && loader && <Table currentPage={currentPage}/>}
     </>
  )
}

export default App;
