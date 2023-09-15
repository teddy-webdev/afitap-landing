let SHEET_ID = '1EIUv8HimtpkZTO8cfM1tILY2pQQ5FYiFFf6Roba2g8M';
let SHEET_TITLE = 'Prices';
let SHEET_RANGE = 'A1:C101';
let Column_IDs = ['food_title', 'food_price']; 

let FULL_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tq=&gid=0&headers=1&tqx=out:csv&range=${SHEET_RANGE}`;


fetch(FULL_URL)
  .then(res => res.text())
  .then(csvData => {
    let rows = csvData.split('\n');
     let data = rows.map(row => row.split(','));

        // Extract headers from the first row
        const headers = data[0].map((header) => header.replace(/"/g, ''));

        // Initialize an empty array to store objects
        const objectsArray = [];
    
        // Iterate through the rows (excluding the header row)
        for (let i = 1; i < data.length; i++) {
          const rowData = data[i].map((value) => value.replace(/"/g, ''));
          const obj = {};
    
          // Create an object using headers as keys
          for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = rowData[j];
          }
    
          // Push the object to the array
          objectsArray.push(obj);
        }

        objectsArray.forEach(item => {
          const el = document.getElementById(item.id);
          const foodPriceEl = el.querySelector(".foodPrice"); // Use querySelector to get the first matching element
        
          if (foodPriceEl) {
            foodPriceEl.textContent = `${item.food_price}`;
            console.log(item.id);
          }
        });
        
        
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });