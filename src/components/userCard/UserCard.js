import React from "react";
import classes from "./UserCard.module.scss";
import { userIcon } from "../../assets/images/images";
import { useNavigate } from "react-router";
const UserCard = (props) => {
  const { name, email, address, company, website, id } = props?.data;
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/user-detail/${id}`);
  };

  return (
    <div
      className={`${classes.card}  p-4 shadow`}
      onClick={() => handleClick(id)}
    >
      <div className={`${classes.image} shadow`}>
        <img src={userIcon} alt={name} />
      </div>
      <p>
        <b>Name :</b> {name}
      </p>
      <p>
        <b>Email :</b> {email}
      </p>
      <p>
        <b>Address :</b> {address?.street} , {address?.city}
      </p>
      <p>
        <b>Company :</b> {company?.name}
      </p>
      <p>
        <b>Website :</b> {website}
      </p>
    </div>
  );
};

export default UserCard;
