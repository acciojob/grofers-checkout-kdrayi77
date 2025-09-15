function calculateTotal() {
  const prices = document.querySelectorAll('.price');
  let total = 0;

  prices.forEach(price => {
    total += parseFloat(price.textContent) || 0;
  });

  // Remove old total row if it exists
  const oldTotal = document.querySelector('.total-row');
  if (oldTotal) oldTotal.remove();

  // Create new row for table (optional, can keep for table display)
  const table = document.getElementById('groceryTable');
  const totalRow = document.createElement('tr');
  totalRow.classList.add('total-row');

  const totalCell = document.createElement('td');
  totalCell.colSpan = 2; 
  totalCell.textContent = "Total Price = " + total;

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);

  // Show total in #ans div for Cypress test
  const ansDiv = document.getElementById('ans');
  if (ansDiv) {
    ansDiv.textContent = total;
  }
}

// Run on page load
calculateTotal();

document.getElementById('checkoutBtn')?.addEventListener('click', calculateTotal);
