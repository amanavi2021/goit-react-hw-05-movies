import styled from '@emotion/styled';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 20px;
`;

export const SearchFormInput = styled.input`
  display: inline-block;
// width: 100%;
//   font: inherit;
  font-size: 20px;
  border:  2px solid black;
  border-radius: 5px;
  outline: none;
  padding: 3
  padding-left: 4px;
  padding-right: 4px;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);


  &::placeholder {
  font: inherit;
  font-size: 16px;
  }
  &:hover, &:focus {
    border-color: skyblue;
  }

`;

export const SearchFormButton = styled.button`
  display: inline-block;
  width: 65px;
  height: 30px;
  border: 1px solid black;
  border-radius: 5px;
  margin-left: 8px;
  font-size: 15px;
  
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
   
  &:hover {
    opacity: 1;
  }
`;