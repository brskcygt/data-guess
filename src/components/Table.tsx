import { ColDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { useCallback, useMemo, useRef, useState } from "react";
import { CountryTable } from "../style/App.style";
import { Grid } from "@mui/material";
import { Pagination } from "./Pagination";
import { TableSearch } from "./TableSearch";

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

  const onGridReady = (event: any): void => {
    const nodes = event.api.getRenderedNodes();
    if (nodes.length) {
      nodes[9].setSelected(true);
    }
  };

  const onModelUpdated = () => {
    const nodes = gridRef?.current?.api.getRenderedNodes();
    if (nodes.length > 0) {
      let selectedRowIndex = 9;

      if (nodes.length < 10) {
        selectedRowIndex = nodes.length - 1;
      }

      const selectedNode = nodes[selectedRowIndex];
      const previouslySelectedNode =
        gridRef?.current?.api.getSelectedNodes()[0];

      if (selectedNode !== previouslySelectedNode) {
        selectedNode.setSelected(true);
      }
    }
  };

  const onRowClicked = (event: any): void => {
    const selectedNode = event.node;
    const isSelected = selectedNode.isSelected();

    if (isSelected) {
      selectedNode.setSelected(false);
    } else {
      selectedNode.setSelected(true);
    }
  };

  return (
    <Grid display="flex" flexDirection="column" gap={5}>
      <Grid
        display="flex"
        alignItems="center"
        justifyContent="center"
        padding="20px 0"
      >
        <TableSearch gridRef={gridRef} />
      </Grid>
      <Grid>
        <div className="ag-theme-alpine-dark">
          <CountryTable
            ref={gridRef}
            rowData={props.countries || []}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            rowHeight={50}
            paginationPageSize={15}
            suppressPaginationPanel
            domLayout="autoHeight"
            pagination
            suppressRowClickSelection
            onPaginationChanged={onPaginationChanged}
            rowSelection="single"
            onGridReady={onGridReady}
            onModelUpdated={onModelUpdated}
            onRowClicked={onRowClicked}
          />
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) =>
            gridRef?.current?.api.paginationGoToPage(page)
          }
          goPrev={() => gridRef?.current?.api.paginationGoToPreviousPage()}
          goNext={() => gridRef?.current?.api.paginationGoToNextPage()}
          siblingCount={1}
        />
      </Grid>
    </Grid>
  );
};
