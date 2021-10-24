import React from "react"

import styled from "styled-components"
import Paragraph from "../../Text/Paragraph"

const RoleTableStyle =  styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;

    ${Paragraph} {
        margin-right: 30px;
    }
`;


function RoleTable(props) {
  return (
      <RoleTableStyle>
      <Paragraph>
          <strong>Roles</strong>
          <br/>
          {props.task.first}
          <br/>
          {props.task.second}
          <br/>
          {props.task.third}
      </Paragraph>
     
      <Paragraph>
          <strong>Stack</strong>
          <br/>
          {props.tool.first}
          <br/>
          {props.tool.second}
          <br/>
          {props.tool.third}
      </Paragraph>
      </RoleTableStyle>
  );
}

export default RoleTable

