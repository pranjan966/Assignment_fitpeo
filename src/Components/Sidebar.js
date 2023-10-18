import React from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import {
  BsFillBoxFill,
  BsFillCollectionFill,
  BsFillPersonFill,
  BsFillTelephoneFill,
  BsFillPCircleFill,
} from "react-icons/bs";
import { FcBusinessman } from "react-icons/fc";

const SidebarComponent = () => {
  return (
    <div className="col-md-2 sidebar">
      <div className="sidebar__container">
        <div className="logo__header">
          <h1 className="logo__text">
            <span>
              <AiOutlineDashboard />
            </span>
            Dashboard
          </h1>
        </div>
        <div class="list-group">
          <ul class="nav flex-column menu">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <BsFillBoxFill />
                Dashboard
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <BsFillCollectionFill />
                Product
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <BsFillPersonFill />
                Customer
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <BsFillTelephoneFill />
                Help
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <BsFillPCircleFill />
                Promote
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="manage__by">
        <a class="nav-link nav__profile">
          <FcBusinessman />
          Project Manager
        </a>
      </div>
    </div>
  );
};

export default SidebarComponent;
