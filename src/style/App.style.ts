import styled from "@emotion/styled";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.min.css"; // Optional theme CSS
import "ag-grid-community/styles/agGridAlpineFont.min.css"; // Optional theme CSS
import { Button } from "@mui/material";

export const CountryTable = styled(AgGridReact)`
  .ag-row-selected {
    background-color: red;
    color: #ffffff;
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.blur &&
    `
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    border-radius: inherit;
  `}
`;

export const PaginationWrapper = styled.div`
  display: inline-flex;
  width: 100%;
  padding: 35px 0px;
  justify-content: space-around;
  align-items: center;
  .pageButtonWrapper {
    display: inline-flex;
    gap: 20px;
    .pageButton {
      background-color: #f7f9fc;
      color: #6f7480;
      border: none;
      height: 30px;
      width: 30px;
      border-radius: 6px;
      font-weight: 500;
      cursor: pointer;
    }
    .pageButtonActive {
      background-color: #f1f9ff;
      color: #0353a0;
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
    color: #6f7480;
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
  border-radius: "8px";
  padding: "10px 20px";
  color: #ffffff;
  font-size: "16px";
  font-weight: 500;
  transition: scale 300ms;
  line-height: "28px";
  :hover {
    color: #ffffff;
  }
  :active {
    scale: 0.9;
  }

  &&.Mui-disabled {
    color: #646464;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const PageButton = styled.button`
  background-color: #181d1f;
  color: #6f7480;
  border: none;
  height: 30px;
  width: 30px;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
`;
