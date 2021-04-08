export class Player {
    username: String = "";
    icon: String = "";
    reputationPoints: number = 0;
    wins: number = 0;

    constructor(username: String, icon: String, reputationPoints: number, wins: number) {
        this.username = username;
        this.icon = icon;
        this.reputationPoints = reputationPoints;
        this.wins = wins;
    }
}
