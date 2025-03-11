import React from "react";
import classes from "./Home.module.scss";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../redux/fetchData";
const Home = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);

  useEffect(() => {
    if (loading === "idle") {
      dispatch(fetchData());
    }
  }, [dispatch, loading]);
  console.log(data);

  if (loading === "pending") {
    return <div>Loading...</div>;
  }
  if (loading === "failed") {
    return <div>Error: {error}</div>;
  }
  return (
    <div className={classes.home}>
      {data?.length > 0 &&
        data?.map((data, index) => {
          return <div>{data?.id}</div>;
        })}
    </div>
  );
};

export default Home;
