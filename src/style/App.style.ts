import styled from '@emotion/styled';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-material.min.css'; // Optional theme CSS
import 'ag-grid-community/styles/agGridAlpineFont.min.css'; // Optional theme CSS
import { Button } from '@mui/material';

export const CountryTable = styled(AgGridReact)`


`;

export const PaginationWrapper = styled.div`
  display: inline-flex;
  width: 100%;
  padding: 35px 30px;
  justify-content: space-between;
  align-items: center;
  .pageButtonWrapper {
    display: inline-flex;
    gap: 20px;
    .pageButton {
      background-color: #F7F9FC;
      color: #6F7480;
      border: none;
      height: 30px;
      width: 30px;
      border-radius: 6px;
      font-weight: 500;
      cursor: pointer;
    }
    .pageButtonActive {
      background-color: #F1F9FF;
      color: #0353A0;
      font-weight: 500;
      display: inline-block;
      border: none;
      height: 30px;
      width: 30px;
      border-radius: 6px;
      cursor: pointer;
    }
  }
  .dots {
    color: #6F7480;
  }
  @media screen and (max-width: 600px) {
    padding: 10px 5px;
  }
  @media screen and (max-width: 900px) {
    .pageButtonWrapper {
      gap: 10px;
    }
  }
`;

export const CustomButton = styled(Button)`
  text-transform: none;
  border-radius: '8px';
  padding: '10px 20px';
  background-color: '#4C9FED';
  color: '#FFFFFF';
  font-size: '16px';
  font-weight: 500;
  transition: scale 300ms;
  line-height:'28px';;
  :hover {
    background-color: '#4C9FED';
    color: '#FFFFFF';
  }
  :active {
    scale: .9
  };
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const PageButton = styled.button`
  background-color: #F7F9FC;
  color: #6F7480;
  border: none;
  height: 30px;
  width: 30px;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
`;