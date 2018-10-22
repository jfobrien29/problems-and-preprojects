// Script to divide up receipt

const fs = require('fs');

class Receipt {
    constructor(fileString) {
        this.data = JSON.parse(fs.readFileSync(fileString));
        this.items = this.data.items;
        this.totals = this.data.totals;
        this.taxRatio = this.totals.tax/(this.totals.total);
        this.tipRatio = this.totals.tip/(this.totals.total);
        this.info = this.data.info;
    }

    printNumberedItems() {
        this.items.forEach((item, index) => 
            console.log(`${index+1}: (${item.quantity}) $${item.price} ${item.name}`));
    }

    chooseItems() {
        let total = this.totals.total;
        let itemsAvailable = this.items;

        // New User?
            // Enter Name
            // While not finished
                // Print all available items
                // Pick item
                // Pick Quantity

                // Print current bag
                // Finished?
        
        // If no more users print out
    }
}

const receiptFileString = 'receipt.json'
const myReceipt = new Receipt(receiptFileString);
myReceipt.printNumberedItems();

