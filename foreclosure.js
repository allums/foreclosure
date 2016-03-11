'use strict';

var steve;
var stevesLoan;
var month = 0;
var monthsUntilEvicted;

var loan = function(){

	var account = {

		borrowed: 550000,
		balance: 286000,
		monthlyPayment: 1700,
		defaulted: 0,
		defaultsToForeclose: 5,
		foreclosed: false

	};

	var missPayment = function(){

		account.defaulted++;

		if (account.defaulted >= account.defaultsToForeclose){

			account.foreclosed = true;

		}


	};

	return {

		getBalance: function(){

			return account.balance;

		},


		receivePayment: function(amount){
 
			if (amount < loan().getMonthlyPayment()){

				missPayment();
			}

			account.balance-=;

		},

		getMonthlyPayment: function(){


			return account.monthlyPayment;


		},

		isForeclosed: function(){


			return account.foreclosed;


		},




	}

}




var borrower = function(loan){

	var account = {

		monthlyIncome: 1350,
		funds: 2800,
		loan: loan

	}


	return {

		getFunds: function(){

			return account.funds;

		},

		makePayment: function(){

			console.log('HEREIAM', loan.getMonthlyPayment());
			if (account.funds > loan.getMonthlyPayment()){

				account.funds -= loan.getMonthlyPayment();
				account.loan.receivePayment(loan.getMonthlyPayment());

			} else {

				loan.receivePayment(account.funds);
				account.funds = 0;

			}

		},


		payDay: function(){

			account.funds += account.monthlyPayment;

		}




	};


}

stevesLoan = loan();
steve = borrower(stevesLoan);


while (steve.isForeclosed === false) {


	steve.payDay();
	steve.makePayment();
	month += 1;
	monthsUntilEvicted = month;


}





