class Item {
    constructor(name,price,id,quantity,amount,tax,total){    
        this.name=name;
        this.price=price;
        this.id=id; 
        this.quantity=quantity;
        this.amount=amount;
        this.tax=tax;
        this.total=total;
        
    }   
}

const book = new Item('Book', 12.49,'book',2);
const cd = new Item('Music CD',14.99,'other',1);
const chocBar = new Item('Chocolate bar',0.85,'food',1);
const impChoc = new Item('Imported box of chocolates', 10.00,'import',1);
const impPerf = new Item('Imported bottle of perfume', 47.50,'other import',1);
const impPerf1 = new Item('Imported bottle of perfume', 27.99,'other import',1);
const perf = new Item('Bottle of perfume', 18.99,'other',1);
const pills = new Item('Packet of headache pills', 9.75,'med',1);
const impChoc1 = new Item('Imported box of chocolates', 11.25,'import',2);

 function totalAmount (item){
    if (item.id.toLowerCase() ==='book' || item.id.toLowerCase() === 'food' || item.id.toLowerCase() === 'med'){
        item.tax= 0;
    } else if (item.id.toLowerCase()==='import'){
        item.tax=.05;
    } else if (item.id.toLowerCase()==='other import'){
        item.tax=.15;
    } else {
        item.tax=.1;
    }
    item.amount = parseFloat((Math.ceil((item.price * item.tax)*20)/20).toFixed(2));
    item.total= parseFloat(((item.price + item.amount) * item.quantity).toFixed(2));
    return  item.total;
}

totalAmount(book);
totalAmount(cd);
totalAmount(chocBar);
totalAmount(impChoc);
totalAmount(impPerf);
totalAmount(impPerf1);
totalAmount(perf);
totalAmount(pills);
totalAmount(impChoc1);

let par= document.getElementsByTagName('p');


par[0].textContent=book.name + ': ' + (book.total) + ` (${book.quantity} @ ${book.price})`;
par[1].textContent=cd.name + ': '  + cd.total;
par[2].textContent=chocBar.name + ': '   + chocBar.total;
par[3].textContent='Sales Taxes: '  + (book.amount+cd.amount+chocBar.amount);
par[4].textContent='Total: '  + (book.total+cd.total+chocBar.total);

par[5].textContent=impChoc.name + ': ' + impChoc.total;
par[6].textContent=impPerf.name + ': '  + impPerf.total;
par[7].textContent='Sales Taxes: '  + (impChoc.amount+impPerf.amount);
par[8].textContent='Total: '  + (impChoc.total+impPerf.total);

par[9].textContent = impPerf1.name + ': '  + impPerf1.total;
par[10].textContent = perf.name + ': '  + perf.total;
par[11].textContent = pills.name + ': '  + pills.total;
par[12].textContent = impChoc1.name + ': ' + (impChoc1.total) + ` (${impChoc1.quantity} @ ${impChoc1.price + impChoc1.amount})`;
par[13].textContent = 'Sales Taxes: '  + (impChoc1.amount+impChoc1.amount+impPerf1.amount+perf.amount+pills.amount).toFixed(2);
par[14].textContent = 'Total: '  + (impChoc1.total+impPerf1.total+perf.total+pills.total);