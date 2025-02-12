import NavBar from "../Header/NavBar";

export default function()
{
    return(
        <>
         <NavBar/>
         <h3>Car List</h3>
         <div classNameName="container">
      <table className="table table=striped">
          <thead className="table-dark">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Number</th>
              <th scope="col">Model</th>
              <th scope="col">className</th>
              <th scope="col">CarView</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Car1</th>
              <td>KA09asc1231</td>
              <td>Zen</td>
              <td>Smallcar</td>
              <td><a className="btn btn-success" href= "/cars/view?id=car1">View</a> </td>
            </tr>
            <tr>
              <th scope="row">Car2</th>
              <td>KA09asc1232</td>
              <td>Beatle</td>
              <td>Hatchback</td>
              <td><a className="btn btn-success" href= "/cars/view?id=car2">View</a> </td>
            </tr>
          </tbody>
        </table>
  </div>
        </>
    );
}