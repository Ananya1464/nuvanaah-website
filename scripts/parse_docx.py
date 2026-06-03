import json, re

# Parse the already-extracted raw DOCX content
with open('d:/nuvaanah/docx_content.json', encoding='utf-8') as f:
    raw = json.load(f)

def parse_product(paras):
    sections = {}
    current_section = 'header'
    sections[current_section] = []
    
    for p in paras:
        text = p['text'].strip()
        style = p.get('style', '')
        if not text:
            continue
        
        # Detect section headings like "Section 01  —  SEO Package"
        sec_match = re.match(r'Section\s+(\d+)\s+[-\u2014]+\s+(.+)', text)
        if sec_match or ('Heading' in style and re.search(r'Section\s+\d+', text)):
            if sec_match:
                sec_num = int(sec_match.group(1))
            else:
                m2 = re.search(r'Section\s+(\d+)', text)
                sec_num = int(m2.group(1)) if m2 else 99
            key = f'section_{sec_num:02d}'
            current_section = key
            sections[current_section] = []
        else:
            sections.setdefault(current_section, []).append({'style': style, 'text': text})
    
    def get_texts(key):
        return [p['text'] for p in sections.get(key, [])]
    
    def parse_pairs(texts):
        items = []
        i = 0
        while i < len(texts) - 1:
            title = texts[i]
            desc  = texts[i+1]
            if len(title) < 100 and len(desc) > 20:
                items.append({'title': title, 'desc': desc})
                i += 2
            else:
                i += 1
        return items
    
    def parse_faq(texts):
        faqs = []
        i = 0
        while i < len(texts):
            q = texts[i]
            a = texts[i+1] if i + 1 < len(texts) else ''
            if q and a:
                faqs.append({'q': q, 'a': a})
            i += 2
        return faqs
    
    # Header
    header_texts = get_texts('header')
    price_line = next((t for t in header_texts if 'MRP' in t or '\u20b9' in t), '')
    price_match = re.search(r'\u20b9([\d,]+)', price_line)
    price = int(price_match.group(1).replace(',', '')) if price_match else 0
    
    # Tagline = first short sentence that isn't boilerplate
    tagline = ''
    skip = {'NUVANAAH', 'Complete Product Page Content'}
    for t in header_texts:
        if t in skip or t.startswith('MRP') or t.startswith('Product ') or t.startswith('Available in'):
            continue
        if len(t) < 120:
            tagline = t
            break
    
    # SEO
    seo_texts = get_texts('section_01')
    def extract_after_colon(texts, prefix):
        for t in texts:
            if t.startswith(prefix):
                idx = t.find(':')
                if idx != -1:
                    return t[idx+1:].strip()
        return ''
    
    seo_title   = extract_after_colon(seo_texts, 'SEO Title')
    meta_desc   = extract_after_colon(seo_texts, 'Meta Description')
    og_title    = extract_after_colon(seo_texts, 'OpenGraph Title')
    og_desc     = extract_after_colon(seo_texts, 'OpenGraph Description')
    
    # Sections
    overview   = '\n\n'.join(get_texts('section_02'))
    story      = '\n\n'.join(get_texts('section_03'))
    features   = parse_pairs(get_texts('section_04'))
    benefits   = parse_pairs(get_texts('section_05'))
    materials  = '\n\n'.join(get_texts('section_06'))
    variants   = get_texts('section_07')
    included   = get_texts('section_08')
    how_to_use = get_texts('section_09')
    care       = get_texts('section_10')
    care_donts = [t for t in care if t.lower().startswith('do not')]
    perfect_for = parse_pairs(get_texts('section_11'))
    gentle_note = '\n\n'.join(get_texts('section_12'))
    faqs       = parse_faq(get_texts('section_13'))
    
    return {
        'price': price,
        'tagline': tagline,
        'seo': {
            'title': seo_title,
            'metaDescription': meta_desc,
            'ogTitle': og_title,
            'ogDescription': og_desc,
        },
        'overview': overview,
        'story': story,
        'features': features,
        'benefits': benefits,
        'materials': materials,
        'variants': variants,
        'whatsIncluded': included,
        'howToUse': how_to_use,
        'care': care,
        'careDonts': care_donts,
        'perfectFor': perfect_for,
        'gentleNote': gentle_note,
        'faqs': faqs,
    }

structured = {}
for slug, paras in raw.items():
    structured[slug] = parse_product(paras)
    d = structured[slug]
    print(f'{slug}: Rs{d["price"]} | features={len(d["features"])} | benefits={len(d["benefits"])} | faqs={len(d["faqs"])}')

with open('d:/nuvaanah/lib/product-content.json', 'w', encoding='utf-8') as f:
    json.dump(structured, f, ensure_ascii=False, indent=2)

print('\nWritten: d:/nuvaanah/lib/product-content.json')
