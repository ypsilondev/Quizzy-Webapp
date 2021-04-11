export class RestService {

    private static API_HOST = "https://api.host"

    private static sendRequest(url: string, data: object){
        return fetch(this.API_HOST + url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }

    static loginUser(username: string, email: string, password: string){
        this.sendRequest("/users/authenticate/", {
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

}
