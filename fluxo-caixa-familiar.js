// fluxo de caixa familiar

let family = {
  incomes: [2500, 3200, 250, 360.45],
  expenses: [320.34, 128.45, 176.87, 1450.00]
}

function sum(array){
  let total = 0;

  for (let value of array){
    total += value;
  }

  return total
}

function calculateBalance(){
  const calculateIncomes = sum(family.incomes);
  const calculateExpenses = sum(family.expenses);

  const total = calculateIncomes - calculateExpenses;

  const itsPositive = total >= 0;

  let balanceText = "negativo"

  if(itsPositive) { 
     balanceText = "positivo"
  }

  console.log(`seu salvo é ${balanceText}: R$ ${total.toFixed(2)}`);
}

calculateBalance();