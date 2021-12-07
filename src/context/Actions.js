export const LoginStart = (userCredentials)=>({
    type: "LOGIN_START"
})

export const LoginSuccess = (user)=>({
    type: "LOGIN_SUCCESS",
    payload: user,
});

export const LoginFailuer =()=>({
    type: "LOGIN_FAILURE",
})
export const Logout =()=>({
    type: "LOGIN_FAILURE",
})


export const UpdateStart = (userCredentials)=>({
    type: "UPDATE_START"
})

export const UpdateSuccess = (user)=>({
    type: "UPDATE_SUCCESS",
    payload: user,
});

export const UpdateFailuer =()=>({
    type: "UPDATE_FAILURE",
});



