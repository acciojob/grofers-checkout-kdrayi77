document.getElementById('checkout').addEventListener('click', function () {
  const priceElements = document.querySelectorAll('.prices');
  let total = 0;

  priceElements.forEach(el => {
    const value = parseFloat(el.textContent.trim());
    if (!isNaN(value)) {
      total += value;
    }
  });

  // Remove existing total row if it exists
  const existingTotalRow = document.getElementById('total-row');
  if (existingTotalRow) {
    existingTotalRow.remove();
  }

  // Create new row
  const totalRow = document.createElement('tr');
  totalRow.id = 'total-row';
  const totalCell = document.createElement('td');
  totalCell.setAttribute('colspan', '2');
  totalCell.textContent = `Total Price: ₹${total.toFixed(2)}`;
  totalCell.style.fontWeight = 'bold';
  totalCell.style.textAlign = 'right';

  totalRow.appendChild(totalCell);
  document.getElementById('grocery-table').appendChild(totalRow);
});
