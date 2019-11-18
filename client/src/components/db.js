export const products = [
 
  { id: 1, name: 'Nike T-shirt', selected: false, size: 'M', color: 'white', brand: 'Nike', brandID: 1, price: 19.90, quantity: 1, description: "Excepteur non Lorem aliqua esse irure veniam elit labore culpa velit n...", merchant: 'Best Store', merchantID: 1, image: 'https://picsum.photos/300/?random' },
  { id: 2, name: 'Adidas Shorts', selected: false, size: 'L', color: 'black', brand: 'Adidas', brandID: 2, price: 24.90, quantity: 1, description: "Excepteur non Lorem aliqua esse irure veniam elit labore culpa velit n...",merchant: 'Buy Here Store', merchantID: 2, image: 'https://picsum.photos/300/?random' },
  { id: 3, name: 'Adidas Glove', selected: false, size: 'S', color: 'blue', brand: 'Adidas', brandID: 2, price: 39.90, quantity: 1, description: "Excepteur non Lorem aliqua esse irure veniam elit labore culpa velit n...",merchant: '100% Store', merchantID: 3, image: 'https://picsum.photos/300/?random' },
  { id: 4, name: 'Smt Skate', selected: false, size: 'L', color: 'yellow', brand: 'Smt', brandID: 3, price: 79.90, quantity: 1, description: "Excepteur non Lorem aliqua esse irure veniam elit labore culpa velit n...",merchant: 'Store for you!', merchantID: 4, image: 'https://picsum.photos/300/?random' },
  { id: 5, name: 'Nike Sport Pant', selected: false, size: 'S', color: 'white', brand: 'Nike', brandID: 1, price: 26.90, quantity: 1, description: "Excepteur non Lorem aliqua esse irure veniam elit labore culpa velit n...", merchant: 'Best place', merchantID: 5, image: 'https://picsum.photos/300/?random' },
  { id: 6, name: 'Adidas Runner Tennis', selected: false, size: 'M', color: 'pink', brand: 'Adidas', brandID: 2, price: 49.90, quantity: 1, description: "Excepteur non Lorem aliqua esse irure veniam elit labore culpa velit n...", merchant: 'Clark Place', merchantID: 6, image: 'https://picsum.photos/300/?random' },
  { id: 7, name: 'Nike Tennis', selected: false, size: 'S', color: 'white', brand: 'Nike', brandID: 1, price: 35.90, quantity: 1, description: "Excepteur non Lorem aliqua esse irure veniam elit labore culpa velit n...",merchant: 'Best Store', merchantID: 1, image: 'https://picsum.photos/300/?random' },
  { id: 8, name: 'FILA Roller', selected: false, size: 'M', color: 'blue', brand: 'FILA', brandID: 4, price: 89.90, quantity: 1, description: "Excepteur non Lorem aliqua esse irure veniam elit labore culpa velit n...",merchant: 'Buy Here Store', merchantID: 2, image: 'https://picsum.photos/300/?random' },
  { id: 9, name: 'Adidas T-shirt', selected: false, size: 'S', color: 'white', brand: 'Adidas', brandID: 2, price: 31.90, quantity: 1, description: "Excepteur non Lorem aliqua esse irure veniam elit labore culpa velit n...",merchant: '100% Store', merchantID: 3, image: 'https://picsum.photos/300/?random' },
  { id: 10, name: 'Nike Shorts', selected: false, size: 'L', color: 'white', brand: 'Nike', brandID: 1, price: 19.90, quantity: 1,description: "Excepteur non Lorem aliqua esse irure veniam elit labore culpa velit n...", merchant: 'Store for you!', merchantID: 4, image: 'https://picsum.photos/300/?random' },
  { id: 11, name: 'Adidas Sport Pant', selected: false, size: 'S', color: 'black', brand: 'Adidas', brandID: 2, price: 47.90, quantity: 1, description: "Excepteur non Lorem aliqua esse irure veniam elit labore culpa velit n...",merchant: 'Best place', merchantID: 5, image: 'https://picsum.photos/300/?random' },
  { id: 12, name: 'Pop Runner Tennis', selected: false, size: 'S', color: 'white', brand: 'Pop', brandID: 5, price: 41.90, quantity: 1,description: "Excepteur non Lorem aliqua esse irure veniam elit labore culpa velit n...", merchant: 'Clark Place', merchantID: 6, image: 'https://picsum.photos/300/?random' },
  { id: 13, name: 'Go Shorts', selected: false, size: 'M', color: 'green', brand: 'Go', brandID: 6, price: 25.90, quantity: 1,description: "Excepteur non Lorem aliqua esse irure veniam elit labore culpa velit n...", merchant: 'Best Store', merchantID: 1, image: 'https://picsum.photos/300/?random' },
  { id: 14, name: 'Basic Tennis', selected: false, size: 'S', color: 'white', brand: 'Basic', brandID: 7, price: 29.90, quantity: 1, description: "Excepteur non Lorem aliqua esse irure veniam elit labore culpa velit n...",merchant: 'Buy Here Stor', merchantID: 2, image: 'https://picsum.photos/300/?random' },
  { id: 15, name: 'Master Bag', selected: false, size: 'L', color: 'white', brand: 'Master', brandID: 8, price: 59.90, quantity: 1, description: "Excepteur non Lorem aliqua esse irure veniam elit labore culpa velit n...",merchant: 'Store for you!', merchantID: 4, image: 'https://picsum.photos/300/?random' }]
