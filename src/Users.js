import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import userData  from "./data";
function Users() {
  const [users, setUsers] = useState(userData);
  return (
    <>
      <div className="users">
        {users.map((user, index) => {
          const { id, firstname, lastname, email, website, image } = user;
          return (
            <div className="user" key={index}>
              <img src={image} className="user-img" alt={firstname} />
              <div className="user-info">
                <Link to={`/Users/${id}`}>
                  <h3 className="user-name">
                    {firstname} {lastname}
                  </h3>
                </Link>
                <p className="user-mail">{email}</p>
                <a href="" className="user-site">
                  {website}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Users;
