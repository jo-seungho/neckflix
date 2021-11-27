import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export default createGlobalStyle`
    ${reset}
    *{
        box-sizing:border-box;
    }
    body{
        background-color: #2D2827;
        color: #f2f2f2;
        margin:60px 10px 0px 10px; // top right bottom left
    }
    a{
        all: unset;
    }
`;
