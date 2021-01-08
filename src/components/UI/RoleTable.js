import styled from "styled-components/macro";
import "typeface-lato"
import Paragraph from '../text/Paragraph'

const RoleTable =  styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;

    ${Paragraph} {
        margin-right: 30px;
    }
`;

export default RoleTable;
