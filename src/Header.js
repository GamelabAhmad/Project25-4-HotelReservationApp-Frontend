import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoImage from './img/LogoJH.png'; 
import { 
  NavStyle, 
  LogoStyle, 
  UlStyle, 
  LiStyle, 
  AStyle, 
  Booking,
  DropdownMenu, 
  DropdownItem,
  DropdownLink,
  ButtonStyle 
} from "./StyledHeader";
import PopUpAvailability from './PopUpAvailability';

const Header = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const handleOpenPopUp = () => {
    setIsPopUpOpen(true);
  };

  const handleClosePopUp = () => {
    setIsPopUpOpen(false);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const handleDropdownMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      <NavStyle>
        <UlStyle>
          <LiStyle><Link to="/" style={{ textDecoration: 'none' }}><AStyle>Home</AStyle></Link></LiStyle>
          <LiStyle><Link to="/room" style={{ textDecoration: 'none' }}><AStyle href="Room.js">Rooms</AStyle></Link></LiStyle>
          <LiStyle><Link to="/about" style={{ textDecoration: 'none' }}><AStyle>About</AStyle></Link></LiStyle>
          <LiStyle><AStyle href="#">Pesanan</AStyle></LiStyle>
          <LiStyle onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <AStyle href="#">Learn</AStyle>
            {isDropdownOpen && (
              <DropdownMenu onMouseEnter={handleDropdownMouseEnter} onMouseLeave={handleDropdownMouseLeave}>
                <DropdownItem>
                  <DropdownLink href="#">HTML</DropdownLink>
                </DropdownItem>
                <DropdownItem>
                  <DropdownLink href="#">CSS</DropdownLink>
                </DropdownItem>
                <DropdownItem>
                  <DropdownLink href="#">JavaScript</DropdownLink>
                </DropdownItem>
              </DropdownMenu>
            )}
          </LiStyle>
          <LiStyle><Link to="/contact" style={{ textDecoration: 'none' }}><AStyle href="Contact.js">Contact Us</AStyle></Link></LiStyle>
        </UlStyle>
        <LogoStyle>
          <img src={LogoImage} alt="Logo Hotel" />
        </LogoStyle>
        <Booking>
          <ButtonStyle onClick={handleOpenPopUp}>Book A Room</ButtonStyle>
        </Booking>
      </NavStyle>
      {isPopUpOpen && <PopUpAvailability onClose={handleClosePopUp} />}
    </>
  );
};

export default Header;
