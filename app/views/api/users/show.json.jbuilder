json.set! @user.id do
    json.id @user.id
    json.email @user.email
    json.firstName @user.first_name
    json.lastName @user.last_name
    json.createAt @user.created_at
end