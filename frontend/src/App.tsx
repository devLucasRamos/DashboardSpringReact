import DonutChart from "C:/Users/User/Documents/ws-devsuperior/projeto-sds3/frontend/src/components/DonutChart";
import BarChart from "C:/Users/User/Documents/ws-devsuperior/projeto-sds3/frontend/src/components/BarChart";
import DataTable from "C:/Users/User/Documents/ws-devsuperior/projeto-sds3/frontend/src/components/DataTable";
import Footer from "C:/Users/User/Documents/ws-devsuperior/projeto-sds3/frontend/src/components/Footer";
import NavBar from "C:/Users/User/Documents/ws-devsuperior/projeto-sds3/frontend/src/components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Dashboard de Vendas</h1>

        <div className="row px-3">s
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de vendas (%)</h5>
            <BarChart />
          </div>
        </div>
        <div className="col-sm-6">
          <h5 className="text-center text-secondary">Taxa de vendas (%)</h5>
          <DonutChart />
        </div>

        <div className="py-3">
          <h2 className="text-primary">Todas Vendas</h2>
        </div>
        <div>
        </div>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
