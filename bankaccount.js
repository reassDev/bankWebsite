var userData = {
    investments: [
        { name: 'Investment 1', amount: 1000 },
        { name: 'Investment 2', amount: 2000 },
    ],
    cards: [
        { type: 'Debit', number: '1234 5678 9012 3456', CCV: '234', expiration: '9/25' },
        { type: 'Credit', number: '2345 6789 0123 4567', CCV: '123', expiration: '12/24'},
    ],
    accounts: [
        { type: 'Checking', balance: 3000 },
        { type: 'Savings', balance: 5000 },
    ],
};

var investmentsCard = document.querySelector('#investments .info-card');
var cardsCard = document.querySelector('#cards .info-card');
var accountsCard = document.querySelector('#accounts .info-card');

userData.investments.slice(0, 2).forEach(function(investment) {
    var div = document.createElement('div');
    div.className = 'info-item';
    div.textContent = investment.name + ': $' + investment.amount;
    investmentsCard.appendChild(div);
});

userData.cards.forEach(function(card) {
    var div = document.createElement('div');
    div.className = 'info-item';
    div.textContent = 'Card Type: ' + card.type;


    cardsCard.appendChild(div);

});

userData.accounts.forEach(function(account) {
    var div = document.createElement('div');
    div.className = 'info-item';
    div.textContent = account.type + ' Account: $' + account.balance;
    accountsCard.appendChild(div);
});