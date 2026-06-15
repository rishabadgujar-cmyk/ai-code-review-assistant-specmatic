from git import Repo
import os
import shutil


def clone_repository(repo_url):

    folder = "temp_repo"

    if os.path.exists(folder):
        shutil.rmtree(folder)

    Repo.clone_from(
        repo_url,
        folder
    )

    return folder


def get_code_files(repo_path):

    code_files = []

    extensions = (
        ".py",
        ".js",
        ".jsx",
        ".ts",
        ".tsx"
    )

    for root, dirs, files in os.walk(repo_path):

        for file in files:

            if file.endswith(extensions):

                code_files.append(

                    os.path.join(
                        root,
                        file
                    )

                )

    return code_files


def read_files(files):

    all_code = ""

    for file in files:

        try:

            with open(
                file,
                encoding="utf-8"
            ) as f:

                all_code += "\n\n"
                all_code += f.read()

        except:

            pass

    return all_code