# Currency Converter

A simple currency converter built using React. Users can input an amount in one currency, select another currency to convert to, and see the converted amount. The exchange rates are fetched from an external API.

## Features

- Select source and target currencies from a dropdown list
- Input amount to convert
- Switch between currencies by a single click
- Fetches real-time exchange rates
- Converts the amount and displays the result
- Responsive design

## Technologies Used

- React
- Tailwind CSS (for styling)

## APIs Used

The app fetches currency data from the [Currency API](https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json).

The exchange rates are fetched from the [ExchangeRete API](https://api.exchangerate-api.com/v4/latest/${from}).

## Installation

To run this project locally, follow these steps:

1. Clone the repository (https://github.com/GawerMayank/currencyConverter.git)
2. Navigate to the project directory `cd currencyConverter`
3. Install dependencies using `npm install`
4. Start the development server using `npm run dev`
5. Open your browser and go to `http://localhost:5173` to view the application.

## Usage

- Choose which currency you want to convert from `from select option`
- Choose in which currency you want to convert from `to select option`
- Enter the desired amount
- Click enter to get the converted amount

## Contact

Name: Mayank Singh Gawer

Email: mayankgawer8698@gmail.com

Project link: https://github.com/GawerMayank/currencyConverter.git
