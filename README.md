# returnsPortal
A React app to process a customer returns form.

# Getting Started
```
git clone git@github.com:eds-101/returnsPortal.git
cd returns-portal
npm install
npm start
```

# Usage

### Setup .env file
* create a .env file in root folder (same level as .gitignore file)
* In .env file copy the following line, after asking for access to the api key
```
REACT_APP_WEATHER_API_KEY=
```

### Running API calls on localhost
* CORS policy is likely to prevent program running locally. We use a browser extension [Moesif Origin & CORS Changer](https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc) to solve this
* Add extension and turn switch to on before running server
* npm start, from root folder, to run server


## User Stories
```
As a customer, 
I would like to view details of a previous order 
So that I can choose which items to return.
```
```
As a customer,
I would like to select items from a previous order
So that I can pick exactly which items to return. 
```
```
As a client,
I would like to only receive returns on items within the policy period
So that I can run the business efficiently
```
```
As a client,
I would like to understand why customers are
returning a particular item
So that I can gain business insights
```
```
As a customer,
I would like portal confirmation
So that I can see that my return order was successful.
```
```
As a staff member of the Warehouse team
I would like to be updated on new return requests
So that I know which items are due to be returned.
```