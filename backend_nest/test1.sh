#!/bin/bash

echo '

Adding three new users
'
curl -X POST http://localhost:3000/users -d "firstname=John&lastname=Doe&age=23&password=john"
curl -X POST http://localhost:3000/users -d "firstname=Janette&lastname=Doe&age=32&password=janette"

echo '

Getting users with id=1 and id=2
'
curl http://localhost:3000/users/1
curl http://localhost:3000/users/2

echo '

Creating an association and adding two new users to said association
'
curl -X POST http://localhost:3000/associations -d "idUsers[]=1&idUsers[]=2&name=Assoc1"
curl -X POST http://localhost:3000/associations -d "idUsers[]=1&name=Assoc2"


echo '

Getting all associations
'
curl http://localhost:3000/associations


echo '

Getting associations with id=1 and id=2
'
curl http://localhost:3000/associations/1
curl http://localhost:3000/associations/2

echo '

Getting members of association with id = 2
'
curl http://localhost:3000/associations/2/members
