import React, { useEffect, useState } from "react";
import "./docketForm.css";
function DocketForm() {
  const [formData, setFormData] = useState({
    name: "",
    startTime: "",
    endTime: "",
    hoursWorked: "",
    ratePerHour: "",
    supplier: "",
    purchaseOrder: "",
  });
  const [supplierData, setSupplierData] = useState([]);
  const [purchaseOrderData, setPurchaseOrderData] = useState([]);
  const [docketList, setDocketList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/data")
      .then((res) => res.json())
      .then((data) => setSupplierData(data))
      .catch((err) => console.log(err));
  }, []);

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSupplierChange = (event) => {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value,
    });
    const filterPO = supplierData.filter((item) => item.supplier == value);
    setPurchaseOrderData(filterPO);
  };
  const handlePOChange = (event) => {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a docket object
    const filterDescriptions = purchaseOrderData.filter(
      (item) => item.description == formData.purchaseOrder
    );
    const obj = { PoNumber: filterDescriptions[0].PoNumber,description:filterDescriptions[0].description };
    const docket = { ...formData, ...obj };
    console.log(docket);
    // Display the docket on the page (you can also send it to the server)
    const headers = new Headers({
      "Content-Type": "application/json", // Adjust content type as needed
    });

    // Create the request options
    const requestOptions = {
      method: "POST",
      headers: headers,
      body: JSON.stringify(docket), // If sending data in the request body
    };
    fetch("http://localhost:5000/api/add-docket", requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Parse the response as JSON
      })
      .then((data) => {
        console.log("Response Data:", data);
      })
      .catch((error) => {
        console.error("Request Error:", error);
      });
    setDocketList([...docketList, docket]);

    // Clear the form for the next entry
    setFormData({
      name: "",
      startTime: "",
      endTime: "",
      hoursWorked: "",
      ratePerHour: "",
      supplier: "",
      purchaseOrder: "",
    });
  };
  document.title="Docket Form"
  return (
    <div style={{marginTop:"4rem"}}>
      <section className="contact-wrap">
        <form action="" className="contact-form" onSubmit={(e)=>handleSubmit(e)}>
          <div className="zeile">
            <div className="input-block">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-block">
              <label htmlFor="hours-worked">No. of Hours Worked:</label>
              <input
                type="number"
                id="hoursWorked"
                required
                value={formData.hoursWorked}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="zeile">
            <div className="input-block">
              <label htmlFor="start-time">Start Time:</label>
              <input
                type="time"
                id="startTime"
                required
                value={formData.startTime}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-block">
              <label htmlFor="end-time">End Time:</label>
              <input
                type="time"
                id="endTime"
                required
                value={formData.endTime}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="zeile">
            <div className="input-block">
              <label htmlFor="supplier">Supplier Name:</label>
              <select
                id="supplier"
                required
                value={formData.supplier}
                onChange={handleSupplierChange}
              >
                <option value="">Select Supplier</option>
                {supplierData.map((item) => {
                  return (
                    <option key={item.PoNumber} value={item.supplier}>
                      {item.supplier}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="input-block">
              <label htmlFor="purchase-order">Purchase Order:</label>
              <select
                id="purchaseOrder"
                required
                value={formData.purchaseOrder}
                onChange={handlePOChange}
              >
                <option value="">Select Purchase Order</option>
                {purchaseOrderData.map((item) => {
                  return (
                    <option
                      key={item.PoNumber}
                      data-value1={item.description}
                      data-value2={item.PoNumber}
                      value={item.description}
                    >
                      {item.description}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="zeile">

          <div className="input-block">
            
              <label htmlFor="rate-per-hour">Rate Per Hour:</label>
              <input
                type="number"
                id="ratePerHour"
                required
                value={formData.ratePerHour}
                onChange={handleInputChange}
              />
          </div>
          </div>
          
        <input type="submit" placeholder="Create Docket" style={{borderRadius:"5px"}}/>
        </form>
      </section>
    </div>
  );
}

export default DocketForm;
