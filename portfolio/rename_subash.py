import os

search_dir = r"c:\Users\Subash S\OneDrive\Desktop\portfolio\portfolio\src\components"
search_str = "Subash S"
replace_str = "SUBASH S"

for filename in os.listdir(search_dir):
    if filename.endswith(".jsx"):
        filepath = os.path.join(search_dir, filename)
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
        
        if search_str in content:
            new_content = content.replace(search_str, replace_str)
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(new_content)
            print(f"Updated {filename}")
