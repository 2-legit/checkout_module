import React from 'react';
import styled from 'styled-components';

const AddGuestWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid #e4e4e4;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  color: rgb(72, 72, 72) !important;
  font-size: 14px !important;
  height: 36px;
  margin-bottom: 25px;
`;

const GuestWrapper = styled.div`
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-size: 12px !important;
  font-weight: 600 !important;
  color: rgb(72, 72, 72) !important;
`;

const Guests = (props) => {
  return (
    <GuestWrapper>
      Guests
      <AddGuestWrapper>
        <button onClick={() => (props.subGuest())}>-</button>
        Guests {props.guestCount}
        <button onClick={() => (props.addGuest())}>+</button>
      </AddGuestWrapper>
    </GuestWrapper>
  );
};

export default Guests;
