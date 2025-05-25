import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'

const NavBar = () => {

    return(
        <>
            <div className="nav-wrapper">
                <h2>Projects</h2>
                <div className="nav-container">
                    <ul className='projects'>
                        <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>1. Home</NavLink></li>
                        <li><NavLink to="/cm" className={({ isActive }) => isActive ? 'active' : ''}>2. Convert to Inches</NavLink></li>
                        <li><NavLink to="/wordsCalculator" className={({ isActive }) => isActive ? 'active' : ''}>3. Words Calculator</NavLink></li>
                        <li><NavLink to="/FD-rate-calculator" className={({ isActive }) => isActive ? 'active' : ''}>4. FD Rate Calculator</NavLink></li>
                        <li><NavLink to="/country" className={({ isActive }) => isActive ? 'active' : ''}>5. Country Info</NavLink></li>
                        <li><NavLink to="/colorFlipper" className={({ isActive }) => isActive ? 'active' : ''}>6. Color Flipper</NavLink></li>
                        <li><NavLink to="/digitalClock" className={({ isActive }) => isActive ? 'active' : ''}>7. Digital Clock</NavLink></li>
                        <li><NavLink to="/stopWatch" className={({ isActive }) => isActive ? 'active' : ''}>8. Stop Watch</NavLink></li>
                        <li><NavLink to="/userProfiles" className={({ isActive }) => isActive ? 'active' : ''}>9. Users Profile</NavLink></li>
                        <li><NavLink to="/qrCode" className={({ isActive }) => isActive ? 'active' : ''}>10. Generate QR Code</NavLink></li>
                        <li><NavLink to="/form" className={({ isActive }) => isActive ? 'active' : ''}>11. Form Handling</NavLink></li>
                        <li><NavLink to="/advice" className={({ isActive }) => isActive ? 'active' : ''}>12. Get Advice</NavLink></li>
                        <li><NavLink to="/weather" className={({ isActive }) => isActive ? 'active' : ''}>13. Weather App</NavLink></li>
                        <li><NavLink to="/bmi" className={({ isActive }) => isActive ? 'active' : ''}>14. BMI Calculator</NavLink></li>
                        <li><NavLink to="/currency" className={({ isActive }) => isActive ? 'active' : ''}>15. Currency converter</NavLink></li>
                        <li><NavLink to="/pass" className={({ isActive }) => isActive ? 'active' : ''}>16. Password Generator</NavLink></li>
                        <li><NavLink to="/faq" className={({ isActive }) => isActive ? 'active' : ''}>17. FAQ</NavLink></li>
                        <li><NavLink to="/calender" className={({ isActive }) => isActive ? 'active' : ''}>18. Calender</NavLink></li>
                        <li><NavLink to="/queAndAns" className={({ isActive }) => isActive ? 'active' : ''}>19. Que And Ans</NavLink></li>
                        <li><NavLink to="/shop" className={({ isActive }) => isActive ? 'active' : ''}>20. Shopping</NavLink></li>
                        <li><NavLink to="/todo" className={({ isActive }) => isActive ? 'active' : ''}>21. Todo</NavLink></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavBar;