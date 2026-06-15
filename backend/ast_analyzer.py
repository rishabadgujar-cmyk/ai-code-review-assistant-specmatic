import ast


def analyze_code(code):

    bugs = []
    security = []
    performance = []
    best_practices = []

    try:
        tree = ast.parse(code)

        for node in ast.walk(tree):

            # Missing docstrings
            if isinstance(node, ast.FunctionDef):

                if ast.get_docstring(node) is None:

                   best_practices.append({
    "severity": "low",
    "message": f"Function '{node.name}' is missing a docstring."
})

                # Too many parameters
                if len(node.args.args) > 5:

                    best_practices.append({
    "severity": "high",
    "message": f"Function '{node.name}' has too many parameters."
})

                # Large function
                if len(node.body) > 20:

                    performance.append({
    "severity": "medium",
    "message": f"Function '{node.name}' is too large."
})

            # Dangerous functions
            if isinstance(node, ast.Call):

                if isinstance(node.func, ast.Name):

                    if node.func.id == "eval":

                        security.append({
    "severity": "critical",
    "message": "Use of eval() detected."
})

                    if node.func.id == "exec":

                       security.append({
    "severity": "critical",
    "message": "Use of exec() detected."
})

    except Exception as e:

        bugs.append(
            f"AST parsing failed: {str(e)}"
        )

    return {
        "bugs": bugs,
        "security": security,
        "performance": performance,
        "best_practices": best_practices
    }