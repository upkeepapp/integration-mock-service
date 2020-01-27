import React from 'react';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap-buttons';
//import {purchseOrder} from "../../store/purchaseorder" 
import axios from "axios"
// Be sure to include styles at some point, probably during your bootstraping
import 'react-bootstrap-buttons/dist/react-bootstrap-buttons.css';

export default class App extends React.Component {
   async handleClick () {
    const response = await axios.post(
        'http://localhost:3000/health',
        {data: JSON.stringify({
            "dueDate": {
              "__type": "Date",
              "iso": "2020-01-03T22:00:00.000Z"
            },
            "parts": [
              {
                "arrayOfAssignedUsers": [
                  {
                    "__type": "Pointer",
                    "className": "_User",
                    "objectId": "G9mQNgjJ3e"
                  }
                ],
                "arrayOfAssignedTeams": [
                  {
                    "__type": "Pointer",
                    "className": "Project",
                    "objectId": "tdtE3dse7Q"
                  }
                ],
                "stringPartName": "The Part",
                "stringPartDescription": "Some test part",
                "category": "Common",
                "stringPartCost": "10",
                "stringPartQuantity": "10",
                "minimumPartQuantity": "1",
                "stringSerialNumber": "00099929",
                "stringArea": "some test area",
                "additionalPartDetails": "test description",
                "objectLocation": {
                  "__type": "Pointer",
                  "className": "Location",
                  "objectId": "f5ZI5AEhc9"
                },
                "numberPartQuantity": 10,
                "numberPartCost": 10,
                "role": {
                  "__type": "Pointer",
                  "className": "_Role",
                  "objectId": "aoggFXE3tl"
                },
                "createdByUser": {
                  "__type": "Pointer",
                  "className": "_User",
                  "objectId": "G9mQNgjJ3e"
                },
                "nonStock": false,
                "quantityRunningLow": false,
                "createdAt": "2019-12-30T12:47:01.018Z",
                "updatedAt": "2019-12-30T12:47:01.018Z",
                "properties": {
                  "__type": "Relation",
                  "className": "partInventoryProperty"
                },
                "ACL": {
                  "role:IJAFOGHHRqnRteWVTNHw": {
                    "read": true,
                    "write": true
                  }
                },
                "objectId": "FUZ4Mj0uL3",
                "__type": "Object",
                "className": "partInventory"
              }
            ],
            "poDate": {
              "__type": "Date",
              "iso": "2020-01-03T22:00:00.000Z"
            },
            "partQuantities": [
              0
            ],
            "partsPendingQuantities": {
              "FUZ4Mj0uL3": 0
            },
            "partialFulfillHistory": [],
            "title": "Some",
            "category": "Category",
            "tax": 1,
            "subtotal": 0,
            "totalCost": 35,
            "shippingCost": 1,
            "otherCost": 33,
            "companyName": "My test company",
            "companyStreet": "Test street",
            "companyCity": "Los Angeles",
            "companyState": "CA",
            "companyZip": "90001",
            "status": "approved",
            "shippingCompany": "My test company",
            "shippingStreet": "Test street",
            "shippingCity": "Los Angeles",
            "shippingState": "CA",
            "shippingZip": "90001",
            "showCompanyLogo": false,
            "role": {
              "__type": "Pointer",
              "className": "_Role",
              "objectId": "aoggFXE3tl"
            },
            "purchaseOrderNumber": 1,
            "totalQuantity": 0,
            "createdBy": {
              "username": "oleksandra_mirochnyk@epam.com",
              "email": "oleksandra_mirochnyk@epam.com",
              "userAccountType": "1",
              "platformSignup": "web",
              "companyBusinessType": "restaurantManagement",
              "phoneNumber": "0932906195",
              "firstName": "Oleksandra",
              "lastName": "Mirochnyk",
              "source": "https://staging.onupkeep.com/#/login/signup",
              "createdAt": "2019-10-24T11:17:37.426Z",
              "updatedAt": "2019-12-30T12:48:55.906Z",
              "role": {
                "__type": "Pointer",
                "className": "_Role",
                "objectId": "aoggFXE3tl"
              },
              "companySecret": "IJAFOGHHRqnRteWVTNHw",
              "dateOfLastLogin": {
                "__type": "Date",
                "iso": "2019-12-30T12:48:55.310Z"
              },
              "locale": "en-us",
              "isViewSharedOrders": true,
              "userStatus": "call",
              "disablePurchaseOrderEmails": "0",
              "disableAllEmails": "0",
              "disableDailyEmails": "0",
              "disableEmails": "0",
              "additional": "",
              "jobTitle": "Admin",
              "ACL": {
                "*": {
                  "read": true
                },
                "G9mQNgjJ3e": {
                  "read": true,
                  "write": true
                }
              },
              "objectId": "G9mQNgjJ3e",
              "__type": "Object",
              "className": "_User"
            },
            "createdAt": "2019-12-30T12:48:54.967Z",
            "updatedAt": "2019-12-30T12:48:54.967Z",
            "ACL": {
              "role:IJAFOGHHRqnRteWVTNHw": {
                "read": true,
                "write": true
              }
            },
            "id": "U02P2mL396"
          })},
        { headers: { 'Content-Type': 'application/json' } }
      )
      console.log(response.data)
       
   }
   
    render () {
        return (
            <form>
            <label>
            ApiKey:
            </label>

            <input type="text" name="api" value="2ef2bf1d00913552a25660de44fd170c2531819e"/>
            <br/>
            <label>
            CompaniId:
            </label>

            <input type="text" name="companyId" value="John Doe corp"/>
            <br/>
            <label>
            AccountId:
            </label>

            <input type="text" name="acc" value="San Francisco - Marketing, Assets"/>
            <br/>
            <label>
            CurrencyId:
            </label>

            <input type="text" name="curr" value="USD"/>
            <br/>
            <label>
            Country:
            </label>

            <input type="text" name="curr" value="Disneyland"/>
            <br/>
            <br/>
            <Button size="xs"  variant="primary" onClick={this.handleClick}>Create Purchase order</Button>

            </form>
        );
    }
}