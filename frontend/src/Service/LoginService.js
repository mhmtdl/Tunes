const LoginService={
    onLogin,
    onFacebookLogin
}

function onLogin(formData){
    return fetch(`${process.env.REACT_APP_API_URL}/onLogin`,{
        method:"POST",
        body:formData,
        credentials:'include'
    }).then(function(res){ return res.json(); }).catch(err=>console.log(err));
}
function onFacebookLogin(){
    return fetch(`${process.env.REACT_APP_API_URL}/auth/facebook`,{
        method:"GET",
//         mode:"no-cors"
        // body:JSON.stringify({"access_token":"EAAWoFEvFPRIBAAvGhG6NsdZB40t1Q0ErzZCUI2ZAMNZATSHmPolUByuFtbxUEhBAwBUqiYz8GiN2ZCMs8xSwcjbEp9RpR6fw0xZBxZBtVssgpy4X4i33UT5d1IXvgvcgHgo9b5hYC394N7LDbrV9HzTRwZB7GmU6HNIz2P0KZC9ViZCwZDZD"})
    }).then(function(res){ console.log(res) }).catch(err=>console.log(err));
}


export default LoginService
