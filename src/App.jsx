import {Route, Routes} from "react-router-dom";

import PrivacyPolicy from "./pages/PrivacyPolicy";

import TermsAndConditions from "./pages/TermsAndConditions";

import Layout from "./layout/Layout";

import Home from "./pages/Home";

import ContactPage from "./pages/ContactPage";

import FAQ from "./pages/FAQ";

export default function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="privacy-policy" element={<PrivacyPolicy />} />
                <Route path="terms-and-conditions" element={<TermsAndConditions />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="faq" element={<FAQ />} />
                <Route
                    path="*"
                    element={<div className="p-6">404 — Page not found</div>}
                />
            </Route>
        </Routes>
    );
}