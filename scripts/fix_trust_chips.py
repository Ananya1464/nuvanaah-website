import re, sys
sys.stdout.reconfigure(encoding='utf-8')

filepath = r'D:\nuvaanah\app\products\[slug]\ProductPageClient.tsx'

with open(filepath, 'r', encoding='utf-8', errors='replace') as f:
    content = f.read()

# Replace the corrupted trust chip array with clean text
pattern = r"\['=\S* Free over \S*999',\s*'=\S+ COD available',\s*'=\S* Discreet packaging'\]"
replacement = "['Free shipping \u20b9999+', 'COD available', 'Discreet packaging']"

new_content = re.sub(pattern, replacement, content)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(new_content)

changed = content != new_content
print('Fixed:', changed)
if not changed:
    # Try line-by-line approach
    lines = content.split('\n')
    for i, line in enumerate(lines):
        if 'Free over' in line and 'COD available' in line:
            print(f'Line {i}: {repr(line)}')
