Docket Creation Form
This project allows users to create a docket by entering specific information and selecting a supplier and purchase order from a CSV file. The docket will be stored and displayed in a list with the entered details.

Getting Started
These instructions will help you set up and run the Docket Creation Form on your local machine.

Prerequisites
Node.js: Make sure you have Node.js installed on your system. You can download it from here.

Clone Repositry

git clone https://github.com/Harsh-Jaisw/prashva-holding.git

Install the Node_Modules

npm install

Start the App 

npm start


Usage
Once the development server is running, open a web browser and go to https://6532528f816eb000089a024d--gorgeous-unicorn-196a7e.netlify.app/ to access the Docket Creation Form.

Fill in the form with the following information:

Name
Start time
End time
No. of hours worked
Rate per hour
Supplier Name
Purchase order
To select a supplier, use the dropdown list provided. The supplier data is fetched from a CSV file.

After selecting a supplier, the purchase order dropdown will populate with options filtered by the selected supplier.

When you choose a purchase order, the form will display the PO Number and Description.

Click the "Submit" button to create a docket. The docket will be added to the list of dockets on the page, along with the entered information.


And In the All Docket You can see your added dockets which are stored in the database.


Thank You 🚀