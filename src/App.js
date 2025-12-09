import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

/* ===== Components ===== */
import Header from "./components/Header";
import Footer from "./components/Footer";
import Header1 from "./components/Header1";
import Header2 from "./components/Header2";
import HomePage from "./components/Home";
import Account from "./components/Account";
import Buying from "./components/Buying";
import Selling from "./components/Selling";
import Blog from "./components/Blog";
import Careers from "./components/Careers";
import AboutUs from "./components/AboutUs";
import FAQ from "./components/Faq";
import OrderStatus from "./components/OrderStatus";
import Payment from "./components/Payment";
import ShippingDelivery from "./components/ShippingDelivery";
import WhatnewAffiliates from "./components/WhatnewAffiliates";
import Returns from "./components/Returns";
import ContactUs from "./components/ContactUs";
import BecomeSeller from "./components/BecomeSeller";
import Contact from "./components/contact1";
import DiscoveryJobs from "./components/DiscoveryJobs";
import WorkingWhatNew from "./components/WorkingWhatNew";
/* ===== Policies & Pages ===== */
import SafetyPolicy from "./components/SafetyPolicy";
import AdultExplicitPolicy from "./pages/AdultExplicitPolicy";
import AnimalRelatedPolicy from "./pages/AnimalRelatedPolicy";
import CommunicationScamsPolicy from "./pages/CommunicationScamsPolicy";
import BlockingUser from "./pages/BlockingUser";
import WholesaleCategoryPolicy from "./pages/WholeSaleCategoryPolicy";
import ReportForm from "./pages/ReportForm";
import TermsConditions from "./pages/TermsConditions";
import SellerCouponTerms from "./pages/SellerCouponTerms";
import HighValueLoss from "./pages/HighValueLoss";
import BuyerReferralProgram from "./pages/BuyerReferralProgram";
import SurpriseProductsPolicy from "./pages/SurpriseProductsPolicy";
import CardBreaksPolicy from "./pages/CardBreaksPolicy";
import MondialProofOfDropoff from "./pages/MondialProofOfDropoff";
import NoveltyReplicaCoinsPolicy from "./pages/NoveltyReplicaCoinsPolicy";
import FoodDrinkPolicy from "./pages/FoodDrinkPolicy";
import SellerProtectionPolicy from "./pages/SellerProtectionPolicy";

/* ===== Account Pages ===== */
import MobileNotification from "./pages/MobileNotification";
import UpdateEmailPassword from "./pages/UpdateEmailPassword";
import MultipleAccounts from "./pages/MultipleAccounts";
import DeletingForm from "./pages/DeletingForm";

/* ===== Support Pages ===== */
import SupportSystem from "./pages/SupportSystem";
import SubmitRequest from "./pages/SubmitRequest";
import CadFAQ from "./pages/CadFAQ";

/* ===== Selling Guide Pages ===== */
import HowToStartSelling from "./pages/HowToStartSelling";
import SellerApplicationFAQ from "./pages/SellerApplicationFAQ";
import SetUpShipping from "./pages/SetUpShipping";
import ListYourItems from "./pages/ListYourItems";
import SalesMatchBonus from "./pages/SalesMatchBonus";
import UserGuide from "./pages/UserGuide";
import VariantsForSellers from "./pages/VariantsForSellers";
import HowToListProducts from "./pages/HowToListProducts";
import ListingGuidelines from "./pages/ListingGuidelines";
import ScanBarcodeSlab from "./pages/ScanBarcodeSlab";
import HowToScheduleShow from "./pages/HowToScheduleShow";
import ProhibitedOrRestrictedItems from "./pages/ProhibitedOrRestrictedItems";
import ShowManagementForSellers from "./pages/ShowManagementForSellers";
import RunningGiveawayDuringLivestream from "./pages/RunningGiveawayDuringLivestream";
import InvitingCohostToLive from "./pages/InvitingCohostToLive";

