function invest(){
    const investment = parseFloat(document.getElementById('investment').value);
    const dly = (investment / 100) * 0.5;
    const endOfInvesment = dly * 150;
    const tAccrual = endOfInvesment + investment;

    document.getElementById('daily-profit').innerHTML = "Your daily accrual is " + " $" + dly;
    document.getElementById('end-term').innerHTML = "Your end of investment accrual is " + " $"  + endOfInvesment;
    document.getElementById('total-accrual').innerHTML = "Your total accrual is " + " $" + tAccrual;
}