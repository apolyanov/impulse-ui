import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";

const rows: GridRowsProp = [
  { id: 1, col1: "Hello", col2: "World" },
  { id: 2, col1: "DataGridPro", col2: "is Awesome" },
  { id: 3, col1: "MUI", col2: "is Amazing" },
  { id: 4, col1: "MUI", col2: "is Amazing" },
  { id: 5, col1: "MUI", col2: "is Amazing" },
  { id: 6, col1: "MUI", col2: "is Amazing" },
  { id: 7, col1: "MUI", col2: "is Amazing" },
  { id: 8, col1: "MUI", col2: "is Amazing" },
  { id: 9, col1: "MUI", col2: "is Amazing" },
  { id: 10, col1: "MUI", col2: "is Amazing" },
  { id: 11, col1: "MUI", col2: "is Amazing" },
  { id: 12, col1: "MUI", col2: "is Amazing" },
  { id: 13, col1: "MUI", col2: "is Amazing" },
  { id: 14, col1: "MUI", col2: "is Amazing" },
  { id: 15, col1: "MUI", col2: "is Amazing" },
  { id: 16, col1: "MUI", col2: "is Amazing" },
  { id: 17, col1: "MUI", col2: "is Amazing" },
  { id: 18, col1: "MUI", col2: "is Amazing" },
  { id: 19, col1: "MUI", col2: "is Amazing" },
  { id: 20, col1: "MUI", col2: "is Amazing" },
  { id: 21, col1: "MUI", col2: "is Amazing" },
  { id: 22, col1: "MUI", col2: "is Amazing" },
  { id: 23, col1: "MUI", col2: "is Amazing" },
  { id: 24, col1: "MUI", col2: "is Amazing" },
  { id: 25, col1: "MUI", col2: "is Amazing" },
  { id: 26, col1: "MUI", col2: "is Amazing" },
  { id: 27, col1: "MUI", col2: "is Amazing" },
  { id: 28, col1: "MUI", col2: "is Amazing" },
  { id: 29, col1: "MUI", col2: "is Amazing" },
  { id: 30, col1: "MUI", col2: "is Amazing" },
  { id: 31, col1: "MUI", col2: "is Amazing" },
  { id: 32, col1: "MUI", col2: "is Amazing" },
  { id: 33, col1: "MUI", col2: "is Amazing" },
  { id: 34, col1: "MUI", col2: "is Amazing" },
  { id: 35, col1: "MUI", col2: "is Amazing" },
  { id: 36, col1: "MUI", col2: "is Amazing" },
  { id: 37, col1: "MUI", col2: "is Amazing" },
  { id: 38, col1: "MUI", col2: "is Amazing" },
  { id: 39, col1: "MUI", col2: "is Amazing" },
  { id: 40, col1: "MUI", col2: "is Amazing" },
  { id: 41, col1: "MUI", col2: "is Amazing" },
  { id: 42, col1: "MUI", col2: "is Amazing" },
  { id: 43, col1: "MUI", col2: "is Amazing" },
  { id: 44, col1: "MUI", col2: "is Amazing" },
  { id: 45, col1: "MUI", col2: "is Amazing" },
  { id: 46, col1: "MUI", col2: "is Amazing" },
  { id: 47, col1: "MUI", col2: "is Amazing" },
  { id: 48, col1: "MUI", col2: "is Amazing" },
  { id: 49, col1: "MUI", col2: "is Amazing" },
  { id: 50, col1: "MUI", col2: "is Amazing" },
  { id: 51, col1: "MUI", col2: "is Amazing" },
  { id: 52, col1: "MUI", col2: "is Amazing" },
  { id: 53, col1: "MUI", col2: "is Amazing" },
  { id: 54, col1: "MUI", col2: "is Amazing" },
  { id: 55, col1: "MUI", col2: "is Amazing" },
  { id: 56, col1: "MUI", col2: "is Amazing" },
  { id: 57, col1: "MUI", col2: "is Amazing" },
  { id: 58, col1: "MUI", col2: "is Amazing" },
  { id: 59, col1: "MUI", col2: "is Amazing" },
  { id: 60, col1: "MUI", col2: "is Amazing" },
  { id: 61, col1: "MUI", col2: "is Amazing" },
  { id: 62, col1: "MUI", col2: "is Amazing" },
  { id: 63, col1: "MUI", col2: "is Amazing" },
  { id: 64, col1: "MUI", col2: "is Amazing" },
  { id: 65, col1: "MUI", col2: "is Amazing" },
  { id: 66, col1: "MUI", col2: "is Amazing" },
  { id: 67, col1: "MUI", col2: "is Amazing" },
  { id: 68, col1: "MUI", col2: "is Amazing" },
  { id: 69, col1: "MUI", col2: "is Amazing" },
  { id: 70, col1: "MUI", col2: "is Amazing" },
];

const columns: GridColDef[] = [
  { field: "col1", headerName: "Column 1", width: 150 },
  { field: "col2", headerName: "Column 2", width: 150 },
  { field: "col3", headerName: "Column 2", width: 150 },
  { field: "col4", headerName: "Column 2", width: 150 },
  { field: "col5", headerName: "Column 2", width: 150 },
  { field: "col6", headerName: "Column 2", width: 150 },
  { field: "col7", headerName: "Column 2", width: 150 },
  { field: "col8", headerName: "Column 2", width: 150 },
  { field: "col9", headerName: "Column 2", width: 150 },
  { field: "col10", headerName: "Column 2", width: 150 },
  { field: "col11", headerName: "Column 2", width: 150 },
];

const MuiTable = () => {
  return (
    <div style={{ height: 1600, width: 1000 }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
};

export { MuiTable };
