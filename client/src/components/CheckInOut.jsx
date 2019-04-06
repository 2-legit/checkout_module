import React from 'react';
import styled from 'styled-components';

const CheckInOutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid #e4e4e4;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  color: rgb(72, 72, 72) !important;
  font-size: 14px !important;
`;

const DateWrapper = styled.div`
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-size: 12px !important;
  font-weight: 600 !important;
  color: rgb(72, 72, 72) !important;
`;

const CheckInOut = (props) => {
  const { checkIn, checkOut } = props;
  return (
    <DateWrapper>
      Dates
      <CheckInOutWrapper>
        CheckIn {checkIn} > Checkout {checkOut}
      </CheckInOutWrapper>
    </DateWrapper>
  );
};

export default CheckInOut;
