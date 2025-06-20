import { Route, Routes } from "react-router-dom";
import ConverToInces from "../ConvertToInches/ConverToInces"
import './ContentPage.css'
import Home from "../Home/Home";
import WordsCalculator from "../WordsCalculator/WordsCalculator";
import FdRateCalculator from "../FD-Calculator/FdRateCalculator";
import CountryInfo from "../CountryInfo/CountryInfo";
import ColorFlipper from "../ColorFlipper/ColorFlipper";
import DigitalClock from "../DigitalClock/DigitalClock";
import StopWatch from "../StopWatch/StopWatch";
import UserProfile from "../UserProfileCard/UserProfile";
import Qr from "../QR/Qr";
import FormHandling from "../Form/FormHandling";
import FormSave from "../Form/FormSave";
import GetAdvice from "../GetAdvice/GetAdvice";
import WeatherApp from "../Weather/WeatherApp";
import BMICalculator from '../BMI/BMICalculator';
import CurrencyConv from "../CurrenyConverter/CurrencyConv";
import StrongPassGenerator from "../PasswordGenerator/StrongPassGenerator";
import Faq from "../FAQ/Faq";
import Calender from "../Calender/Calender";
import QueAndAns from "../QueAndAns/QueAndAns";
import ShoppingMain from "../Shopingcart/ShoppingMain";
import Todo from "../Todo/Todo";
import Notification from "../Notification/Notification";
import Toggle from "../ToggleProgress/Toggle";
import Pagination from "../Pagination/Pagination";

const ContentPage = () => {
    return (
      <div className="content-page">
        <div className="content-page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cm" element={<ConverToInces />} />
            <Route path="/wordsCalculator" element={<WordsCalculator />} />
            <Route path="/FD-rate-calculator" element={<FdRateCalculator />} />
            <Route path="/country" element={<CountryInfo/>} />
            <Route path="/colorFlipper" element={<ColorFlipper/>} />
            <Route path="/digitalClock" element={<DigitalClock/>} />
            <Route path="/stopWatch" element={<StopWatch/>} />
            <Route path="/userProfiles" element={<UserProfile/>}/>
            <Route path="/qrCode" element={<Qr/>}/>
            <Route path="/form" element={<FormHandling/>}/>
            <Route path="/emp-save" element={<FormSave/>}/>
            <Route path="/advice"  element={<GetAdvice/>}/>
            <Route path="/weather"  element={<WeatherApp/>}/>
            <Route path="/bmi"  element={<BMICalculator/>}/>
            <Route path="/currency"  element={<CurrencyConv/>}/>
            <Route path="/pass" element={<StrongPassGenerator/>}/>
            <Route path="/faq" element={<Faq/>}/>
            <Route path="/calender" element={<Calender/>}/>
            <Route path="/queAndAns" element={<QueAndAns/>}/>
            <Route path="/shop/*" element={<ShoppingMain/>}/>
            <Route path="/todo" element={<Todo/>}/>
            <Route path="/notification" element={<Notification/>}/>
            <Route path="/toggle" element={<Toggle/>}/>
            <Route path="/pagination" element={<Pagination/>}/>
          </Routes>
        </div>
      </div>
    );
  };

export default ContentPage