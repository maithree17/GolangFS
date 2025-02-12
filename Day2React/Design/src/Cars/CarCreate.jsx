import NavBar from "../Header/NavBar";

export default function()
{
    return(
        <>
        <NavBar/>
        <h3><a href="/" className="btn btn-light">Go Back</a>Add Car</h3> 
        <div class="container">

<div class="htmlhtmlForm-group mb-3">
  <label htmlhtmlFor="number" class="htmlhtmlForm-label">Car Number:</label>
  <input type="text" class="htmlhtmlForm-control" id="number" placeholder="Please enter car number"/>
</div>
<div class="htmlhtmlForm-group mb-3">
  <label htmlhtmlFor="number" class="htmlhtmlForm-label">Car Model:</label>
  <input type="text" class="htmlhtmlForm-control" id="number" placeholder="Please enter car model"/>
</div>
<div class="htmlhtmlForm-group mb-3">
  <label htmlhtmlFor="number" class="htmlhtmlForm-label">Car type(SUV/CUV/Sedan):</label>
  <input type="text" class="htmlhtmlForm-control" id="number" placeholder="Please enter car type"/>
</div>
<button class="btn btn-primary">Create car</button>
</div>
        </>
    );
}