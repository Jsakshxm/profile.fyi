"use client"
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import Header from "./components/Header";

 const page = () => {

  return (
    <Provider store={store}><Header/><Body></Body> </Provider>)}
export default page;