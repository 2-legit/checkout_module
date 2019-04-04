import React from 'react';
import styled from 'styled-components';

const CostWrapper = styled.section`
  display: flex;
  font-size: 22px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-weight: 800;
  color: rgb(72, 72, 72);
  overflow-wrap: break-word;
  line-height: 1.44444em;
  flex-direction: row; 
`;

const NightWrapper = styled.section`
  display: flex;
  font-size: 12px !important;
  font-weight: 600 !important;
  flex-direction: row;
  padding-left: 5px;
`;

const Cost = (props) => {
  return (
    <CostWrapper>
      <span>
          ${props.room.cost}
      </span>
      <span>
        <NightWrapper>
          per night
        </NightWrapper>
      </span>
    </CostWrapper>
  );
};


export default Cost;
