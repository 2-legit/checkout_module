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

const ULWrapper = styled.ul`
  padding-left: 0px;
`;

const SpanContainer = styled.span`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const LIWrapper = styled.li`
  list-style-type: none;
  float:left;
  flex: 1;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  font-size: 14px;
  line-height: 1.43;
  color: #484848;
`;

const GuestButton = styled.button`
  float:right;
  border-radius: 50%;
  border: 1px solid rgb(0, 132, 137);
  color: rgb(0, 132, 137);
`;

const Guests = (props =>

  <div>
    <GuestWrapper>
      Guests
      </GuestWrapper>
    {props.guestCount + props.childrenCount > 1
      ? <AddGuestWrapper onClick={() => { props.showGuestList() }}>{props.guestCount + props.childrenCount} Guests</AddGuestWrapper>
      : <AddGuestWrapper onClick={() => { props.showGuestList() }}>{props.guestCount + props.childrenCount} Guest</AddGuestWrapper>}
    {props.listOpen ? <ULWrapper className="dd-list">
      <SpanContainer>
        <LIWrapper>Adults</LIWrapper>
        <GuestButton onClick={() => (props.subGuest())}>-</GuestButton>&nbsp;{props.guestCount}&nbsp;
          <GuestButton onClick={() => (props.addGuest())}>+</GuestButton>
      </SpanContainer>
      <SpanContainer>
        <LIWrapper>Children</LIWrapper>
        <GuestButton onClick={() => (props.subChild())}>-</GuestButton>&nbsp;{props.childrenCount}&nbsp;
          <GuestButton onClick={() => (props.addChild())}>+</GuestButton>
      </SpanContainer>
      <SpanContainer>
        <LIWrapper>Infants</LIWrapper>
        <GuestButton onClick={() => props.subInfant()}>-</GuestButton>&nbsp;{props.infantCount}&nbsp;
          <GuestButton onClick={() => props.addInfant()}>+</GuestButton>
      </SpanContainer>
    </ULWrapper> : <React.Fragment></React.Fragment>}
  </div>
);

export default Guests;
