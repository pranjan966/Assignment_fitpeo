import React from "react";
import { FaSearch } from "react-icons/fa";

const TableComponent = () => {
  return (
    <div className="row user__table">
      <div className="mt-2 tablewrap">
        <div className="tablediv">
          <div className="tableoverview">
            <div className="text">
              <h5>Product Sell</h5>
            </div>
            <div class="btn-group">
              <div class="input-group">
                <div class="form-outline">
                  <input
                    id="search-focus"
                    type="search"
                    class="form-control"
                    placeholder="Search"
                  />
                </div>
                <button type="button" class="btn btn-primary">
                  <FaSearch />
                </button>
              </div>
              <div>
                <button
                  type="button"
                  class="btn btn-secondary dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Last 30 days
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      12 june
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      13 june
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      14 june
                    </a>
                  </li>
                  {/* <li><hr class="dropdown-divider"></li> */}
                  <li>
                    <a class="dropdown-item" href="#">
                      15 june
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Larry the Bird</td>
              <td>Thornton</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComponent;
