document.addEventListener("DOMContentLoaded", function () {
    const transferForm = document.getElementById("transfer-form");
    const historyList = document.getElementById("history-list");
    const accountNameSpan = document.getElementById("account-name");
    const accountBalanceSpan = document.getElementById("account-balance");

    let accountBalance = 1000; 
    accountBalanceSpan.textContent = accountBalance.toFixed(2);

    transferForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const fromInput = document.getElementById("from");
        const toInput = document.getElementById("to");
        const amountInput = document.getElementById("amount");

        const fromValue = fromInput.value;
        const toValue = toInput.value;
        const amountValue = parseFloat(amountInput.value);

        if (amountValue > 0 && accountBalance >= amountValue) {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span>Destinatario: ${toValue}</span>
                <span>Monto: $${amountValue.toFixed(2)}</span>
                <button class="details-btn">Detalles</button>
            `;

            historyList.appendChild(listItem);

            accountBalance -= amountValue;
            accountBalanceSpan.textContent = accountBalance.toFixed(2);

            fromInput.value = "";
            toInput.value = "";
            amountInput.value = "";
        } else {
            alert("Fondos insuficientes o monto inválido.");
        }
    });

    historyList.addEventListener("click", function (event) {
        const target = event.target;
        if (target.classList.contains("details-btn")) {
            const listItem = target.closest("li");
            const recipient = listItem.querySelector("span:nth-child(1)").textContent;
            const amount = listItem.querySelector("span:nth-child(2)").textContent;

            const transferDetails = document.getElementById("transfer-details");
            transferDetails.innerHTML = `
                <h3>Detalles de la Transferencia</h3>
                <p><strong>Destinatario:</strong> ${recipient}</p>
                <p><strong>Monto:</strong> ${amount}</p>
                <!-- Agrega más detalles si es necesario -->
            `;
            transferDetails.style.display = "block";
        }
    });
});
