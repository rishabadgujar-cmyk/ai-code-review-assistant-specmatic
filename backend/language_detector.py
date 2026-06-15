def get_language(filename):

    extension = filename.split(".")[-1]

    languages = {

        "py": "Python",

        "js": "JavaScript",

        "jsx": "React",

        "ts": "TypeScript",

        "tsx": "TypeScript React",

        "java": "Java",

        "cpp": "C++",

        "c": "C",

        "cs": "C#",

        "go": "Go"

    }

    return languages.get(
        extension,
        "Unknown"
    )