// Select all price elements
const priceElements = document.querySelectorAll('.prices');

// Calculate the total price
let totalPrice = 0;
priceElements.forEach(priceEl => {
  const price = parseFloat(priceEl.textContent.trim());
  if (!isNaN(price)) {
    totalPrice += price;
  }
});

// Create a new row for the total
const totalRow = document.createElement('tr');
const totalCell = document.createElement('td');

// Set the cell to span across all columns (adjust colspan if needed)
totalCell.setAttribute('colspan', '2'); // assuming 2 columns: item and price
totalCell.textContent = `Total Price: ₹${totalPrice.toFixed(2)}`;
totalCell.style.fontWeight = 'bold';
totalCell.style.textAlign = 'right';

// Append the cell to the row
totalRow.appendChild(totalCell);

// Append the row to the table
const table = document.querySelector('table');
table.appendChild(totalRow);
