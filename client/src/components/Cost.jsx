import React from 'react';
import styled from 'styled-components';

const CostWrapper = styled.section`
  float:left;
  font-size: 22px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-weight: 800;
  color: rgb(72, 72, 72);
  overflow-wrap: break-word;
  line-height: 1.44444em; 
`;

const NightWrapper = styled.section`
  float: left;
  font-size: 12px !important;
  font-weight: 600 !important;
`;

const Cost = (props) => {
  return (
    <div>
      <span>
        <CostWrapper>
          ${props.room.cost}
        </CostWrapper>
      </span>
      <span>
        <NightWrapper>
          per night
        </NightWrapper>
      </span>
    </div>
  );
};


export default Cost;
