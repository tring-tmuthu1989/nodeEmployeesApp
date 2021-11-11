# My First Node Employees App

## Setup
* Enter into App
* run `npm install`, it will install required packages.
* Import Demo database by running following command `mysql -u root mysql < db/employees.sql`
* Change Mysql configuration under `routes/employees.js`
* Start the server by running `npm start`

## APIs
#### 1.0 Employees List
    API: /employees
    METHOD: GET
    
    Sample Response:
    {
        "data": {
            "employees": [
                {
                    "emp_no": 10001,
                    "birth_date": "1953-09-01T18:30:00.000Z",
                    "first_name": "Georgi",
                    "last_name": "Facello",
                    "gender": "M",
                    "hire_date": "1986-06-25T18:30:00.000Z"
                },
                {
                    "emp_no": 10002,
                    "birth_date": "1964-06-01T18:30:00.000Z",
                    "first_name": "Bezalel",
                    "last_name": "Simmel",
                    "gender": "F",
                    "hire_date": "1985-11-20T18:30:00.000Z"
                },
                {
                    "emp_no": 10003,
                    "birth_date": "1959-12-02T18:30:00.000Z",
                    "first_name": "Parto",
                    "last_name": "Bamford",
                    "gender": "M",
                    "hire_date": "1986-08-27T18:30:00.000Z"
                }
            ],
            "currentPage": 1
        }
    }
#### 2. Employee Create
    API: /employees
    METHOD: POST
    
    Sample Request:
    {
        "first_name": "Muthukrishnan",
        "last_name": "Thiyagarajan",
        "birth_date": "1989-01-18",
        "gender": "M",
        "hire_date": "2021-07-12"
    }
    
    Sample Response: 
    {
        "data": {
            "employee": {
                "emp_no": 500003,
                "first_name": "Muthukrishnan",
                "last_name": "Thiyagarajan",
                "birth_date": "1989-01-18",
                "gender": "M",
                "hire_date": "2021-07-12"
            }
        }
    }
#### 3. Employee Detail
    API: /employees/:emp_no
    METHOD: GET
    
    Sample Response: 
    {
        "data": {
            "employee": {
                "emp_no": 500003,
                "first_name": "Muthukrishnan",
                "last_name": "Thiyagarajan",
                "birth_date": "1989-01-18",
                "gender": "M",
                "hire_date": "2021-07-12"
            }
        }
    }
    
#### 4. Employee Update
    API: /employees/:empl_no
    METHOD: PUT
    
    Sample Request:
    {
        "first_name": "Muthukrishnan",
        "last_name": "T",
        "birth_date": "1989-01-18",
        "gender": "M",
        "hire_date": "2021-07-12"
    }
    
    Sample Response: 
    {
        "data": {
            "employee": {
                "emp_no": 500003,
                "first_name": "Muthukrishnan",
                "last_name": "T",
                "birth_date": "1989-01-18",
                "gender": "M",
                "hire_date": "2021-07-12"
            }
        }
    }
#### 4. Employee Delete
    API: /employees/:empl_no
    METHOD: DELETE
    
    Sample Response: 
    {
        "data": {
            "message": "Employee Deleted Successfully!"
        }
    }
