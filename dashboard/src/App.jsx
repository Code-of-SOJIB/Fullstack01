import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Registration from "../pages/Registration";
import OtpVerfication from "../pages/OtpVerfication";
import Login from "../pages/Login";
import EmailVerifyLink from "../pages/EmailVerifyLink";
import ForgotPassword from "../pages/ForgotPassword";
import Resetemail from "../pages/Resetemail";
import Newemail from "../pages/Newemail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgotpass" element={<ForgotPassword />} />
      <Route path="/resetemail" element={<Resetemail />} />
      <Route path="/newresetemail/:token" element={<Newemail />} />
      <Route path="/EmailVerification/:token" element={<EmailVerifyLink />} />
      <Route path="/OtpVerification/:email" element={<OtpVerfication />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
