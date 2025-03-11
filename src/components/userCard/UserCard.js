import React from "react";
import classes from "./UserCard.module.scss";
import { userIcon } from "../../assets/images/images";
import { useNavigate } from "react-router";
const UserCard = (props) => {
  /**
   * UserCard component displays a card with user information.
   */
  // Destructure user data from props.
  const { name, email, address, company, website, id } = props?.data;

  // Hook to navigate to different routes.
  const navigate = useNavigate();

  /**
   * Handles the click event on the card.
   * Navigates to the user detail page with the user's ID.
   *
   * @param {number} id - The ID of the user.
   */
  const handleClick = (id) => {
    navigate(`/user-detail/${id}`);
  };

  return (
    // Main container for the user card.
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
