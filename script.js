const prices = document.querySelectorAll(".price");
	let total = 0;
	prices.forEach(priceCell => {
	    total += parseFloat(priceCell.textContent);
	});

	const table = document.querySelector("table");
	const nR = document.createElement("tr");
	const tC = document.createElement("td");

	tC.setAttribute("id", "ans"); 
	tC.setAttribute("colspan", "2");
	tC.textContent = Total Price: ${total};

	nR.appendChild(tC);
	table.appendChild(nR);