# task

create a register endpoint
install nodemailer
configure gmail as smpt server *documentation
configure the email service
    create and export email function
    inject the email service as userService parameter

when the user POST a /register request, create the user and send an activation link with a token

create the activation endpoint and GET the token in a query
validate the token if the token is valid, change the user status to active
