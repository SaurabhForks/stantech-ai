import React, { useState, useEffect } from "react"; // Import useState and useEffect hooks from React.
import classes from "./Home.module.scss"; // Import CSS modules for styling.
import { useSelector, useDispatch } from "react-redux"; // Import useSelector and useDispatch hooks from react-redux.
import { fetchData } from "../../redux/fetchData"; // Import the fetchData action creator from the Redux store.
import UserCard from "../userCard/UserCard"; // Import the UserCard component.

/**
 * Home component - Displays a list of users and allows filtering them by name.
 */
const Home = () => {
  // Access data, loading, and error states from the Redux store.
  const { data, loading, error } = useSelector((state) => state.data);
  // State to hold the filtered user data.
  const [filteredData, setFilteredData] = useState([]);
  // Get the dispatch function from Redux.
  const dispatch = useDispatch();

  /**
   * Fetch data when the component mounts or when loading state is 'idle'.
   * useEffect hook runs after every render.
   */
  useEffect(() => {
    // Check if the data is in idle state.
    if (loading === "idle") {
      // Dispatch the fetchData action to fetch user data.
      dispatch(fetchData());
    }
    // Depend on dispatch and loading states. if these changes, the function will re run.
  }, [dispatch, loading]);

  /**
   * Update the filteredData when the data from the Redux store changes.
   */
  useEffect(() => {
    //Check if there is data.
    if (data) {
      // Update the filteredData state with the fetched data.
      setFilteredData(data);
    }
    // Depend on data. if this changes, the function will re run.
  }, [data]);

  /**
   * Filters the user data based on the provided search value.
   *
   * @param {string} value - The search string to filter users by name.
   */
  const handleFilter = (value) => {
    // If there is no data, return early.
    if (!data) return;
    // Filter the users based on whether their name includes the search value (case-insensitive).
    const filteredUsers = data.filter((user) => {
      return user?.name?.toLowerCase().includes(value.toLowerCase());
    });
    // Update the filteredData state with the filtered users.
    setFilteredData(filteredUsers);
  };

  // Variable to store the timer for debouncing the search input.
  let timer;

  /**
   * Handles the search input change event.
   * Implements debouncing to prevent excessive filtering.
   *
   * @param {object} e - The event object.
   */
  function handleSearch(e) {
    // Clear any existing timer.
    clearTimeout(timer);
    // Set a new timer to call handleFilter after 2000ms (2 seconds).
    timer = setTimeout(() => {
      // Call handleFilter with the current input value.
      handleFilter.apply(this, [e.target.value]);
    }, 2000);
  }

  // Loading state handling:
  if (loading === "pending") {
    return <div>Loading...</div>; // Display loading indicator.
  }
  // Error state handling:
  if (loading === "failed") {
    return <div>Error: {error}</div>; // Display error message.
  }

  // Render the main content:
  return (
    <div className="container scroll-smooth">
      {/* Main container */}
      <div className={classes.home}>
        {/* Search section */}
        <div className="search p-8 text-center">
          {/* Search input field */}
          <input
            type="text"
            placeholder="Search User "
            onChange={handleSearch} // Call handleSearch on input change.
            className="p-2 m-t-4 m-b-4 mr-auto ml-auto border rounded-sm w-[50%]"
          />
        </div>
        {/* Card wrapper */}
        <div className={classes.cardWrap}>
          {/* Check if there is filtered data before mapping over it*/}
          {filteredData?.length > 0 &&
            // Map over the filtered user data and render a UserCard for each user.
            filteredData?.map((user) => {
              return <UserCard key={user.id} data={user} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
