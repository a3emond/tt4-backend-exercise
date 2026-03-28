# LAB 2 - Execution :

---

## REGISTER

### request:

```http
POST {{baseUrl}}/auth/register
Content-Type: application/json

{
  "name": "Alice",
  "email": "alice@test.com",
  "password": "password123"
}
```

###  response:

```http
HTTP/1.1 201 Created
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 123
ETag: W/"7b-IncTTH8B3Kye2mS3emDrvskFG2g"
Date: Sat, 28 Mar 2026 14:53:00 GMT
Connection: close

{
  "message": "User registered successfully",
  "user": {
    "id": "69c7eb4c36be47ba38690ac3",
    "name": "Alice",
    "email": "alice@test.com"
  }
}
```

### request:

```http
POST {{baseUrl}}/auth/register
Content-Type: application/json

{
  "name": "Bob",
  "email": "bob@test.com",
  "password": "password123"
}
```

### response:

```http
HTTP/1.1 201 Created
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 119
ETag: W/"77-kgJt95ZApSt+tqIs4tU9JyR4H68"
Date: Sat, 28 Mar 2026 14:55:16 GMT
Connection: close

{
  "message": "User registered successfully",
  "user": {
    "id": "69c7ebd436be47ba38690ac6",
    "name": "Bob",
    "email": "bob@test.com"
  }
}
```



---

## LOGIN

### request:

```http
POST {{baseUrl}}/auth/login
Content-Type: application/json

{
  "email": "alice@test.com",
  "password": "password123"
}
```

###  response:

```http
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 337
ETag: W/"151-nOdss3bI1xZdOC1cUcXaozq4izw"
Date: Sat, 28 Mar 2026 15:01:36 GMT
Connection: close

{
  "message": "User logged in successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5YzdlYjRjMzZiZTQ3YmEzODY5MGFjMyIsImVtYWlsIjoiYWxpY2VAdGVzdC5jb20iLCJpYXQiOjE3NzQ3MTAwOTYsImV4cCI6MTc3NDcxMzY5Nn0.LZtnH34PDGvfQUvXtFwbwZIavdgoIzcTJMMXBWLnYFw",
  "user": {
    "id": "69c7eb4c36be47ba38690ac3",
    "name": "Alice",
    "email": "alice@test.com"
  }
}
```

### request:

```http
POST {{baseUrl}}/auth/login
Content-Type: application/json

{
  "email": "bob@test.com",
  "password": "password123"
}
```

###  response:

```http
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 330
ETag: W/"14a-KIq5RfPxeSlJu0ulRZZvVo3FIl4"
Date: Sat, 28 Mar 2026 15:02:07 GMT
Connection: close

{
  "message": "User logged in successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5YzdlYmQ0MzZiZTQ3YmEzODY5MGFjNiIsImVtYWlsIjoiYm9iQHRlc3QuY29tIiwiaWF0IjoxNzc0NzEwMTI3LCJleHAiOjE3NzQ3MTM3Mjd9.WKMGXDsT065D_DGAxS7bh8Nml1HVutbF25ZlM0SWFO0",
  "user": {
    "id": "69c7ebd436be47ba38690ac6",
    "name": "Bob",
    "email": "bob@test.com"
  }
}
```



---

## GET ASSIGNABLE USERS (Alice)

### request:

```http
GET {{baseUrl}}/users/assignable
Authorization: Bearer {{aliceToken}}
```

###  response:

```http
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 72
ETag: W/"48-7hCJCDJu+7oEzuexYsGH8FkYeeA"
Date: Sat, 28 Mar 2026 15:02:34 GMT
Connection: close

[
  {
    "_id": "69c7ebd436be47ba38690ac6",
    "name": "Bob",
    "email": "bob@test.com"
  }
]
```



---

## CREATE TASKS (Alice)

### request:

```http
POST {{baseUrl}}/tasks
Authorization: Bearer {{aliceToken}}
Content-Type: application/json

{
  "title": "Alice Task 1",
  "description": "Owned by Alice",
  "priority": "high"
}
```

###  response:

```http
HTTP/1.1 201 Created
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 263
ETag: W/"107-fRE09XReHDH1t4jqR/Hf5RWkABo"
Date: Sat, 28 Mar 2026 15:06:59 GMT
Connection: close

{
  "title": "Alice Task 1",
  "description": "Owned by Alice",
  "done": false,
  "priority": "high",
  "userId": "69c7eb4c36be47ba38690ac3",
  "assignedUserId": null,
  "_id": "69c7ee9336be47ba38690acb",
  "createdAt": "2026-03-28T15:06:59.500Z",
  "updatedAt": "2026-03-28T15:06:59.500Z",
  "__v": 0
}
```

### request:

