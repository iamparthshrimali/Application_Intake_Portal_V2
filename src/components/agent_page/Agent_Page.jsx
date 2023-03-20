import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import FileUploadIcon from '@mui/icons-material/FileUpload';

function Agent_Page() {
  let [status, setStatus] = useState("begin");
  return (
    <div className="agent_page  " >
      <div className="containerr px-2 ">
        <div className='shadow-lg  p-8  w-screen'>
          <div className="heading">
            <h2>Submit New Application</h2>
          </div>
          <div className='flex'>
            <div className='w-1/4 mt-4 flex flex-col items-end justify-center'>
              <div className='flex  justify-center items-center'>
                <div className='rounded-full border-2  border-black border-solid flex justify-center' style={{ width: "30px" }} >
                  1
                </div>
                <div className='bg-black ' style={{ height: "5px", width: "100px" }}>

                </div>
              </div>
              <div className='px-4 text-orange-500'>
                Application Progress 1
              </div>
            </div>
            <div className='w-1/4 mt-4 flex flex-col  items-start justify-center'>
              <div className='flex  justify-center items-center'>
                <div className='bg-black ' style={{ height: "5px", width: "150px" }}>

                </div>
                <div className='rounded-full border-2  border-black border-solid flex justify-center' style={{ width: "30px" }} >
                  2
                </div>
                <div className='bg-black ' style={{ height: "5px", width: "150px" }}>

                </div>
              </div>
              <div className='flex justify-center w-full text-orange-500'>
                Application Progress 2
              </div>
            </div>
            <div className='w-1/4 mt-4 flex flex-col  items-start justify-center'>
              <div className='flex  justify-center items-center'>
                <div className='bg-black ' style={{ height: "5px", width: "150px" }}>

                </div>
                <div className='rounded-full border-2  border-black border-solid flex justify-center' style={{ width: "30px" }} >
                  3
                </div>
                <div className='bg-black ' style={{ height: "5px", width: "150px" }}>

                </div>
              </div>
              <div className='flex justify-center w-full text-orange-500'>
                Application Progress 3
              </div>
            </div>
            <div className='w-1/4 mt-4 flex flex-col  items-start justify-center'>
              <div className='flex  justify-center items-center'>

                <div className='bg-black ' style={{ height: "5px", width: "150px" }}>

                </div>
                <div className='rounded-full border-2  border-black border-solid flex justify-center' style={{ width: "30px" }} >
                  3
                </div>

              </div>
              <div className='flex justify-center w-full text-orange-500'>
                Application Progress 3
              </div>
            </div>

          </div>

        </div>

        {/* -------------------------- */}
        <div className="bottom mt-10 px-8 py-4 flex flex-col shadow-md  gap-2 md:flex-row sm:flex-row   ">
          <div className="left w-1/2 sm:w-full ">
            <div className="heading px-2 bg-gray-100 text-orange-400 text-bold">
              <h2>Enter the follwing details</h2>
            </div>
            <div className="form " style={{ width: "80%" }}>
              <form action="">
                <div className="id">
                  <TextField id="standard-basic" label="Custmore  id" className='w-full' variant="standard" />
                </div>
                <div className="fname">
                  <TextField id="standard-basic" label="Custmore first name" className='w-full' variant="standard" />
                </div>
                <div className="lname">
                  <TextField id="standard-basic" label="Customer last name" className='w-full' variant="standard" />
                </div>
                <div className="address">
                  <TextField id="standard-basic" label="Customer Address" className='w-full' variant="standard" />
                </div>
                <div className="city">
                  <TextField id="standard-basic" label="Customer City" className='w-full' variant="standard" />
                </div>
                <div className="state">
                  <TextField id="standard-basic" label="Customer Sate" className='w-full' variant="standard" />
                </div>
                <div className="submit flex justify-center mt-4" variant="outlined">
                <Button type='submit' variant="outlined">Submit</Button>
                </div>
              
              </form>
            </div>
          </div>

          <div className="right w-1/2 sm:w-full">
            <div className=''>
              <div className="heading px-2 bg-gray-100 text-orange-400 text-bold">
                <h2>File to upload</h2>
              </div>
              <div className='flex flex-col items-center mt-5'>
                <div className="flex flex-col items-center mt-2 bg-gray-100 gap-4 w-1/2 py-4">
                  <div className="icon">
                    <FileUploadIcon />
                  </div>
                  <div className="small-heading">
                    PSEG installation form
                  </div>
                  <div className="upload-btn ">
                    <label className='w-full bg-transparent hover:bg-orange-500  text-orange-500 font-semibold hover:text-white py-2 px-4 border border-orange-500  hover:border-transparent rounded'>Upload <input type="file" size="60" style={{ display: "none", width: "100%", heigth: "100%" }} /></label>
                  </div>
                  <div className="description">
                    <p>File number limit : 1</p>
                    <p>size limit : 10MB</p>
                    <p>Allowed Type: PDF</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>




    </div>
  )
}

export default Agent_Page