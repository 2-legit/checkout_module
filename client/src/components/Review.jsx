import React from 'react';
import styled from 'styled-components';

const ReviewWrapper = styled.section`
  overflow-wrap: break-word;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.33333em;
  color: rgb(72, 72, 72);
  margin: 0px;
  display: flex;
  padding-bottom: 25px;
  margin-bottom: 35px;
  border-bottom: 1px solid #e4e4e4;
`;


const Review = (props) => {
  return (
    <div>
      <ReviewWrapper>
        Reviews {props.room.reviews}
      </ReviewWrapper>
    </div>
  );
};


export default Review;
