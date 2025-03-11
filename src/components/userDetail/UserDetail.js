import React, { useEffect, useState } from "react";
import classes from "./UserDetail.module.scss";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { userIcon } from "../../assets/images/images";

const UserDetail = () => {
  const [slectedUser, setSlectedUser] = useState(null);
  const { data, loading, error } = useSelector((state) => state.data);
  const { id } = useParams();
  useEffect(() => {
    const user = data.find((user) => id == user.id);
    setSlectedUser(user);
  }, [data]);

  if (loading === "pending") {
    return <div>Loading...</div>;
  }
  if (loading === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      <div className={classes.userDetail}>
        <h1>User Detail</h1>
        <div className={`${classes.image} shadow`}>
          <img src={userIcon} alt={slectedUser?.name} />
        </div>
        <p>
          <b>Name :</b> {slectedUser?.name}
        </p>
        <p>
          <b>Email :</b> {slectedUser?.email}
        </p>
        <p>
          <b>Address :</b> {slectedUser?.address?.street} ,{" "}
          {slectedUser?.address?.city}
        </p>
        <p>
          <b>Company :</b> {slectedUser?.company?.name}
        </p>
        <p>
          <b>Website :</b> {slectedUser?.website}
        </p>
      </div>
    </div>
  );
};

export default UserDetail;