/*import { openDatabase } from 'react-native-sqlite-storage';

let db = openDatabase({ name: 'shopbonsai.db' });

export const createTables = () => {
  //Create brands table
  db.transaction( transaction => {
    transaction.executeSql('CREATE TABLE IF NOT EXISTS brands(id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(30))')
  });
  
  //Crate products table
  db.transaction( transaction => {
    transaction.executeSql('CREATE TABLE IF NOT EXISTS products(id INTEGER PRIMARY KEY AUTOINCREMENT, brandID INTEGER, productName VARCHAR(30), price REAL, description VARCHAR(200), color VARCHAR(10), size VARCHAR(1), quantity INTEGER, image VARCHAR(50), merchantID INTEGER)')
  });

  //Create merchants table
  db.transaction( transaction => {
    transaction.executeSql('CREATE TABLE IF NOT EXISTS merchants(id INTEGER PRIMARY KEY AUTOINCREMENT, logo VARCHAR(50), name VARCHAR(50) )')
  });

}

export const fillTables = () => {
  const brands = [
    { name: 'Rolover'},
    { name: 'Tiria'},
    { name: 'Capre'},
    { name: 'Luninder'},
    { name: 'Torona'},
    { name: 'Cause'},
    { name: 'Tot'},
  ]
  
  //Fill brands table
  db.transaction( transaction => {
    brands.forEach( item => {
      transaction.executeSql(
        "INSERT INTO brands (name) values (?)",
        [item.name],
        (tx, response) => { 
          //Verify if inserted
          if (response.rowsAffected > 0){
            //Log it
            console.log('Brands Inserted');
          } else {
            //Log the error
            console.log('Brands Not Inserted');
          }
        }
      )
    })
  });

  const merchants = [
    { name: 'MultiStore'},
    { name: 'Top Seller'},
    { name: 'Sell 10'},
    { name: 'Best to Buy'}
  ];

  //Fill produtcs table
  db.transaction( transaction => {
    merchants.forEach( item => {
      transaction.executeSql(
        "INSERT INTO merchants (logo, name) values ('https://www.fillmurray.com/50/50', ? )",
        [item.name],
        (tx, response) => { 
          //Verify if inserted
          if (response.rowsAffected > 0){
            //Log it
            console.log('Merchants Inserted');
          } else {
            //Log the error
            console.log('Merchants Not Inserted');
          }
        }
      )
    })
  });

  const products = [
    {"belongsToBrand":1,"name":"VENIAM Swimming Shorts","price":706.2,"description":"Excepteur non Lorem aliqua esse irure veniam elit labore culpa velit nostrud ad nostrud.","color":"deserunt","size":"L","quantity":1,"image":"https://picsum.photos/300/?random","merchant":1},
    {"belongsToBrand":2,"name":"ANIM Underwear","price":516.2,"description":"Nostrud fugiat duis ea duis laborum mollit eiusmod sunt nisi sunt pariatur nostrud et.","color":"tempor","size":"L","quantity":4,"image":"https://picsum.photos/300/?random","merchant":1},
    {"belongsToBrand":3,"name":"SIT Polo Shirt","price":523.4,"description":"Laborum non sint nostrud quis minim consequat labore sit dolor est sit.","color":"velit","size":"M","quantity":2,"image":"https://picsum.photos/300/?random","merchant":1},
    {"belongsToBrand":4,"name":"CUPIDATAT Sandals","price":992.4,"description":"Elit dolor aliqua culpa ea labore ullamco ea aliquip cupidatat eu dolore.","color":"pariatur","size":"S","quantity":9,"image":"https://picsum.photos/300/?random","merchant":1},
    {"belongsToBrand":5,"name":"ET Poncho","price":336.8,"description":"Duis dolor eu in ea quis et exercitation dolor officia.","color":"aute","size":"M","quantity":4,"image":"https://picsum.photos/300/?random","merchant":1},
    {"belongsToBrand":6,"name":"QUIS Boots","price":550.8,"description":"Cupidatat voluptate veniam in commodo elit.","color":"elit","size":"M","quantity":3,"image":"https://picsum.photos/300/?random","merchant":2},
    {"belongsToBrand":1,"name":"VENIAM Fleece","price":498,"description":"Adipisicing aute mollit irure ea cupidatat.","color":"eiusmod","size":"S","quantity":5,"image":"https://picsum.photos/300/?random","merchant":2},
    {"belongsToBrand":2,"name":"DOLOR Pajamas","price":305.7,"description":"Ex nulla officia pariatur nostrud nisi dolore esse quis.","color":"enim","size":"L","quantity":5,"image":"https://picsum.photos/300/?random","merchant":2},
    {"belongsToBrand":3,"name":"MOLLIT Sunglasses","price":578,"description":"Eiusmod tempor laborum reprehenderit adipisicing consequat elit aute laborum quis adipisicing.","color":"fugiat","size":"S","quantity":3,"image":"https://picsum.photos/300/?random","merchant":2},
    {"belongsToBrand":4,"name":"EIUSMOD Jogging Suit","price":532.6,"description":"Cillum do laborum anim anim dolor dolore commodo laborum fugiat nisi.","color":"sit","size":"M","quantity":0,"image":"https://picsum.photos/300/?random","merchant":3},
    {"belongsToBrand":5,"name":"CUPIDATAT Coat","price":724.6,"description":"In ut amet incididunt consectetur laboris reprehenderit ex mollit.","color":"pariatur","size":"M","quantity":1,"image":"https://picsum.photos/300/?random","merchant":3},
    {"belongsToBrand":6,"name":"VENIAM T-Shirt","price":894.4,"description":"Exercitation elit commodo laboris veniam eu.","color":"ad","size":"S","quantity":2,"image":"https://picsum.photos/300/?random","merchant":3},
    {"belongsToBrand":1,"name":"CONSECTETUR Tie","price":918.9,"description":"Tempor labore proident nostrud proident ullamco non commodo laborum consectetur fugiat id do et.","color":"est","size":"L","quantity":7,"image":"https://picsum.photos/300/?random","merchant":3},
    {"belongsToBrand":2,"name":"NULLA Slippers","price":274.4,"description":"Ipsum pariatur consectetur tempor laborum culpa excepteur aute in proident.","color":"consectetur","size":"L","quantity":2,"image":"https://picsum.photos/300/?random","merchant":3},
    {"belongsToBrand":3,"name":"DO Slippers","price":573.2,"description":"Pariatur nostrud exercitation id ut aute.","color":"ullamco","size":"M","quantity":3,"image":"https://picsum.photos/300/?random","merchant":4},
    {"belongsToBrand":4,"name":"CONSECTETUR Polo Shirt","price":342.8,"description":"Dolore fugiat aliqua aute et amet non ex occaecat enim duis incididunt tempor excepteur est.","color":"sit","size":"L","quantity":6,"image":"https://picsum.photos/300/?random","merchant":4},
    {"belongsToBrand":5,"name":"DOLORE Shawl","price":265.3,"description":"Est quis officia nisi cillum deserunt in occaecat ut in ex mollit.","color":"reprehenderit","size":"S","quantity":8,"image":"https://picsum.photos/300/?random","merchant":4},
    {"belongsToBrand":6,"name":"REPREHENDERIT Dinner Jacket","price":311,"description":"Anim aute laboris do irure non eiusmod aute.","color":"enim","size":"S","quantity":3,"image":"https://picsum.photos/300/?random","merchant":4},
    {"belongsToBrand":1,"name":"IRURE Corset","price":942,"description":"Voluptate adipisicing excepteur ea excepteur minim incididunt quis amet ea.","color":"reprehenderit","size":"M","quantity":0,"image":"https://picsum.photos/300/?random","merchant":4},
    {"belongsToBrand":2,"name":"VOLUPTATE T-Shirt","price":794.5,"description":"Nulla reprehenderit ex nostrud id sit amet dolore aliquip id quis labore dolor aute.","color":"ea","size":"M","quantity":7,"image":"https://picsum.photos/300/?random","merchant":4},
    {"belongsToBrand":3,"name":"NISI Pajamas","price":576.9,"description":"Reprehenderit nostrud fugiat velit ea ex adipisicing anim officia labore.","color":"incididunt","size":"M","quantity":5,"image":"https://picsum.photos/300/?random","merchant":4},
    {"belongsToBrand":4,"name":"NISI Blouse","price":234.3,"description":"Esse consectetur fugiat do Lorem.","color":"nostrud","size":"S","quantity":4,"image":"https://picsum.photos/300/?random","merchant":2},
    {"belongsToBrand":5,"name":"NULLA Thong","price":494.3,"description":"Do occaecat aute reprehenderit reprehenderit voluptate culpa voluptate elit.","color":"amet","size":"S","quantity":0,"image":"https://picsum.photos/300/?random","merchant":2}
  ];

  //Fill merchants table
  db.transaction( transaction => {
    products.forEach( item => {
      transaction.executeSql(
        "INSERT INTO products(brandID, productName, price, description, color, size, quantity, image, merchantID) values (?,?,?,?,?,?,?,?,?)",
        [item.belongsToBrand, item.name, item.price, item.description, item.color, item.size, item.quantity, item.image, item.merchant],
        (tx, response) => { 
          //Verify if inserted
          if (response.rowsAffected > 0){
            //Log it
            console.log('Produtc Inserted');
          } else {
            //Log the error
            console.log('Produtc Not Inserted');
          }
        }
      )
    })
  });
}

export const executeSQL = (query, params, type) => {
  //A santard function to execute querys on local Database
  new Promise((resolve, reject) => {
    db.transaction((transaction) => {
      transaction.executeSql( 
        query, 
        [params],
        (tx, response) => {
          //If found data
          if ( response.rows.length > 0 ) {
            //resolve the promise returning the data
            const list = [];
            //Se encontrou registros, preenche o array
            for (let index = 0; index < response.rows.length; index++) {
              const element = response.rows.item(index);
              
              list.push(element);
            }
            
            if ( type === 'select') {
              resolve({ rows: response.rows.length, data: list });
            } else {
              resolve({ message: 'Success!' });
            }
          } else {
            //Reject the promise setting 0 to rowsFound
            reject();
          }
        } 
      )
    });
  });
}*/