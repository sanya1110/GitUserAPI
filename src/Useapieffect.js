import React, { useEffect, useState } from 'react';
import { BsGithub } from "react-icons/bs";

const Useapieffect = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch('https://api.github.com/users');
    setUsers(await response.json());
  }

  useEffect(() => {
    getUsers();
  }, []);

  const date = new Date();
  const d = date.getFullYear();

  return (
    <>
      <h2>
        <BsGithub /> List of GitHub users <BsGithub />
      </h2>

      <div className="container cards-wrapper d-flex gx-5">
        <div className="row gy-4">
          {users.map((curElem) => (
            <div key={curElem.id} className="col-md-4">
              <div className="card">
                <img src={curElem.avatar_url} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                  <h5 className="card-title">@{curElem.login}</h5>
                  <p className="card-text"></p>
                  <a href={curElem.url} className="button btn btn-success btn-primary"> <BsGithub /> GitProfile </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer>
        <div className="f text-center p-3">
          <p>@{d} Copyright: This site is made by Sanya Singh</p>
        </div>
      </footer>
    </>
  );
}

export default Useapieffect;
