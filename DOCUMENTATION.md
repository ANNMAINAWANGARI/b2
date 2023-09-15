# API Documentation

## Table of Contents

- [Standard Formats for Requests and Responses](#standard-formats-for-requests-and-responses)
- [Sample Usage](#sample-usage)
- [Known Limitations and Assumptions](#known-limitations-and-assumptions)
- [Setting Up and Deploying the API](#setting-up-and-deploying-the-api)

---

## Standard Formats for Requests and Responses

### 1. Fetching All Persons (GET /api)

#### Request Format:

- Method: GET
- Endpoint: `/api`

#### Response Format:

- Status Code: 200 (OK)
- Response Body:
  ```json
  [
    {
      "_id": "user_id",
      "name": "person_name"
    },
    
  ]
  ```

### 2. Adding a New Person (POST /api)

#### Request Format:

- Method: POST
- Endpoint: `/api`
- Request Body:
  ```json
  {
    "name": "person_name"
  }
  ```

#### Response Format:

- Status Code: 200 (Created)
- Response Body:
  ```json
  {
    "name": "user name.",
    "_id": "user_id"
  }
  ```

### 3. Fetching Details of a Particular Person (GET /api/:user_id)

#### Request Format:

- Method: GET
- Endpoint: `/api/:user_id`

#### Response Format:

- Status Code: 200 (OK)
- Response Body:
  ```json
  {
    "_id": "user_id",
    "name": "user_name"
  }
  ```

### 4. Modifying Details of an Existing Person (PUT /api/:user_id)

#### Request Format:

- Method: PUT
- Endpoint: `/api/:user_id`
- Request Body:
  ```json
  {
    "name": "updated_name",
    "id":"user_id"
  }
  ```

#### Response Format:

- Status Code: 200 (OK)
- Response Body:
  ```json
  {
    
    "user_id": "user_id"
  }
  ```

### 5. Removing a Person (DELETE /api/:user_id)

#### Request Format:

- Method: DELETE
- Endpoint: `/api/:user_id`

#### Response Format:

- Status Code: 200 (OK)
- Response Body:
  ```json
  {
    "message": "name has been successfully deleted."
  }
  ```

---

## Sample Usage

### Example 1: Fetching All Persons

#### Request:

- Method: GET
- Endpoint: `/api`

#### Response:

- Status Code: 200 (OK)
- Response Body:
  ```json
  [
     {
        "_id": "650423c899ad3520ef1bd692",
        "name": "Kim Little",
        "__v": 0
    },
  ]
  ```

### Example 2: Adding a New Person

#### Request:

- Method: POST
- Endpoint: `/api`
- Request Body:
  ```json
  
  ```

#### Response:

- Status Code: 201 (Created)
- Response Body:
  ```json
 {
    "name": "Ann Mwangi",
    "_id": "650441815d78103377001a36",
    "__v": 0
}
  ```

---

## Known Limitations and Assumptions

- The API assumes that MongoDB is running and accessible via the provided MongoDB connection URL in the `.env` file.

## Setting Up and Deploying the API

To set up and deploy the API, follow these steps:

1. Clone the repository to your local machine:

   ```shell
   git clone 
   ```



2. Install dependencies:

   ```shell
   npm install
   ```

4. Create a `.env` file in the project root directory with your MongoDB connection URL:

   ```env
   DB_URL=your-mongodb-connection-url
   ```

5. Start the server:

   ```shell
   npm start
   ```

   The API will run on port 3000 by default.

---



Try this markdown:

![UML DIAGRAM](./src/images/UML_Diagram(1).png)
