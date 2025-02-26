document.getElementById("addProductBtn").addEventListener("click", function () {
  const productName = document.getElementById("productName").value;
  const productPrice = parseFloat(
    document.getElementById("productPrice").value
  );
  const productQuantity = parseInt(
    document.getElementById("productQuantity").value
  );

  if (productName && !isNaN(productPrice) && !isNaN(productQuantity)) {
    const total = productPrice * productQuantity;

    const tableBody = document.querySelector("#productTable tbody");
    const newRow = tableBody.insertRow();

    newRow.innerHTML = `
          <td>${productName}</td>
          <td>${productPrice.toFixed(2)}</td>
          <td>${productQuantity}</td>
          <td>${total.toFixed(2)}</td>
      `;

    updateGrandTotal(total);
    clearInputs();
  } else {
    alert("Please fill in all fields correctly.");
  }
});

function updateGrandTotal(newTotal) {
  const grandTotalElement = document.getElementById("grandTotal");
  const currentGrandTotal = parseFloat(grandTotalElement.textContent);
  grandTotalElement.textContent = (currentGrandTotal + newTotal).toFixed(2);
}

function clearInputs() {
  document.getElementById("productName").value = "";
  document.getElementById("productPrice").value = "";
  document.getElementById("productQuantity").value = "";
}
