import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import Loading from "../../../Shared/Loading";
import Banner from "../Banner/Banner";
import BestSell from "../BestSell/BestSell";
import Inventories from "../Inventories/Inventories";
import NewArrival from "../NewArrival/NewArrival";

const Home = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <Banner></Banner>
      <Inventories></Inventories>
      <BestSell></BestSell>
      <NewArrival></NewArrival>
    </div>
  );
};

export default Home;
