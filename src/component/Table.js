import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { styled } from "@mui/material/styles";

const MyGrid = styled(DataGrid)(({ theme }) => ({
  color: theme.palette.warning,
  "& .MuiDataGrid-cell:hover": {
    color: "primary.main",
  },
  "& .MuiTablePagination-displayedRows": {
    color: "white",
  },
  "& .MuiTablePagination-selectLabel ": {
    color: "white",
  },
  "& .MuiInputBase-root": {
    color: "white",
  },
  "& .MuiTablePagination-selectIcon": {
    color: "white",
  },
  "& .MuiTablePagination-actions": {
    color: "white",
  },
  "& .MuiCheckbox-root": {
    color: "white",
  },
  "& .MuiButtonBase-root": {
    color: "white",
  },
}));

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
    headerClassName: "bg",
  },
  {
    field: "business_code",
    headerName: "Business Code",
    width: 130,
    headerClassName: "bg",
  },
  {
    field: "cust_number",
    headerName: "Costumer No.",
    width: 130,
    headerClassName: "bg",
  },
  {
    field: "name_costumer",
    headerName: "Costumer name",
    width: 130,
    headerClassName: "bg",
  },
  {
    field: "clear_date",
    headerName: "Clear date",
    width: 130,
    headerClassName: "bg",
  },
  {
    field: "business_year",
    headerName: "Business year",
    width: 130,
    headerClassName: "bg",
  },
  {
    field: "doc_id",
    headerName: "Doc Id",
    width: 130,
    headerClassName: "bg",
  },
  {
    field: "posting_date",
    headerName: "Posting Date",
    width: 130,
    headerClassName: "bg",
  },
  {
    field: "due_in_date",
    headerName: "Due Date",
    width: 130,
    headerClassName: "bg",
  },
  {
    field: "baseline_create_date",
    headerName: "Create Date",
    width: 130,
    headerClassName: "bg",
  },
  {
    field: "cust_payment_terms",
    headerName: "Costumer Payment Date",
    width: 130,
    headerClassName: "bg",
  },
  {
    field: "converted_usd",
    headerName: "USD",
    width: 130,
    headerClassName: "bg",
  },
  {
    field: "aging_Bucket",
    headerName: "Aging Bucket",
    width: 130,
    headerClassName: "bg",
  },
];

export default function DataTable({
  setSelected,
  setSelectedRows,
  data,
  pageSize,
  setPageSize,
}) {
  return (
    <div style={{ height: (608 / 10) * pageSize, width: "100%" }}>
      <MyGrid
        checkboxSelection
        rows={data}
        sx={{
          border: "1",
          borderColor: "black",
          color: "white",
          bgColor: "#2d4250",
          "& .bg": {
            backgroundColor: "#2d4250",
          },
        }}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        onSelectionModelChange={(arr) => {
          if (arr.length === 0) {
            setSelected(false);
          } else {
            setSelected(true);
          }
          setSelectedRows(arr);
        }}
      />
    </div>
  );
}
