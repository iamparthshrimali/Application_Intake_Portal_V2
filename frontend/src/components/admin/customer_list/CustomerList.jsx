import AddIcon from '@material-ui/icons/Add';
import GetAppIcon from '@material-ui/icons/GetApp';
import axios from 'axios';
import MaterialTable from 'material-table';
import React, { useEffect, useState } from 'react';


const CustomerList = () => {
  
  const [tableData, setTableData] = useState([])
  let [tableUpdated,setTableUpdated]=useState(false);
  const columns = [
    { title: "Email", field:"email", sorting: true, filtering: true, headerStyle: { color: "#fff" } },
    { title: "First Namer", field: "fname", filterPlaceholder: "filter" },
    {
      title: "Last Name", field: "lname"
    },
    { title: "Address", field: "address"},
    { title: "City", field: "city",filterPlaceholder:"filter" },
    { title: "State", field: "state",
     headerStyle: { color: "#fff" } },
  ]

  useEffect(() => {
      axios.get("http://localhost:8080/getCustomersList").then(res => setTableData(res.data)).catch((err)=>alert("Error Occured"))
  },[tableUpdated]);
  return (
    <>
      <MaterialTable columns={columns} data={tableData}  title="Customers Information"
        editable={{
          onRowAdd: (newRow) => new Promise((resolve, reject) => {
            // setTableData([...tableData, newRow])
            // axios.post("http://localhost:8080/addCustomer", newRow).then(()=>;
            //resolve();
            // setTimeout(() => resolve(), 500)]
            async function makePostRequest() {
              try {
                axios.post("http://localhost:8080/addCustomer", newRow);
                // // By hook or crook i wanted to react know that table is updated
                tableUpdated ? setTableUpdated(false) : setTableUpdated(true)
                await resolve(); 
              } catch (error) {
                // handle error
                alert("error occured")
                reject()
              }
            }
            makePostRequest();
          }),
          onRowUpdate: (newRow, oldRow) => new Promise((resolve, reject) => {
            axios.post("http://localhost:8080/updateCustomer",newRow).then(()=>{     
            resolve();
            // By hook or crook i wanted to react know that table is updated
              tableUpdated ? setTableUpdated(false) : setTableUpdated(true);      
            });
          }),
          onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
            axios.get(`http://localhost:8080/deleteCustomer?email=${selectedRow.email}`).then(()=>{
            resolve();
            // By hook or crook i wanted to react know that table is updated
              tableUpdated ? setTableUpdated(false) : setTableUpdated(true);      
            });
          })
        }}
        actions={[
          {
            icon: () => <GetAppIcon />,
            tooltip: "Click me",
            onClick: (e, data) => console.log(data),
            // isFreeAction:true
          }
        ]}
        onSelectionChange={(selectedRows) => console.log(selectedRows)}
        options={{
          sorting: true, search: true,
          searchFieldAlignment: "right", searchAutoFocus: true, searchFieldVariant: "standard",
          filtering: true, paging: true, pageSizeOptions: [2, 5, 10, 20, 25, 50, 100], pageSize: 5,
          paginationType: "stepped", showFirstLastPageButtons: true, paginationPosition: "both", exportButton: true,
          exportAllData: true, exportFileName: "TableData", addRowPosition: "first", actionsColumnIndex: -1, selection: true,
          showSelectAllCheckbox: true, showTextRowsSelected: true,
          // selectionProps: rowData => ({
          //   disabled: rowData.age === null,
            // color:"primary"
          // }),
          grouping: true, columnsButton: true,
          rowStyle: (data, index) => index % 2 === 0 ? { background: "#f5f5f5" } : null,
          headerStyle: { background: "#c084fc",color:"#fff"}
        }}
       
        icons={{ Add: () => <AddIcon /> }} />
  </>
  );
}

export default CustomerList


