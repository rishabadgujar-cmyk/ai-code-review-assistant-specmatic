from radon.complexity import cc_visit


def analyze_complexity(code):

    results = cc_visit(code)

    complexity = []

    for item in results:

        complexity.append(
            {
                "function": item.name,
                "complexity": item.complexity
            }
        )

    return complexity