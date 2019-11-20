//These consts simulates the data from the API.
//While this app doesn't have an backend running, my idea was to demonstrate some of my front-end skills.

export const products = [
  { id: 1, name: 'Nike T-shirt', selected: false, size: 'M', colorID: 1, color: 'White', brand: 'Nike', brandID: 1, price: 19.90, quantity: 1, description: "Excepteur non Lorem aliqua esse irure veniam elit labore culpa velit n...", merchant: 'BST', merchantID: 1, image: 'https://picsum.photos/300/?random' },
  { id: 2, name: 'Adidas Shorts', selected: false, size: 'L', colorID: 2, color: 'Black', brand: 'Adidas', brandID: 2, price: 24.90, quantity: 1, description: "Excepteur non Lorem aliqua esse irure veniam elit labore culpa velit n...",merchant: 'BHS', merchantID: 2, image: 'https://picsum.photos/300/?random' },
  { id: 3, name: 'Adidas Glove', selected: false, size: 'S', colorID: 3, color: 'Blue', brand: 'Adidas', brandID: 2, price: 39.90, quantity: 1, description: "Excepteur non Lorem aliqua esse irure veniam elit labore culpa velit n...",merchant: 'WAY', merchantID: 3, image: 'https://picsum.photos/300/?random' },
  { id: 4, name: 'Smt Skate', selected: false, size: 'L', colorID: 4, color: 'Yellow', brand: 'Smt', brandID: 3, price: 79.90, quantity: 1, description: "Excepteur non Lorem aliqua esse irure veniam elit labore culpa velit n...",merchant: 'StorY', merchantID: 4, image: 'https://picsum.photos/300/?random' },
  { id: 5, name: 'Nike Sport Pant', selected: false, size: 'S', colorID: 1, color: 'White', brand: 'Nike', brandID: 1, price: 26.90, quantity: 1, description: "Excepteur non Lorem aliqua esse irure veniam elit labore culpa velit n...", merchant: 'BPlace', merchantID: 5, image: 'https://picsum.photos/300/?random' },
  { id: 6, name: 'Adidas Runner Tennis', selected: false, size: 'M', colorID: 5, color: 'Pink', brand: 'Adidas', brandID: 2, price: 49.90, quantity: 1, description: "Excepteur non Lorem aliqua esse irure veniam elit labore culpa velit n...", merchant: 'Continet', merchantID: 6, image: 'https://picsum.photos/300/?random' },
  { id: 7, name: 'Nike Tennis', selected: false, size: 'S', colorID: 1, color: 'White', brand: 'Nike', brandID: 1, price: 35.90, quantity: 1, description: "Excepteur non Lorem aliqua esse irure veniam elit labore culpa velit n...",merchant: 'BST', merchantID: 1, image: 'https://picsum.photos/300/?random' },
  { id: 8, name: 'FILA Roller', selected: false, size: 'M', colorID: 3, color: 'Blue', brand: 'FILA', brandID: 4, price: 89.90, quantity: 1, description: "Excepteur non Lorem aliqua esse irure veniam elit labore culpa velit n...",merchant: 'BHS', merchantID: 2, image: 'https://picsum.photos/300/?random' },
  { id: 9, name: 'Adidas T-shirt', selected: false, size: 'S', colorID: 1, color: 'White', brand: 'Adidas', brandID: 2, price: 31.90, quantity: 1, description: "Excepteur non Lorem aliqua esse irure veniam elit labore culpa velit n...",merchant: 'WAY', merchantID: 3, image: 'https://picsum.photos/300/?random' },
  { id: 10, name: 'Nike Shorts', selected: false, size: 'L', colorID: 1, color: 'White', brand: 'Nike', brandID: 1, price: 19.90, quantity: 1,description: "Excepteur non Lorem aliqua esse irure veniam elit labore culpa velit n...", merchant: 'StorY', merchantID: 4, image: 'https://picsum.photos/300/?random' },
  { id: 11, name: 'Adidas Sport Pant', selected: false, size: 'S', colorID: 2, color: 'Black', brand: 'Adidas', brandID: 2, price: 47.90, quantity: 1, description: "Excepteur non Lorem aliqua esse irure veniam elit labore culpa velit n...",merchant: 'BPlace', merchantID: 5, image: 'https://picsum.photos/300/?random' },
  { id: 12, name: 'Pop Runner Tennis', selected: false, size: 'S', colorID: 1, color: 'White', brand: 'Pop', brandID: 5, price: 41.90, quantity: 1,description: "Excepteur non Lorem aliqua esse irure veniam elit labore culpa velit n...", merchant: 'Continet', merchantID: 6, image: 'https://picsum.photos/300/?random' },
  { id: 13, name: 'Go Shorts', selected: false, size: 'M', colorID: 6, color: 'Green', brand: 'Go', brandID: 6, price: 25.90, quantity: 1,description: "Excepteur non Lorem aliqua esse irure veniam elit labore culpa velit n...", merchant: 'BST', merchantID: 1, image: 'https://picsum.photos/300/?random' },
  { id: 14, name: 'Basic Tennis', selected: false, size: 'S', colorID: 1, color: 'White', brand: 'Basic', brandID: 7, price: 29.90, quantity: 1, description: "Excepteur non Lorem aliqua esse irure veniam elit labore culpa velit n...",merchant: 'Buy Here Stor', merchantID: 2, image: 'https://picsum.photos/300/?random' },
  { id: 15, name: 'Master Bag', selected: false, size: 'L', colorID: 1, color: 'White', brand: 'Master', brandID: 8, price: 59.90, quantity: 1, description: "Excepteur non Lorem aliqua esse irure veniam elit labore culpa velit n...",merchant: 'StorY', merchantID: 4, image: 'https://picsum.photos/300/?random' }
]

export const brands = [
  {selected: false, id: 1, name: 'Nike', initials: 'NI'},
  {selected: false, id: 2, name: 'Adidas', initials: 'AD'},
  {selected: false, id: 3, name: 'Smt', initials: 'SM'},
  {selected: false, id: 4, name: 'FILA', initials: 'FI'},
  {selected: false, id: 5, name: 'Pop', initials: 'PO'},
  {selected: false, id: 6, name: 'Go', initials: 'GO'},
  {selected: false, id: 7, name: 'Basic', initials: 'BA'},
  {selected: false, id: 8, name: 'Master', initials: 'MA'},
]

export const merchants = [
  {selected: false, id: 1, name: 'BST', initials: 'BS'},
  {selected: false, id: 2, name: 'BHS', initials: 'BHS'},
  {selected: false, id: 3, name: 'WAY', initials: 'WA'},
  {selected: false, id: 4, name: 'StorY', initials: 'SY'},
  {selected: false, id: 5, name: 'BPlace', initials: 'BP'},
  {selected: false, id: 6, name: 'Continet', initials: 'CT'},
]

export const colors = [
 { id: 1, name: 'White', color: 'white', selected: false },
 { id: 2, name: 'Black', color: 'black', selected: false }, 
 { id: 3, name: 'Blue', color: '#0055ff', selected: false }, 
 { id: 4, name: 'Yellow', color: '#ffff4d', selected: false }, 
 { id: 5, name: 'Pink', color: '#ff00ff', selected: false }, 
 { id: 6, name: 'Green', color: '#40ff00', selected: false } 
]
