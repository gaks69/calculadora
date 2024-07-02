function calculateProfit() {
    const casa1_odds = parseFloat(document.getElementById('casa1_odds').value);
    const casa1_stake = parseFloat(document.getElementById('casa1_stake').value);
    const casa2_odds = parseFloat(document.getElementById('casa2_odds').value);
    const casa2_stake = parseFloat(document.getElementById('casa2_stake').value);

    const total_stake = casa1_stake + casa2_stake;
    const casa1_profit = (casa1_odds * casa1_stake) - total_stake;
    const casa2_profit = (casa2_odds * casa2_stake) - total_stake;

    const profit = Math.min(casa1_profit, casa2_profit);
    const total_bank = parseFloat(document.getElementById('total_bank').value);
    const profit_percentage = (profit / total_bank) * 100;

    document.getElementById('casa1_profit').innerText = `Lucro Parcial: ${casa1_profit.toFixed(2)} BRL`;
    document.getElementById('casa2_profit').innerText = `Lucro Parcial: ${casa2_profit.toFixed(2)} BRL`;
    document.getElementById('profit').innerText = `Lucro: ${profit.toFixed(2)} BRL`;
    document.getElementById('profit_percentage').innerText = `Lucro Percentual: ${profit_percentage.toFixed(2)}%`;
}

function updateStakes() {
    const total_bank = parseFloat(document.getElementById('total_bank').value);
    const casa1_odds = parseFloat(document.getElementById('casa1_odds').value);
    const casa2_odds = parseFloat(document.getElementById('casa2_odds').value);

    const casa1_stake = total_bank / (1 + (casa2_odds / casa1_odds));
    const casa2_stake = total_bank - casa1_stake;

    document.getElementById('casa1_stake').value = casa2_stake.toFixed(2); // Adjusted to ensure lower stake for higher odds
    document.getElementById('casa2_stake').value = casa1_stake.toFixed(2);

    calculateProfit();
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('total_bank').addEventListener('input', updateStakes);
    document.getElementById('casa1_odds').addEventListener('input', updateStakes);
    document.getElementById('casa2_odds').addEventListener('input', updateStakes);
    document.getElementById('casa1_stake').addEventListener('input', calculateProfit);
    document.getElementById('casa2_stake').addEventListener('input', calculateProfit);

    updateStakes();
});
