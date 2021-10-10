class GoogleLogin {
    constructor(){
        this.auth2=""
    }
    startApp() {
        console.log("startApp");
       window.gapi.load('auth2', () => {
            // Retrieve the singleton for the GoogleAuth library and set up the client.
            this.auth2 = window.gapi.auth2.init({
                client_id: '311184032153-vamf7d58ofb758dio1mqjkd6tqk0117k.apps.googleusercontent.com',
                cookiepolicy: 'single_host_origin',
                // Request scopes in addition to 'profile' and 'email'
                //scope: 'additional_scope'
            });
            this.attachSignin(document.getElementById('googleBtn'));
        });
    }

    attachSignin(element){
    console.log(element.id);
    this.auth2.attachClickHandler(element, {},
        function (googleUser) {
                googleUser.getBasicProfile().getName();
                console.log('data', googleUser.getBasicProfile().getName())
        }, function (error) {
            alert(JSON.stringify(error, undefined, 2));
        });
}}
export default GoogleLogin;