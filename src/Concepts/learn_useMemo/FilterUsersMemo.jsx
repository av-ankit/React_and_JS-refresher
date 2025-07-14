import { useState, useEffect, useMemo } from "react";

function FilterUsers() {
  const [search, setSearch] = useState("");
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    const fetchUserList = (url) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log("fetched data: ", data);
          setUsersList(data.users);
        })
        .catch((e) => console.log("error occurred during fetch: ", e));
    };

    fetchUserList("https://dummyjson.com/users");
  }, []);

  //useMemo()
  //important to include userList also in dependency otherwise list will not render on intial rendering of the component
  const filteredUsers = useMemo(() => {
    console.log("Filtering users...");
    return usersList.filter((user) =>
      user.firstName.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, usersList]);

  return (
    <>
      <h2>User Search</h2>
      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.firstName}</li>
        ))}
      </ul>
    </>
  );
}

export default FilterUsers;
