export class RestService {

    private static API_HOST = "https://api.host"

    private static sendRequest(url: string, methode: string, data: object){
        return fetch(this.API_HOST + url, {
            method: methode,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }

    /**
     * Login of a user
     * @param username  Display name of user
     * @param email     E-Mail address of user
     * @param password  Password of user
     */
    static loginUser(username: string, email: string, password: string){
        this.sendRequest("/users/authenticate/", "POST", {
            displayName: username,
            email: email,
            password: password
        }).then(response => {
            if(response.status == 200){
                return true;
            }else if(response.status == 400){
                //TODO: maybe more detailed errors
                return false;
            }
        });
    }

    /**
     * Checks whether the user is logged in
     * @return boolean  If action was successful
     */
    static isLogin(){
        this.sendRequest("/users/logincheck/", "GET", {
        }).then(response => {
            if(response.status == 200){
                return true;
            }else if(response.status == 400){
                //TODO: maybe more detailed errors
                return false;
            }
        });
    }

    /**
     * Creates a new user in the system
     * @param username      Display name of user
     * @param email         E-Mail address of user
     * @param password      Password of user
     * @param profileImage  Id of profile image
     * @return boolean  If action was successful
     */
    static registerUser(username: string, email: string, password: string, profileImage: string){
        this.sendRequest("/users/register/", "POST", {
            displayName: username,
            email: email,
            password: password,
            profileImage: profileImage
        }).then(response => {
            if(response.status == 200){
                return true;
            }else if(response.status == 400){
                //TODO: maybe more detailed errors
                return false;
            }
        });
    }

    /**
     * Revokes all current session-tokens of the user
     * @return boolean  If action was successful
     */
    static revokeAllTokens(){
        this.sendRequest("/users/security/revokeAllTokens/", "POST", {
        }).then(response => {
            if(response.status == 200){
                return true;
            }else if(response.status == 400){
                //TODO: maybe more detailed errors
                return false;
            }
        })
    }

    /**
     * Revokes the current session-tokens of the user [in the current browser]
     * @return boolean  If action was successful
     */
    static revokeTokens(){
        this.sendRequest("/users/security/revokeTokens/", "POST", {
        }).then(response => {
            if(response.status == 200){
                return true;
            }else if(response.status == 400){
                //TODO: maybe more detailed errors
                return false;
            }
        })
    }

    /**
     * Verifies the users email-address
     * @param verificationNumber    The 6-digit number the user received via e-mail
     * @return boolean              If verification was successful
     */
    static verifyEMail(verificationNumber: number){
        this.sendRequest("/users/security/verify/" + verificationNumber, "GET", {
        }).then(response => {
            if(response.status == 200){
                return true;
            }else if(response.status == 400){
                //TODO: maybe more detailed errors
                return false;
            }
        });
    }

}
