public class Skills {
    public static List getLanguages() {
        return Array.asList(
                new Language("JavaScript", 4.5, 60),
                new Language("HTML", 4.5, 60),
                new Language("PHP", 4, 31),
                new Language("Java", 4, 18),
                new Language("CSS", 4, 60),
                new Language("TypeScript", 3, 12),
                new Language("Kotlin", 3, 6),
                new Language("Python", 3, 6),
                new Language("JSON", 3, 60),
                new Language("XML", 2, 12),
                new Language("NodeJs", 2, 1),
                new Language("C#", 1, 18)
        )
    }

    public static List getFrameworks() {
        return Array.asList(
                new Framework("Vue.js", 4, 7),
                new Framework("jQuery", 3, 24),
                new Framework("Angular", 3, 6),
                new Framework("React.js", 3, 6),
                new Framework("Spring Boot", 3, 12),
                new Framework("Sass/Scss", 3, 12),
                new Framework("Magento", 2, 6),
                new Framework("Laravel", 2, 2),
                new Framework("Bootstrap", 2, 12),
                new Framework("Knockout.js", 1, 1),
                new Framework("ASP.Net", 1, 12),
                new Framework("Quarkus", 1, 1),
                new Framework("WordPress", 1, 1)
        )
    }

    public static List getEnvironments() {
        return Array.asList(
                new Environment("Windows", 4, 180),
                new Environment("MySQL", 3, 48),
                new Environment("Git", 3, 36),
                new Environment("MacOS", 2, 6),
                new Environment("Raspberry Pi", 2, 3),
                new Environment("Apache", 2, 6),
                new Environment("MongoDB", 2, 3),
                new Environment("Firebase", 2, 3)
        )
    }

    public static List getProjects() {
        return Array.asList(
                new Project("Website builder", 4.5, null),
                new Project("Custom Desktop PC Builder", 4, null),
                new Project("Android App", 2, null),
                new Project("Web API", 2, null),
                new Project("Web Scraper", 2, null),
                new Project("Minecraft Plugin", 2, null),
                new Project("Discord Bot", 2, null),
                new Project("Unity Game", 1, null),
                new Project("E-Commerce Webshop", 1, null)
        )
    }

    public static List getCompetencies() {
        return Array.asList(
                new Competency("Hard worker", 4.5, null),
                new Competency("Team Player", 4, null),
                new Competency("Problem Solver", 4, null),
                new Competency("Creative", 4, null)
        )
    }

    abstract class Skill {
        String name;
        double personalRating;
        int monthsExperience;

        public Skill(String name, double personalRating, int monthsExperience) {
            this.name = name;
            this.personalRating = personalRating;
            this.monthsExperience = monthsExperience;
        }
    }

    protected class Language extends Skill {
        public Language(String name, double personalRating, int monthsExperience) {
            super(name, personalRating, monthsExperience);
        }
    }

    protected class Framework extends Skill {
        public Framework(String name, double personalRating, int monthsExperience) {
            super(name, personalRating, monthsExperience);
        }
    }

    protected class Environment extends Skill {
        public Environment(String name, double personalRating, int monthsExperience) {
            super(name, personalRating, monthsExperience);
        }
    }

    protected class Project extends Skill {
        public Project(String name, double personalRating, int monthsExperience) {
            super(name, personalRating, monthsExperience);
        }
    }

    protected class Competency extends Skill {
        public Competency(String name, double personalRating, int monthsExperience) {
            super(name, personalRating, monthsExperience);
        }
    }