import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

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

export default function DataTable() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      let resp = await fetch("http://localhost:3000/HighRadius/Display");
      resp = await resp.json();
      console.log(resp);
      for (let i = 0; i < resp.length; i++) {
        resp[i].id = i;
      }
      setData(resp);
    })();
  }, []);
  return (
    <div style={{ height: 608, width: "100%" }}>
      <DataGrid
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
        pageSize={15}
        rowsPerPageOptions={[15]}
      />
    </div>
  );
}
