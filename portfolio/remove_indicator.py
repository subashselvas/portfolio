import os
import re

filepath = r"c:\Users\Subash S\OneDrive\Desktop\portfolio\portfolio\src\components\Navbar.jsx"
with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

# Remove sliding pill DOM element
content = content.replace(
    '<div className="sliding-pill" style={{ left: indicatorStyle.left, width: indicatorStyle.width, opacity: indicatorStyle.opacity }} />',
    ''
)

# Remove sliding pill CSS block
css_pattern = r"\s*\.sliding-pill\s*\{[\s\S]*?z-index:\s*10;\s*\}"
content = re.sub(css_pattern, '', content)

with open(filepath, "w", encoding="utf-8") as f:
    f.write(content)
print("Indicator removed!")
