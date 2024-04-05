// Define string values for SHEET_ID, SHEET_TITLE, SHEET_RANGE, and Column_IDs
const SHEET_ID = "1EIUv8HimtpkZTO8cfM1tILY2pQQ5FYiFFf6Roba2g8M";
const SHEET_TITLE = "Prices";
const SHEET_RANGE = "A1:C106";
const Column_IDs = ["food_title", "food_price"];

// Construct the FULL_URL using the string values
const FULL_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tq=&gid=0&headers=1&tqx=out:csv&range=${SHEET_RANGE}`;

fetch(FULL_URL)
  .then((res) => res.text())
  .then((csvData) => {
    let rows = csvData.split("\n");
    let data = rows.map((row) => row.split('","'));
    // Extract headers from the first row
    const headers = data[0].map((header) => header.replace(/"/g, ""));

    // Initialize an empty array to store objects
    const objectsArray = [];

    // Iterate through the rows (excluding the header row)
    for (let i = 1; i < data.length; i++) {
      const rowData = data[i].map((value) => value.replace(/"/g, ""));
      const obj = {};

      // Create an object using headers as keys
      for (let j = 0; j < headers.length; j++) {
        // Parse the 'food_price' column as a floating-point number
        if (headers[j] === "food_price") {
          obj[headers[j]] = rowData[j];
        } else {
          obj[headers[j]] = rowData[j];
        }
      }

      // Push the object to the array
      objectsArray.push(obj);
    }

    objectsArray.forEach((item) => {
      const foodId = item.id; // Replace 'id' with the actual identifier for food items
      const el = document.querySelector(`[data-food-id="${foodId}"]`);

      if (el) {
        const foodPriceEl = el.querySelector(".foodPrice");
        if (foodPriceEl) {
          foodPriceEl.textContent = `${item.food_price} `;
        }
      }
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
