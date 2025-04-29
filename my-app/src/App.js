import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Slider from './Components/slider/Slider';
import SignUp from './Components/User/Signup';
import Login from './Components/User/Login';
import SliderForm from './Components/slider/AddSlider';
import Form from './Components/Form/Form';
import Services from './Components/Services/Services';
import Treatment from './Components/Treatment/TreatmentForm';
import OtherServices from './Components/Services/OtherServices/OtherServices';
import Green from './Components/Green/app';
import FAQ from './Components/FAQS/FAQ';
import ClientReviews from './Components/ClientReviews/ClientReviews';
import OlivaClinicPage from './Components/OlivaClinicPage/OlivaClinicPage';
import AboutUs from './Components/AboutUs/AboutUs';
import AwardsSection, { awards } from './Components/AboutUs/AwardsSection';
import Location from './Components/Footer/Location';
import Footer from './Components/Footer/Footer/Footer';
import TreatmentDetail from './Components/Treatment/TreatmentDetail';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Slider />
              <Form />
              <Services />
              <Treatment />
              <OtherServices />
              <Green />
              <FAQ />
              <ClientReviews />
              <OlivaClinicPage />
              <AwardsSection awards={awards} />
              <AboutUs />
              <Location />
            </>
          } />
          <Route path="/treatment" element={<Treatment />} />
          <Route path="/treatment/:id" element={<TreatmentDetail />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-slider" element={<SliderForm />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;
