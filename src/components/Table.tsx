import { ColDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { CountryTable } from "../style/App.style";
import { Grid } from "@mui/material";
import { Pagination } from "./Pagination";

type Language = {
  name: string;
};

type Continent = {
  name: string;
};

type Country = {
  code: string;
  emoji: string;
  name: string;
  continent: Continent;
  languages: Language[];
  currency: string;
};

type Props = {
  countries: Country[];
};

const defaultColDef = {
  suppressMovable: true,
  minWidth: 100,
  cellStyle: {
    justifyContent: "left",
  },
  headerClass: "header__cell",
};

export const Table = (props: Props) => {
  console.log(props.countries);
  const gridRef = useRef<AgGridReact>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const columnDefs: ColDef[] = useMemo(
    () => [
      {
        field: "code",
        headerName: "Code",
        flex: 1,
      },
      {
        field: "emoji",
        headerName: "Flag",
        flex: 1,
      },
      {
        field: "name",
        headerName: "Name",
        flex: 1,
      },
      {
        field: "continent.name",
        headerName: "Continent",
        flex: 1,
      },
      {
        field: "languages",
        headerName: "Language",
        valueGetter: (params) => params?.data?.languages[0]?.name,
        flex: 1,
      },
      {
        field: "currency",
        headerName: "Currency",
        flex: 1,
      },
    ],
    []
  );

  const onPaginationChanged = useCallback(() => {
    if (gridRef?.current?.api) {
      const currPage = gridRef.current.api.paginationGetCurrentPage() + 1;
      const totPages = gridRef.current.api.paginationGetTotalPages();
      setCurrentPage(currPage);
      setTotalPages(totPages);
    }
  }, []);

  return (
    <Grid>
      <Grid>
        <div
          className="ag-theme-material"
          style={{ height: "500px", width: "100%" }}
        >
          <CountryTable
            ref={gridRef}
            rowData={props.countries || []}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            rowHeight={50}
            paginationPageSize={10}
            suppressPaginationPanel
            domLayout="autoHeight"
            suppressRowClickSelection
            pagination
            onPaginationChanged={onPaginationChanged}
          />
        </div>
      </Grid>
      <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => gridRef?.current?.api.paginationGoToPage(page)}
          goPrev={() => gridRef?.current?.api.paginationGoToPreviousPage()}
          goNext={() => gridRef?.current?.api.paginationGoToNextPage()}
          siblingCount={1}
      />
    </Grid>
  );
};
