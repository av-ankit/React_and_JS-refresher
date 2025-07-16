import { useState, useEffect, useMemo } from "react";

function FilterUsers() {
  const [search, setSearch] = useState("");
  const [sorted, setSorted] = useState(false);
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
    const filtered = usersList.filter((user) =>
      user.firstName.toLowerCase().includes(search.toLowerCase())
    );

    if (sorted) {
      //adding sorting functionality
      return [...filtered].sort((a, b) =>
        a.firstName.localeCompare(b.firstName)
      );
    }
    return filtered;
  }, [search, usersList, sorted]);

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
        <button onClick={() => setSorted(!sorted)}>sort</button>
        {filteredUsers.map((user) => (
          <li key={user.id} onClick={() => console.log(user)}>
            {user.firstName}
          </li>
        ))}
      </ul>
    </>
  );
}

export default FilterUsers;
