class BankAccount {
    constructor(balance){
        this.balance = balance;
        console.log(`saldo awal : $${balance}`);
    }

    deposit(amount){
        this.balance += amount;
        setTimeout(() => console.log(`deposit : $${amount}`), 1000);
    }

    withdraw(amount){
        if (amount <= this.balance){
            this.balance -= amount;
            setTimeout(() => console.log(`withdraw : $${amount}`), 2000);
        } else{
            setTimeout(() => console.log(`Jumlah Penarikan : $${amount}`), 3000);
        }
    }

    displayBalance(){
        setTimeout(() => console.log(`saldo akhir : $${this.balance}`), 4000);
    }
}

const account = new BankAccount(1500);
account.deposit(500);
account.withdraw(400);
account.displayBalance();
