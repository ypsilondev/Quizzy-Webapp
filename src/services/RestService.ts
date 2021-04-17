export class RestService {

    private static API_HOST = "https://quiz.shirkanesi.com"

    private static sendRequest(url: string, method: string, data: object) {
        if (Object.keys(data).length > 0) {
            return fetch(this.API_HOST + url, {
                method: method,
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        } else {
            return fetch(this.API_HOST + url, {
                method: method,
                credentials: 'include',
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
    static async loginUser(username: string, password: string) : Promise<User | null> {
        const response = await this.sendRequest("/users/authenticate/", "POST", {
            loginName: username,
            password: password
        });
        if (response.status == 200) {
            const json = await response.json();
            return json.user;
        }
        return null;
    }

    /**
     * Checks whether the user is logged in
     * @return boolean  If action was successful
     */
    static async isLogin() : Promise<Boolean> {
        const response = await this.sendRequest("/users/logincheck/", "GET", {});
        return response.status == 200;
    }

    /**
     * Creates a new user in the system
     * @param username      Display name of user
     * @param email         E-Mail address of user
     * @param password      Password of user
     * @param profileImage  Id of profile image
     * @return User         User object
     */
    static async registerUser(username: string, email: string, password: string, profileImage: string) : Promise<User | null> {
        const response = await this.sendRequest("/users/register/", "POST", {
            displayName: username,
            email: email,
            password: password,
            profileImage: profileImage
        });
        if (response.status == 200) {
            const json = await response.json();
            return json.user;
        }
        return null;
    }

    /**
     * Revokes all current session-tokens of the user
     * @return boolean  If action was successful
     */
    static async revokeAllTokens() : Promise<Boolean> {
        const response = await this.sendRequest("/users/security/revokeAllTokens/", "POST", {});
        return response.status == 200;
    }

    /**
     * Revokes the current session-token of the user [in the current browser]
     * @return boolean  If action was successful
     */
    static async revokeToken() : Promise<Boolean> {
        const response = await this.sendRequest("/users/security/revokeToken/", "POST", {});
        return response.status == 200;
    }

    /**
     * Verifies the users email-address
     * @param verificationNumber    The 6-digit number the user received via e-mail
     * @return boolean              If verification was successful
     */
    static async verifyEMail(verificationNumber: number) : Promise<Boolean> {
        const response = await this.sendRequest("/users/security/verify/" + verificationNumber, "GET", {});
        return response.status == 200;
    }

}
