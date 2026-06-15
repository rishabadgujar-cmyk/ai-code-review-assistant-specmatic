import ast


def analyze_metrics(code):

    try:

        tree = ast.parse(code)

        functions = 0
        classes = 0

        for node in ast.walk(tree):

            if isinstance(node, ast.FunctionDef):
                functions += 1

            elif isinstance(node, ast.ClassDef):
                classes += 1

        lines_of_code = len(
            code.splitlines()
        )

        return {

            "lines_of_code":
                lines_of_code,

            "functions":
                functions,

            "classes":
                classes

        }

    except Exception:

        return {

            "lines_of_code": 0,

            "functions": 0,

            "classes": 0

        }