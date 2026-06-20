import re
import json

with open('d:/nuvaanah/lib/products-data.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

products = []
current_product = None
in_product = False

for line in lines:
    if line.startswith('  {'):
        current_product = {}
        in_product = True
        continue
    
    if line.startswith('  }') or line.startswith('  },'):
        if in_product and current_product and 'name' in current_product:
            products.append(current_product)
        current_product = None
        in_product = False
        continue
    
    if in_product and current_product is not None:
        match = re.match(r'^    ([a-zA-Z0-9_]+)\s*:\s*(.*),?$', line)
        if match:
            key = match.group(1)
            val_str = match.group(2).strip()
            
            if val_str.endswith(','):
                val_str = val_str[:-1].strip()
                
            if val_str.startswith("'") and val_str.endswith("'"):
                val = val_str[1:-1]
            elif val_str.startswith('"') and val_str.endswith('"'):
                val = val_str[1:-1]
            elif val_str.isdigit():
                val = int(val_str)
            elif val_str == 'true':
                val = True
            elif val_str == 'false':
                val = False
            else:
                val = val_str
                
            current_product[key] = val

# Let's print name, description, price
for p in products:
    print(f"Name: {p.get('name')}")
    print(f"Price: {p.get('price')}")
    # Shorten description
    desc = p.get('description', '')
    if len(desc) > 80:
        desc = desc[:77] + "..."
    print(f"Desc: {desc}")
    print("-" * 40)
