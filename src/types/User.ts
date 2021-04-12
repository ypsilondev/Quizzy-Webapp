export class User {
    displayName: String;
    _id: String;
    profileImage: String;
    totalScore: number;

    constructor(displayName: String, id: String, profileImage: String, totalScore: number) {
        this.displayName = displayName;
        this._id = id;
        this.profileImage = profileImage;
        this.totalScore = totalScore;
    }
}
