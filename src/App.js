import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";
import SignupScreen from './screens/Signup';
import LoginScreen from './screens/Login';
import HomeScreen from './screens/Home';
import VerificationScreen from './screens/Verification';
import ForgotPassScreen from './screens/ForgotPassword';
import CreateNewPassScreen from './screens/CreateNewPass';
import ContactUsScreen from './screens/ContactUs';
import FAQScreen from './screens/FAQ';
import RiseOfMedicalScreen from './screens/RiseOfMedical';
import AuthorityScreen from './screens/Authority';
import ConstitutionScreen from './screens/Constitution';
import EthicalScreen from './screens/Ethical';

function App() {
  return (
    <Router>
      <Route path="/Signup" component={SignupScreen} />
      <Route path="/Signin" component={LoginScreen} />
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/OTP" component={VerificationScreen} />
      <Route exact path="/ForgotPass" component={ForgotPassScreen} />
      <Route exact path="/CreateNewPass" component={CreateNewPassScreen} />
      <Route exact path="/ContactUs" component={ContactUsScreen} />
      <Route exact path="/FAQ" component={FAQScreen} />
      <Route exact path="/RiseofMedical" component={RiseOfMedicalScreen} />
      <Route exact path="/Authority" component={AuthorityScreen} />
      <Route exact path="/Constitution" component={ConstitutionScreen} />
      <Route exact path="/Ethical" component={EthicalScreen} />
    </Router>
  );
}

export default App;
