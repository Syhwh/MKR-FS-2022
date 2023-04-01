
 **Features**

## Authentication

1. As a new user, I want to be able to register an account on the web application, so that I can access its features.

### Backend

- [ ] User register
  - [ ] Validation unique
  - [ ] Validate correct data
    - [ ] password: min 6 char - [AZaz19@!]
  - [ ]  Password encryption
  - [ ] Create new user in the database

#### Acceptance Criteria

- The user's information is saved in the database
- A verification email is sent to the user's email address
- Unit test: Verify that the user's information is saved in the database
-

### Frontend

#### Description

- Create a user registration page with email and password fields
- [ ] Data validation
  - [ ] email
  - [ ]  password: min 6 char - [AZaz19@!]
  - [ ] password match
- Once registered, the user is redirected to the login page

#### Acceptance Criteria

- The user is redirected to the login page after registration
- Integration test: Verify that the verification email is sent to the user's email address
- E2E test: Verify that the user is redirected to the login page after registration

---

2. As a user, I want to be able to log in to the web application, so that I can access my projects and to-do lists.

### Backend

- [ ] User validation
- [ ] Return token

### Frontend

#### Description

- Create a user login page with email and password fields
- [ ] Data validation
  - [ ] non empty fields
  - [ ] error messages
- After successful login, the user is redirected to the dashboard page

Acceptance Criteria:

- The user is redirected to the dashboard page after successful login
- The user's session is saved in the database
- Unit test: Verify that the user's session is saved in the database
- Integration test: Verify that the user is redirected to the dashboard page after successful login
- E2E test: Verify that the user is redirected to the dashboard page after successful login

---

3. As a user, I want to be able to recover my password, so that I can access my projects and to-do lists.

### Backend

- [ ] User validation
- [ ] Create and send token email
  - [ ] *short time
- [ ] Return link with token for password recovering
- [ ] Validate TOKEN password recovery
- [ ] update password

### Frontend

- [ ] Create a user recovery page with email  field
- [ ] redirect or show message / "a link has been sent..."
- [ ] Create a redirect / user recovery page with password  fields

## logout

As a user, I want to be able to logout my account, so that I can block access to my account.

### Frontend

- [ ] Create a logout button
- [ ] Redirect to home
- [ ] delete token

### Backend

- [ ] Remove access token

#### Users

4. As a user, I want to be able to update my profile, so that I can update my personal info.

### Backend

 Update

- [ ] name
- [ ] picture

### Frontend

 Create a user profile to show user info and allow edit user info

## Projects

As a user, I want to be able to create a new project, so that I can organize my tasks.

Description:

- Create a "Create Project" page with a form to input project details
- Save the project details in the database
- Limit the number of projects to 3 for the free version and allow unlimited projects for the premium version

Acceptance Criteria:

- The project details are saved in the database
- The user is redirected to the project dashboard after creating a new project
- In the free version, the user can only create up to 3 projects
- In the premium version, the user can create unlimited projects
- Unit test: Verify that the project details are saved in the database
- Integration test: Verify that the user is redirected to the project dashboard after creating a new project
- E2E test: Verify that the user is redirected to the project dashboard after creating a new project

### Features

- [ ] Project
  - [ ] Title
  - [ ] Description
  - [ ] Due date

- [ ] Update
- [ ] Delete
- [ ] Mark project as done

### Backend

- [ ] CRUD
- [ ] Validation "access token"
- [ ] Owner only

### Frontend

- [ ] Create a Project page
- [ ] Form with
  - [ ] title
  - [ ] image
  - [ ] description
  - [ ] due date *calendar
- [ ] Edit fields
- [ ] Delete project
- [ ] Confirmation Modal
- [ ] show the percentage of tasks done if is 100% mark project as done
- [ ] show error messages to the user (ie if the user is free and create a 4th project show a modal error with message that he reached the max number of free projects and show link to go premium)

## Tasks

As a user, I want to be able to create a sub-tasks to each project, so that I can divide the big project in small tasks.

### Features

- [ ] Task
  - [ ] Title
- [ ] Update
- [ ] Delete
- [ ] Mark task as done
- [ ] max 5 tasks for free accounts
- [ ] show error messages to the user (ie if the user is free and create a 6th task show a modal error with message that he reached the max number of free projects and show link to go premium)

### Backend

- [ ] CRUD
- [ ] Validation "access token"
- [ ] Owner only
- [ ] task belongs to a project

### Frontend

- [ ] Create a button to add sub-tasks
- [ ] Form with
  - [ ] title
- [ ] Edit fields
- [ ] Delete project
- [ ] Confirmation Modal
- [ ] Mark task as done
- [ ] Edit / delete button

## Premium

As a user, I want to be able to upgrade to the premium version, so that I can create unlimited projects.

Description:

- Create a "Upgrade to Premium" page with payment options (e.g. credit card, PayPal, etc.)
- Implement a payment system to process the payment
- After successful payment, update the user's account to premium status

Acceptance Criteria:

- The user can access the "Upgrade to Premium" page
- The payment system processes the payment correctly
- The user's account is updated to premium status after successful payment
- The user can create unlimited projects after upgrading
- Unit test: Verify that the payment system processes the payment correctly
- Integration test: Verify that the user's account is updated to premium status after successful payment
- E2E test: Verify that the user can create unlimited projects after upgrading to premium status.

### Backend

- [ ] Implement stripe Client
- [ ] Validate payment and unlock premium features
- [ ] create the product in stripe and the price id
- [ ] handle the redirects for success and error
- [ ] Unlock premium features.
- [ ] Premium email notification.

### Frontend

 <https://www.canva.com/pro/#pricing>

- [ ] Create the Page to add the premium
- [ ] Success redirect page
- [ ] Error redirect page

## Email notification

Create the service and implement

- [ ] Template Validate email
- [ ] Template recovery password
- [ ] Template Premium

## Image handle

create the service to

- [ ] Upload images
- [ ] Delete images
