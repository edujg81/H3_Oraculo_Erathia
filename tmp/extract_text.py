import re
import sys

try:
    with open('/tmp/spells.html', 'r', encoding='utf-8') as f:
        html = f.read()
except Exception as e:
    print("Error reading /tmp/spells.html:", e)
    sys.exit(1)

# Strip script and style
html = re.sub(r'<script.*?>.*?</script>', '', html, flags=re.DOTALL)
html = re.sub(r'<style.*?>.*?</style>', '', html, flags=re.DOTALL)

# Strip all html tags and keep text
text = re.sub(r'<.*?>', ' ', html)
# Normalize spacing
text = re.sub(r'\s+', ' ', text)

# Write to text file in workspace
with open('spells.txt', 'w', encoding='utf-8') as f:
    f.write(text)

print("Extracted text of length", len(text))
