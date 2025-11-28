import BentoGrid from "./components/BentoGrid/BentoGrid";
import ActivityPage from "./pages/ActivityPage";
import { RouterProvider, createHashRouter } from "react-router-dom";

export default function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <BentoGrid />,
    },
    {
      path: "/activity",
      element: <ActivityPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}
