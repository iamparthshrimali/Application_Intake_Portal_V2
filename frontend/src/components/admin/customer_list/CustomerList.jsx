import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MaterialTable from 'material-table'
import GetAppIcon from '@material-ui/icons/GetApp';
import AddIcon from '@material-ui/icons/Add';


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
      axios.get("http://localhost:8080/getCustomersList").then(res => setTableData(res.data)).catch((err)=>setTableData(false))
  },[tableUpdated]);
  return (
    <>
      <MaterialTable columns={columns} data={tableData}  title="Customers Information"
        editable={{
          onRowAdd: (newRow) => new Promise((resolve, reject) => {
            // setTableData([...tableData, newRow])
            // setTimeout(() => resolve(), 500)]
            async function makePostRequest() {
              try {
                const response =  axios.post("http://localhost:8080/addCustomer", newRow);
                // // By hook or crook i wanted to react know that table is updated
                tableUpdated ? setTableUpdated(false) : setTableUpdated(true)
                await resolve(); 
              } catch (error) {
                // handle error
                alert("error occured")
                resolve()
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
          //   disabled: rowData.age == null,
            // color:"primary"
          // }),
          grouping: true, columnsButton: true,
          rowStyle: (data, index) => index % 2 === 0 ? { background: "#f5f5f5" } : null,
          headerStyle: { background: "rgb(249 115 22)",color:"#fff"}
        }}
       
        icons={{ Add: () => <AddIcon /> }} />
  </>
  );
}

export default CustomerList








// const [customers, setCustomers] = useState(false)
// useEffect(() => {
//   axios.get("http://localhost:8080/getCustomersList").then(res => setCustomers(res.data)).catch((err)=>setCustomers(false))
  
//   console.log(customers)
// }, [customers])
// const printTable = () => {
//   return <>
//     <div class="container mx-auto px-4 sm:px-8 ">
//       <div class="py-8">
//         <div>
//           <h2 class="text-2xl font-semibold leading-tight">Customers List</h2>
//         </div>
//         <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto  " >
//           <div
//             class=" inline-block min-w-full shadow-md rounded-lg overflow-hidden" 
//           >
//             <table class="min-w-full leading-normal  ">
//               <thead>
//                 <tr>
//                   <th
//                     class="px-5 py-3 border-b-2 bg-orange-300  text-left text-xs font-semibold text-gray-700 uppercase tracking-wider "
//                   >
//                     Email
//                   </th>
//                   <th
//                     class="px-5 py-3 border-b-2 bg-orange-300  text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
//                   >
//                     First Name
//                   </th>
//                   <th
//                     class="px-5 py-3 border-b-2 bg-orange-300  text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
//                   >
//                     Last Name
//                   </th>
//                   <th
//                     class="px-5 py-3 border-b-2 border-orange-200 bg-orange-300 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
//                   >
//                     Address
//                   </th>
//                   <th
//                     class="px-5 py-3 border-b-2 border-orange-200 bg-orange-300 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
//                   >
//                     City
//                   </th>
//                   <th
//                     class="px-5 py-3 border-b-2 border-orange-200 bg-orange-300 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
//                   >
//                     state
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {
//                   customers.map((customer)=>{
//                     return  <>
//                         <tr>
//                   <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//                     <div class="flex">

//                       <div class="ml-3">
//                         <p class="text-gray-900 whitespace-no-wrap">
//                          {customer.email}
//                         </p>
//                       </div>
//                     </div>
//                   </td>
//                   <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//                     <div class="flex">

//                       <div class="ml-3">
//                         <p class="text-gray-900 whitespace-no-wrap">
//                         {customer.fname}
//                         </p>
//                       </div>
//                     </div>
//                   </td>
//                   <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//                     <p class="text-gray-900 whitespace-no-wrap">{customer.lname}</p>
//                   </td>
//                   <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//                     <div style={{width:"120px"}}>
//                     <p class="text-gray-900 whitespace-no-wrap">{customer.address}</p>
//                     </div>
                  
//                   </td>
//                   <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//                     <div style={{width:"120px"}}>
//                     <p class="text-gray-900 whitespace-no-wrap">{customer.city}</p>
//                     </div>
                  
//                   </td>
//                   <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//                     <div style={{width:"120px"}}>
//                     <p class="text-gray-900 whitespace-no-wrap">{customer.state}</p>
//                     </div>
                  
//                   </td>

//                 </tr>
//                       </>
//                   })
//                 }
              

//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   </>
// }

// return (
//   <>
//     {
//      customers ?  printTable() :"No customers are exist" 
//   }

//   </>
// )