```http
POST {{baseUrl}}/tasks
Authorization: Bearer {{aliceToken}}
Content-Type: application/json

{
  "title": "Alice Task 2",
  "description": "To assign"
}
```

### response:

```http
HTTP/1.1 201 Created
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 260
ETag: W/"104-oOK+bbfRl6rYNp06Y9b9LEe/TYc"
Date: Sat, 28 Mar 2026 15:08:33 GMT
Connection: close

{
  "title": "Alice Task 2",
  "description": "To assign",
  "done": false,
  "priority": "medium",
  "userId": "69c7eb4c36be47ba38690ac3",
  "assignedUserId": null,
  "_id": "69c7eef136be47ba38690acd",
  "createdAt": "2026-03-28T15:08:33.928Z",
  "updatedAt": "2026-03-28T15:08:33.928Z",
  "__v": 0
}
```



---

## CREATE  TASK (Bob)

### request:

```http
POST {{baseUrl}}/tasks
Authorization: Bearer {{bobToken}}
Content-Type: application/json

{
  "title": "Bob Task 1",
  "description": "Owned by Bob"
}
```

###  response:

```http
HTTP/1.1 201 Created
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 261
ETag: W/"105-EdonIiEndATAcztYxCpR0ajJK+A"
Date: Sat, 28 Mar 2026 15:12:13 GMT
Connection: close

{
  "title": "Bob Task 1",
  "description": "Owned by Bob",
  "done": false,
  "priority": "medium",
  "userId": "69c7ebd436be47ba38690ac6",
  "assignedUserId": null,
  "_id": "69c7efcd36be47ba38690acf",
  "createdAt": "2026-03-28T15:12:13.033Z",
  "updatedAt": "2026-03-28T15:12:13.033Z",
  "__v": 0
}
```



---

## ASSIGN TASK (Alice → Bob)

### request:

```http
PATCH {{baseUrl}}/tasks/{{task2Id}}/assign
Authorization: Bearer {{aliceToken}}
Content-Type: application/json

{
  "assignedUserId": "{{bobId}}"
}
```

### response:

```http
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 282
ETag: W/"11a-sHnhAiQGHcE1JoJbDCsOERsxa+w"
Date: Sat, 28 Mar 2026 15:14:33 GMT
Connection: close

{
  "_id": "69c7eef136be47ba38690acd",
  "title": "Alice Task 2",
  "description": "To assign",
  "done": false,
  "priority": "medium",
  "userId": "69c7eb4c36be47ba38690ac3",
  "assignedUserId": "69c7ebd436be47ba38690ac6",
  "createdAt": "2026-03-28T15:08:33.928Z",
  "updatedAt": "2026-03-28T15:14:33.557Z",
  "__v": 0
}
```



---

## GET ALL TASKS

### request (Alice)

```http
GET {{baseUrl}}/tasks
Authorization: Bearer {{aliceToken}}
```

### response: (ownership-enforced)

```http
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 548
ETag: W/"224-K/OP68fq2in5oAvvbK7ovVbX3Js"
Date: Sat, 28 Mar 2026 15:15:34 GMT
Connection: close

[
  {
    "_id": "69c7eef136be47ba38690acd",
    "title": "Alice Task 2",
    "description": "To assign",
    "done": false,
    "priority": "medium",
    "userId": "69c7eb4c36be47ba38690ac3",
    "assignedUserId": "69c7ebd436be47ba38690ac6",
    "createdAt": "2026-03-28T15:08:33.928Z",
    "updatedAt": "2026-03-28T15:14:33.557Z",
    "__v": 0
  },
  {
    "_id": "69c7ee9336be47ba38690acb",
    "title": "Alice Task 1",
    "description": "Owned by Alice",
    "done": false,
    "priority": "high",
    "userId": "69c7eb4c36be47ba38690ac3",
    "assignedUserId": null,
    "createdAt": "2026-03-28T15:06:59.500Z",
    "updatedAt": "2026-03-28T15:06:59.500Z",
    "__v": 0
  }
]

```

### request (Bob)

```http
GET {{baseUrl}}/tasks
Authorization: Bearer {{bobToken}}
```

### response : (ownership-enforced)

```http
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 546
ETag: W/"222-oEs3qpYyMy/vGmSJ8XALyBbgnqA"
Date: Sat, 28 Mar 2026 15:15:56 GMT
Connection: close

[
  {
    "_id": "69c7efcd36be47ba38690acf",
    "title": "Bob Task 1",
    "description": "Owned by Bob",
    "done": false,
    "priority": "medium",
    "userId": "69c7ebd436be47ba38690ac6",
    "assignedUserId": null,
    "createdAt": "2026-03-28T15:12:13.033Z",
    "updatedAt": "2026-03-28T15:12:13.033Z",
    "__v": 0
  },
  {
    "_id": "69c7eef136be47ba38690acd",
    "title": "Alice Task 2",
    "description": "To assign",
    "done": false,
    "priority": "medium",
    "userId": "69c7eb4c36be47ba38690ac3",
    "assignedUserId": "69c7ebd436be47ba38690ac6",
    "createdAt": "2026-03-28T15:08:33.928Z",
    "updatedAt": "2026-03-28T15:14:33.557Z",
    "__v": 0
  }
]

```



