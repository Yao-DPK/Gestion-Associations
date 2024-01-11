#!/bin/bash

# Function to register a new user
function registerUser() {
  local firstname=$1
  local lastname=$2
  local age=$3
  local password=$4

  echo "Registering user $firstname $lastname..."
  local registrationResponse=$(curl -s -X POST http://localhost:3000/users -d "firstname=$firstname&lastname=$lastname&age=$age&password=$password")

  # Check for registration errors
  if [[ $(echo $registrationResponse | jq -r '.statusCode') != "201" ]]; then
    echo "Error during registration: $(echo $registrationResponse | jq -r '.message')"
    exit 1
  fi

  local userId=$(echo $registrationResponse | jq -r '.id')
  echo "User registered with ID: $userId"
  echo $userId
}

# Function to log in a user
function loginUser() {
  local userId=$1
  local password=$2

  # Cast userId to integer
  userId=$(echo $userId | awk '{print int($1)}')

  echo "Logging in user with ID $userId..."
  curl -X POST http://localhost:3000/auth/login -d "username=$userId&password=$password" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6MSwiaWF0IjoxNjE3NzM5MzkxLCJleHAiOjE2MTc3Mzk0NTF9.p8uuEpr16YOhoCPjwWNLLQyeKDCxvbixwDa0q60whYI"

}

# Main test scenario
function main() {
  # Register a new user
  userId=$(registerUser "John" "Doe" 25 "johnpassword")

  # Sleep for a moment to allow registration to complete (this is just for the purpose of the test script)
  sleep 1

  # Log in the registered user
  loginUser 7 "johnpassword" 
}

# Run the test
main
