import DataTable from "C:/Users/User/Documents/ws-devsuperior/projeto-sds3/frontend/src/components/DataTable";
import Footer from "C:/Users/User/Documents/ws-devsuperior/projeto-sds3/frontend/src/components/Footer";
import NavBar from "C:/Users/User/Documents/ws-devsuperior/projeto-sds3/frontend/src/components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Olá mundo!</h1>

        <DataTable/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
