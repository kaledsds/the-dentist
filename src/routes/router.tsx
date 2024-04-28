import App from "@/App";
import { DashboardPage } from "@/modules/app/dashboard/views";
import { HomePage } from "@/modules/app/home/views";
import { PrescriptionList } from "@/modules/app/prescriptions/views/prescription.list";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Error: 404</div>,
    children: [
      { index: true, element: <HomePage /> },
      { path: "dashboard", element: <DashboardPage /> },
      { path: "prescriptions", element: <PrescriptionList /> },
    ],
  },
]);

export default router;
