import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./utils/Layout";
import Profile from "./pages/Profile";
import Post from "./pages/Post";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./static/Home";
import PrivacyPolicy from "./static/PrivacyPolicy";
import Contact from "./static/Contact";
import TermsOfUse from "./static/TermsOfUse";
import Try from "./pages/Try";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/try-tot" element={<Try />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-use" element={<TermsOfUse />} />
          <Route path="docs/privacy-policy.html" element={<PrivacyPolicy />} />
          <Route path="docs/terms-of-use.html" element={<TermsOfUse />} />
          <Route path="contact" element={<Contact />} />
          <Route path="u/:routeUserName" element={<Profile />} />
          <Route path="p/:postId" element={<Post />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
