export const signUp = user => {
    return (
        $.ajax({
            url: "api/users",
            method: "POST",
            data: { user: {
                email: user.email,
                password: user.password,
                first_name: user.firstName,
                last_name: user.lastName 
            } }
        })
    );
};

export const logIn = user => {
    return (
        $.ajax({
            url: "api/session",
            method: "POST",
            data: { user }
        })
    );
};

export const logOut = () => {
    return (
        $.ajax({
            url: "api/session",
            method: "DELETE"
        })
    );
};

export const demoLogIn = () => {
    return (
        $.ajax({
            url: "api/session",
            method: "POST",
            data: {
                user: {
                    email: "demo@gmail.com",
                    password: "asdf123"
                }
            }
        })
    )
}