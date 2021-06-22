import React, { Fragment } from "react";

const Table = ({ availableSessions }) => {

  return (
    <Fragment>
      <center>
        <table class="table table-hover  table-striped center_table">
          <thead class="thead-dark">
            <tr>
              <th>
                <center>Dose Available</center>
              </th>
              <th>
                <center>Center Name</center>
              </th>
              <th>
                <center>Vaccine</center>
              </th>
              <th>
                <center>Slots Availible</center>
              </th>
            </tr>
          </thead>
          <tbody>
            {availableSessions.map((session) => {
              return (
                <tr>
                  <td>
                    <center>{session.available_capacity}</center>
                  </td>
                  <td>
                    <center>
                      <b>{session.name}</b>
                      <br />
                      <h6>
                        {session.address},<br />
                        {session.district_name}, {session.state_name} (
                        {session.pincode})
                      </h6>
                    </center>
                  </td>
                  <td>
                    <center>{session.vaccine}</center>
                  </td>
                  <td>
                    <center>
                      <h5>
                        {session.slots.map((person) => (
                          <p>{person}</p>
                        ))}
                      </h5>
                    </center>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </center>
    </Fragment>
  );
};

export default Table;
