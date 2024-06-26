import { Link } from "react-router-dom"
import styled from "styled-components";

function Footer(){
    return(
        <FooterStyle>
            <CorpList>
                <li>
                    <Link to="/">이용약관</Link>
                </li>
                <li>
                    <Link to="/">개인정보처리방침</Link>
                </li>
                <li>
                    <Link to="/">고객센터</Link>
                </li>
            </CorpList>
            <p  className="copyright">copyright ⓒ 2024 company.                                                                                                                                                All right reserved</p>
        </FooterStyle>
    )
}
const FooterStyle = styled.footer`
    background-color : ${(props) => props.theme.colors.gray[100]};
    padding : 20px 0;
    text-align : center;
    // font-family: "Noto Serif KR", serif;
    .copyright{
        margin-top:20px; 
        opacity:0.5;
    }
`
const CorpList = styled.ul`
    display:flex;
    justify-content: center;
    li{
        &::before{
            content:'|';
            margin: 0 3px
        }
        &:first-child::before{
            content:''; //첫번째 li에는 '|'표시 안함
        }
    }
    a{
        // display:block;
        padding:10px;
    }
`

export default Footer