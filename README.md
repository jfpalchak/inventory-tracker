# <coffee /> Inventory Tracker

#### A single page application built with JavaScript and React components, implementing full CRUD functionality.

#### By Joey Palchak

## Technologies Used

- JavaScript
- React
- Node.js (v16.13.1)
- npm (v8.1.2)
- HTML
- CSS

## Description

This project is a single-page application built with React, using state management to implement CRUD functionality and conditionally render a number of different components: 
* a list of different coffee beans, 
* a form to add a new coffee bean to the list, 
* a form to update or delete an existing coffee bean, 
* allow a user to sell/purchase a selected coffee bean and update that coffee's quantity.

A coffee bean's quantity can only go as low as zero, at which point the product is listed as 'Out of Stock'.

The application itself was designed with a focus on minimalism and ease of use.

<img src="https://github.com/jfpalchak/inventory-tracker/blob/main/src/img/bean-list.png" alt="List of available coffee beans." />

> Available coffee beans will display 'In Stock' beside their price, unless a coffee's quantity dips to 10lbs or lower, at which point a coffee will display 'Almost Empty', before displaying 'Out of Stock' when the quantity hits zero.

Users can select any listed coffee, regardless of the bean being in stock, to display that coffee's detail card. 

<img src="https://github.com/jfpalchak/inventory-tracker/blob/main/src/img/bean-detail-v2.png" alt="Form to add or edit a coffee bean." />

> It is here that a user can Sell/Buy, Edit, or Remove the selected Coffee from the inventory. If the selected Coffee is listed as out of stock, the 'Sell' button will be disabled.

Should a user wish to Add a new coffee bean from the home page, they will be presented with a simple form to do so:

<img src="https://github.com/jfpalchak/inventory-tracker/blob/main/src/img/bean-form-v2.png" alt="Form to add or edit a coffee bean." />

> Other than the taste notes, every other input in the form is required for submission. 


## Component Diagram

<img src="https://github.com/jfpalchak/inventory-tracker/blob/main/src/img/inventory-diagram.drawio.png" alt="Application's component diagram." />


## Setup & Installation

1. Copy the **[URL](https://github.com/jfpalchak/inventory-tracker.git)** provided for this repository.
2. Open Terminal.
3. Change your working directory to where you'd like to create the cloned directory.
4. In your terminal, type `git clone` and use the copied URL from Step 1. Or, copy the following git command:
   
```bash
$ git clone https://github.com/jfpalchak/inventory-tracker.git
```

5. Navigate to the root of the newly cloned directory.
6. In your terminal, assuming Node and npm are installed, type the following command to install the project's dependencies found in `package.json`:
   
```bash
$ npm install
```

7. With the dependencies installed, type the following line in your terminal to run the application in development mode:
   
```bash
$ npm run start
```
### Alternatively

1. Access the application directly via gh-pages at https://jfpalchak.github.io/inventory-tracker/.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

## Known Bugs

* If any bugs are found, please contact the author.

## License

MIT License

Copyright (c) 2023 Joey Palchak

```
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```