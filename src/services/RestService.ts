import {User} from "@/types/User";

export class RestService {

    private static API_HOST = "https://quiz.shirkanesi.com"

    private static sendRequest(url: string, methode: string, data: object) {
        if (Object.keys(data).length > 0) {
            return fetch(this.API_HOST + url, {
                method: methode,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        }else{
            return fetch(this.API_HOST + url, {
                method: methode,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
    }

    /**
     * Login of a user
     * @param username  User name of user
     * @param password  Password of user
     * @return User     User object or null if login was not successful
     */
    static async loginUser(username: string, password: string) {
        const response = await this.sendRequest("/users/authenticate/", "POST", {
            loginName: username,
            password: password
        });
        if(response.status == 200){
            const json = await response.json();
            const user: User = json.user;
            return user;
        }else if(response.status == 400){
            return null;
        }
    }

    /**
     * Checks whether the user is logged in
     * @return boolean  If action was successful
     */
    static async isLogin() {
        const response = await this.sendRequest("/users/logincheck/", "GET", {});
        if (response.status == 200) {
            return true;
        } else if (response.status == 400) {
            return false;
        }
    }

    /**
     * Creates a new user in the system
     * @param username      Display name of user
     * @param email         E-Mail address of user
     * @param password      Password of user
     * @param profileImage  Id of profile image
     * @return User         User object
     */
    static async registerUser(username: string, email: string, password: string, profileImage: string) {
        const response = await this.sendRequest("/users/register/", "POST", {
            displayName: username,
            email: email,
            password: password,
            profileImage: profileImage
        });
        if(response.status == 200){
            response.json().then(json => {
                const user: User = json;
                return user;
            })
        }else if(response.status == 400){
            return null;
        }
    }

    /**
     * Revokes all current session-tokens of the user
     * @return boolean  If action was successful
     */
    static async revokeAllTokens() {
        const response = await this.sendRequest("/users/security/revokeAllTokens/", "POST", {});
        if(response.status == 200){
            return true;
        }else if(response.status == 400){
            //TODO: maybe more detailed errors
            return false;
        }
    }

    /**
     * Revokes the current session-token of the user [in the current browser]
     * @return boolean  If action was successful
     */
    static async revokeToken() {
        const response = await this.sendRequest("/users/security/revokeToken/", "POST", {});
        if(response.status == 200){
            return true;
        }else if(response.status == 400){
            //TODO: maybe more detailed errors
            return false;
        }
    }

    /**
     * Verifies the users email-address
     * @param verificationNumber    The 6-digit number the user received via e-mail
     * @return boolean              If verification was successful
     */
    static async verifyEMail(verificationNumber: number) {
        const response = await this.sendRequest("/users/security/verify/" + verificationNumber, "GET", {});
        if(response.status == 200){
            return true;
        }else if(response.status == 400){
            //TODO: maybe more detailed errors
            return false;
        }
    }

}
