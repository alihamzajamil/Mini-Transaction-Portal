import { BrowserRouter, Routes, Route } from "react-router-dom";
import PersonalAccountManager from "./pages/PersonalAccountManager/PersonalAccountManager";
import { AccountContextProvider } from "./context/accountContext";

import './App.css'

function App() {
  return (
    <AccountContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PersonalAccountManager />} />
        </Routes>
      </BrowserRouter>
    </AccountContextProvider>
  );
}

export default App;