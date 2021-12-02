import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1 id="info">Contactez-Nous</h1>
      <form>
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3" placeholder="Email"></input>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3" placeholder="Password"></input>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" class="btn btn-primary" id="btnPlus">Connexion</button>
    </div>
  </div>
</form>
    </div>
  );
}

export default App;
