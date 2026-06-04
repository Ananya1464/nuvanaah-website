import re

filepath = r'D:\nuvaanah\app\products\[slug]\ProductPageClient.tsx'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix words
content = content.replace('—ift', 'Gift')
content = content.replace('—allery', 'Gallery')
content = content.replace('—uide', 'Guide')
content = content.replace('PA—E', 'PAGE')
content = content.replace('—entle', 'Gentle')

# Fix rupee symbol
content = content.replace('—', '₹')

# Remove random "—" which were emojis or corrupted arrows
content = content.replace('—', '')

# Fix double arrows in Register Your Interest
content = content.replace('Register Your Interest →—', 'Register Your Interest →')
content = content.replace('Register Your Interest →', 'Register Your Interest \u2192')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
print("Fix applied")
