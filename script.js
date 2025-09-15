function calculateTotal() {
  const prices = document.querySelectorAll('.price');
  let total = 0;

  prices.forEach(price => {
    total += parseFloat(price.textContent) || 0;
  });

  // Display total inside #ans
  const ansDiv = document.getElementById('ans');
  ansDiv.textContent = total;
}

// Run on page load
calculateTotal();
