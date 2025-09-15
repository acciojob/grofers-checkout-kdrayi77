function calculateTotal() {
  // Select prices fresh every time
  const prices = document.querySelectorAll('.price');
  let total = 0;

  prices.forEach(price => {
    const value = parseFloat(price.textContent.trim());
    if (!isNaN(value)) {
      total += value;
    }
  });

  // Display total inside #ans
  const ansDiv = document.getElementById('ans');
  ansDiv.textContent = ''; // clear previous
  ansDiv.textContent = total;
}

// Attach event to button
document.getElementById('calcBtn').addEventListener('click', calculateTotal);
