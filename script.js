function calculateTotal() {
  const priceCells = document.querySelectorAll('.prices');
  let total = 0;

  priceCells.forEach(cell => {
    const value = parseFloat(cell.textContent);
    if (!isNaN(value)) {
      total += value;
    }
  });

  const table = document.getElementById('grocery-table');

  // Remove existing total row if present
  const existingTotalRow = document.getElementById('total-row');
  if (existingTotalRow) {
    table.removeChild(existingTotalRow);
  }

  // Create new total row
  const totalRow = document.createElement('tr');
  totalRow.id = 'total-row';

  const totalCell = document.createElement('td');
  totalCell.colSpan = 2;
  totalCell.textContent = `Total Price: ₹${total}`;
  totalCell.style.fontWeight = 'bold';
  totalCell.style.textAlign = 'center';

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
}
