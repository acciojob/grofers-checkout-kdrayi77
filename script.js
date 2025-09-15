function calculateTotal() {
  const prices = document.querySelectorAll('.price');
  let total = 0;

  prices.forEach(price => {
    total += parseFloat(price.textContent) || 0;
  });

  // Remove old total row if it exists
  const oldTotal = document.querySelector('.total-row');
  if (oldTotal) oldTotal.remove();

  // Create new row
  const table = document.getElementById('groceryTable');
  const totalRow = document.createElement('tr');
  totalRow.classList.add('total-row');

  const totalCell = document.createElement('td');
  totalCell.colSpan = 2; 
  totalCell.textContent = "Total Price = " + total;

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
}

// Run on page load
calculateTotal();