---

## GET FILTERED

### request

```http
GET {{baseUrl}}/tasks/mine
Authorization: Bearer {{aliceToken}}
```

### response

```http
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 548
ETag: W/"224-K/OP68fq2in5oAvvbK7ovVbX3Js"
Date: Sat, 28 Mar 2026 15:18:18 GMT
Connection: close

[
  {
    "_id": "69c7eef136be47ba38690acd",
    "title": "Alice Task 2",
    "description": "To assign",
    "done": false,
    "priority": "medium",
    "userId": "69c7eb4c36be47ba38690ac3",
    "assignedUserId": "69c7ebd436be47ba38690ac6",
    "createdAt": "2026-03-28T15:08:33.928Z",
    "updatedAt": "2026-03-28T15:14:33.557Z",
    "__v": 0
  },
  {
    "_id": "69c7ee9336be47ba38690acb",
    "title": "Alice Task 1",
    "description": "Owned by Alice",
    "done": false,
    "priority": "high",
    "userId": "69c7eb4c36be47ba38690ac3",
    "assignedUserId": null,
    "createdAt": "2026-03-28T15:06:59.500Z",
    "updatedAt": "2026-03-28T15:06:59.500Z",
    "__v": 0
  }
]

```

### request

```http
GET {{baseUrl}}/tasks/assigned
Authorization: Bearer {{bobToken}}
```

### response

```http
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 284
ETag: W/"11c-9F3QUVGnqk090GEmXW/+XeJ1ra8"
Date: Sat, 28 Mar 2026 15:18:48 GMT
Connection: close

[
  {
    "_id": "69c7eef136be47ba38690acd",
    "title": "Alice Task 2",
    "description": "To assign",
    "done": false,
    "priority": "medium",
    "userId": "69c7eb4c36be47ba38690ac3",
    "assignedUserId": "69c7ebd436be47ba38690ac6",
    "createdAt": "2026-03-28T15:08:33.928Z",
    "updatedAt": "2026-03-28T15:14:33.557Z",
    "__v": 0
  }
]
```



---

## UPDATE TASK (Alice)

### request:

```http
PATCH {{baseUrl}}/tasks/{{task1Id}}
Authorization: Bearer {{aliceToken}}
Content-Type: application/json

{
  "done": true,
  "priority": "medium"
}
```

### response:

```http
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 264
ETag: W/"108-dR52ksbsxsEwfUomwysQVkXLiQg"
Date: Sat, 28 Mar 2026 15:19:33 GMT
Connection: close

{
  "_id": "69c7ee9336be47ba38690acb",
  "title": "Alice Task 1",
  "description": "Owned by Alice",
  "done": true,
  "priority": "medium",
  "userId": "69c7eb4c36be47ba38690ac3",
  "assignedUserId": null,
  "createdAt": "2026-03-28T15:06:59.500Z",
  "updatedAt": "2026-03-28T15:19:33.418Z",
  "__v": 0
}
```

---

## FORBIDDEN UPDATE (Bob → Alice task)

### request:

```http
PATCH {{baseUrl}}/tasks/{{task1Id}}
Authorization: Bearer {{bobToken}}
Content-Type: application/json

{
  "title": "Hacked"
}
```

### response:

```http
HTTP/1.1 403 Forbidden
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 23
ETag: W/"17-bqIm6pxC4cx+ZoszvXxsClwgWw8"
Date: Sat, 28 Mar 2026 15:20:53 GMT
Connection: close

{
  "message": "Forbidden"
}
```

---

## DELETE TASK (Alice)

### request:

```http
DELETE {{baseUrl}}/tasks/{{task1Id}}
Authorization: Bearer {{aliceToken}}
```

### response

```http
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 26
ETag: W/"1a-EXuvryuVXWlMt0iHutTdXWDMZ38"
Date: Sat, 28 Mar 2026 15:21:49 GMT
Connection: close

{
  "message": "Task deleted"
}
```

---

## FORBIDDEN DELETE (Bob)

### request

```http
DELETE {{baseUrl}}/tasks/{{task2Id}}
Authorization: Bearer {{bobToken}}
```

### response

```http
HTTP/1.1 403 Forbidden
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 23
ETag: W/"17-bqIm6pxC4cx+ZoszvXxsClwgWw8"
Date: Sat, 28 Mar 2026 15:23:22 GMT
Connection: close

{
  "message": "Forbidden"
}
```

