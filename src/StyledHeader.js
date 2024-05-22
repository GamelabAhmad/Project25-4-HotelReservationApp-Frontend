import styled from 'styled-components';

export const NavStyle = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    padding: 10px 20px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 1); /* Efek timbul */
`;

export const LogoStyle = styled.h3`
    display: flex;
    margin: 0;
    margin-right: 310px;
    color: #fff;
    img {
        height: 90px;
        width: 90px;
    }
`;

export const UlStyle = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    padding-left: 10px;
`;

export const Booking = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    color: white;
    img {
        height: 20px;
        width: 20px;
        padding-right: 20px;
    }
`;

export const AStyle = styled.a`
    text-decoration: none;
    color: #fff;
    font-size: 18px;
    transition: color 0.3s ease;

    &:hover {
        color: #ffcc00;
    }
`;

export const DropdownMenu = styled.ul`
    position: absolute;
    top: calc(100% + 0px);
    left: -17px; /* Mengatur posisi ke kiri */
    background-color: #333;
    list-style: none;
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 5px;
    margin: 0;
    display: none;
`;

export const DropdownItem = styled.li`
    margin: 5px 0;
`;

export const DropdownLink = styled.a`
    color: #fff;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.3s ease;

    &:hover {
        color: #ffcc00;
    }
`;

export const LiStyle = styled.li`
    margin-left: 20px;
    position: relative;

    &:hover {
        ${DropdownMenu} {
            display: inline-block;
        }
    }
`;

export const ButtonStyle = styled.button`
    background-color: blue;
    color: white;
    border: none;
    padding: 13px 20px;
    margin-left: 0px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    border-radius: 5px;

    &:hover {
        background-color: white;
        color: blue;
    }
`;