import styled from 'styled-components';

const Footer = styled.div`
    grid-area: footer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    background-color: #fff;
    color: black
`;

const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    background-color: #fff;
    .box {
        margin: 2px;
    }
    .topic {
        margin-bottom: 5px;
        border-bottom: 3px solid #ccc;
    }
`;

const SocialMedia = styled.div`
    display: flex;
    align-items: center;
    height: 100px;
    background-color: #fff;
    padding-left: 100px;
    padding-right: 100px;
    border-left: 3px solid #ccc;
    .box {
        margin: 5px;
    }
`;

export { Footer, ContactInfo, SocialMedia };