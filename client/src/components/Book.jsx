import React from 'react';
import styled from 'styled-components';

const BookButton = styled.button`
  border-radius: 4px;
  border-width: 2px;
  border-style: solid;
  background: rgb(255, 90, 95);
  border-color: transparent;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--font-button-font-family, Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif) !important;
  font-size: 14px;
  font-weight: 800;
  height: 46px;
  width: 100%;
  cursor: pointer;
`;


const Book = () => {
  return (
    <div>
      <BookButton>
        Book
      </BookButton>
    </div>
  );
};


export default Book;
