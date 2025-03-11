import React, { useState } from "react";
import classes from "./Home.module.scss";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../redux/fetchData";
import UserCard from "../userCard/UserCard";
const Home = () => {
  const { data, loading, error } = useSelector((state) => state.data);
  const [filteredData, setFilteredData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loading === "idle") {
      dispatch(fetchData());
    }
  }, [dispatch, loading]);

  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);

  const handleFilter = (value) => {
    if (!data) return;
    const filteredUsers = data.filter((user) => {
      return user?.name?.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredData(filteredUsers);
  };

  let timer;
  function handleSearch(e) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      handleFilter.apply(this, [e.target.value]);
    }, 2000);
  }

  if (loading === "pending") {
    return <div>Loading...</div>;
  }
  if (loading === "failed") {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="container scroll-smooth">
      <div className={classes.home}>
        <div className="search p-8 text-center">
          <input
            type="text"
            placeholder="Search User "
            onChange={handleSearch}
            className="p-2 m-t-4 m-b-4 mr-auto ml-auto border rounded-sm w-[50%]"
          />
        </div>
        <div className={classes.cardWrap}>
          {filteredData?.length > 0 &&
            filteredData?.map((user) => {
              return <UserCard key={user.id} data={user} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