/* ===== App Component ===== */
function App() {
  return (
    <Router>
      <Header />

      <Routes>
        {/* ===== Main Routes ===== */}
        <Route path="/" element={<HomePage />} />
        <Route path="/buying" element={<Buying />} />
        <Route path="/selling" element={<Selling />} />
        <Route path="/account" element={<Account />} />
        <Route path="/become-seller" element={<BecomeSeller />} />
        <Route path="/discovery-jobs" element={<DiscoveryJobs />} />
        <Route path="/working-whatnew" element={<WorkingWhatNew />} />
        {/* ===== Informational Pages ===== */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/faq" element={<FAQ />} />

        {/* ===== Policy & Safety Pages ===== */}
        <Route path="/safety-policy" element={<SafetyPolicy />} />
        <Route path="/adult-explicit-items-policy" element={<AdultExplicitPolicy />} />
        <Route path="/animal-related-policy" element={<AnimalRelatedPolicy />} />
        <Route path="/communication-scams-policy" element={<CommunicationScamsPolicy />} />
        <Route path="/blocking-user" element={<BlockingUser />} />
        <Route path="/wholesale-category-policy" element={<WholesaleCategoryPolicy />} />
        <Route path="/report-form" element={<ReportForm />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/seller-coupon-terms" element={<SellerCouponTerms />} />
        <Route path="/high-value-loss" element={<HighValueLoss/>} />
        <Route path="/buyer-referral-program" element={<BuyerReferralProgram />} />
        <Route path="/surprise-products-policy" element={<SurpriseProductsPolicy />} />
        <Route path="/card-breaks-policy" element={<CardBreaksPolicy />} />
         <Route path="/mondial-proof-of-dropoff" element={<MondialProofOfDropoff />} />
        <Route path="/novelty-replica-coins-policy" element={<NoveltyReplicaCoinsPolicy />} />
          <Route path="/food-drink-policy" element={<FoodDrinkPolicy />} />
          <Route path="/seller-protection-policy" element={<SellerProtectionPolicy />} />


        {/* ===== Orders, Payments, and Returns ===== */}
        <Route path="/order-status" element={<OrderStatus />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/shippingdelivery" element={<ShippingDelivery />} />
        <Route path="/returns" element={<Returns />} />

        {/* ===== Contact & Affiliates ===== */}
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/contact1" element={<Contact />} />
        <Route path="/WhatNewAffiliates" element={<WhatnewAffiliates />} />

        {/* ===== Account Management ===== */}
        <Route path="/mobile-notifications" element={<MobileNotification />} />
        <Route path="/update-email-password" element={<UpdateEmailPassword />} />
        <Route path="/multiple-accounts" element={<MultipleAccounts />} />
        <Route path="/deleting-form" element={<DeletingForm />} />

        {/* ===== Support & FAQ Pages ===== */}
        <Route path="/support-system" element={<SupportSystem />} />
        <Route path="/submit-request" element={<SubmitRequest />} />
        <Route path="/cad-faq" element={<CadFAQ />} />

        {/* ===== Seller Guides ===== */}
        <Route path="/how-to-start-selling" element={<HowToStartSelling />} />
        <Route path="/seller-application-faq" element={<SellerApplicationFAQ />} />
        <Route path="/set-up-shipping" element={<SetUpShipping />} />
        <Route path="/list-your-items" element={<ListYourItems />} />
        <Route path="/sales-match-bonus" element={<SalesMatchBonus />} />
        <Route path="/user-guide" element={<UserGuide />} />
        <Route path="/variants-for-sellers" element={<VariantsForSellers />} />
        <Route path="/how-to-list-products" element={<HowToListProducts />} />
        <Route path="/listing-guidelines" element={<ListingGuidelines />} />
        <Route path="/scan-barcode-slab" element={<ScanBarcodeSlab />} />
         <Route path="/how-to-schedule-a-show" element={<HowToScheduleShow />} />
          <Route path="/prohibited-or-restricted-items"element={<ProhibitedOrRestrictedItems />}/>
           <Route path="/show-management-for-sellers" element={<ShowManagementForSellers />}/>
             <Route path="/running-a-giveaway-during-livestream"element={<RunningGiveawayDuringLivestream />}/>
              <Route path="/inviting-a-cohost-to-your-live"element={<InvitingCohostToLive />}/>


        {/* Optional Route (Header1 preview/test) */}
        <Route path="/header1" element={<Header1 />} />
          <Route path="/header2" element={<Header2 />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
