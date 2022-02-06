class Introduction {
    name: String
    gender: Gender
    birthdayTimestamp: number
    residence: Coordinates
    imageUrl: String
    resumeUrl: String

    constructor() {
        this.name = "Omer Erdem"
        this.gender = Gender.Male
        this.birthdayTimestamp = 922968000
        this.residence = new Coordinates(52.37319418639191, 4.891432372896032)
        this.imageUrl = "https://www.omererdem.nl/img/selfie/selfie.webp"
        this.resumeUrl = "https://www.omererdem.nl/doc/OmerErdem_Resume.pdf"
    }

    getStudyInformation() {
        return new Study(
            "Software Engineering",
            "Amsterdam University of Applied Sciences",
            4
        )
    }

    getGoals() {
        return new Goals(
            "Full Stack Developer",
            [ "New fun projects", "Challenges to improve my skills", "New programming techniques" ],
            "Make the world a better place, even if it goes unnoticed."
        )
    }

    getPreferences() {
        return ["Windows", "Frontend", "Dark mode", "Minimalistic"]
    }

    getHobbies() {
        return ["Programming", "Gaming", "Driving around", "Experimenting"]
    }
}

enum Gender {
    Male, Female, Apache_Helicopter
}

class Coordinates {
    latitude: number
    longitude: number

    constructor(latitude: number, longitude: number) {
        this.latitude = latitude;
        this.longitude = longitude;
    }
}

class Study {
    name: String
    university: String
    year: number

    constructor(name: String, university: String, year: number) {
        this.name = name;
        this.university = university;
        this.year = year;
    }
}

class Goals{
    job: String
    searchHistory: String[]
    ultimateGoal: String

    constructor(job: String, searchHistory: String[], ultimateGoal: String) {
        this.job = job;
        this.searchHistory = searchHistory;
        this.ultimateGoal = ultimateGoal;
    }
}