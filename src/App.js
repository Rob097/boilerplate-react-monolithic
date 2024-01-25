import "@/index.scss";
import { Outlet } from "react-router-dom";
import PageLayout from "./layouts/PageLayout";

function App() {
  return (
    <PageLayout>
      <Outlet />
    </PageLayout>
  );
}

export default App;
