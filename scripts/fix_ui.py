import re
import sys

filepath = r'D:\nuvaanah\app\products\[slug]\ProductPageClient.tsx'

with open(filepath, 'r', encoding='utf-8', errors='replace') as f:
    content = f.read()

# Replace CheckCircle2 import with Check
content = content.replace('CheckCircle2,', 'Check,')

# Chunk 1: Image caption & TODO
old_image = '''              {productImages.length > 0 ? (
                <Image
                  src={productImages[selectedImage]}
                  alt={`${product.name} G view ${selectedImage + 1}`}
                  fill
                  className="object-contain p-6 transition-transform duration-700 group-hover:scale-[1.02]"
                  priority
                />
              ) : ('''
new_image = '''              {productImages.length > 0 ? (
                <>
                  {/* TODO: Replace with updated Comfort Shape image — current asset shows old product name BloomForm */}
                  <Image
                    src={productImages[selectedImage]}
                    alt={`${product.name} — view ${selectedImage + 1}`}
                    fill
                    className="object-contain p-6 transition-transform duration-700 group-hover:scale-[1.02]"
                    priority
                  />
                </>
              ) : ('''
content = content.replace(old_image, new_image)
if old_image not in content and new_image not in content:
    # Try regex if exact match failed
    content = re.sub(
        r"\{\s*productImages\.length > 0 \? \(\s*<Image\s*src=\{productImages\[selectedImage\]\}\s*alt=\{`\$\{product\.name\} [^`]+`\}\s*fill\s*className=\"object-contain [^\"]+\"\s*priority\s*/>\s*\) : \(",
        new_image.strip() + " (",
        content
    )

# Chunk 2: Caption text
old_caption_loc = '''                ))}
              </div>
            )}
          </div>'''
new_caption_loc = '''                ))}
              </div>
            )}
            {product.id === 'comfort-shape' && (
              <p className="text-[12px] text-[#7a6f6a] text-center mt-2 italic">
                Left and Right forms shown. Both are included in every order.
              </p>
            )}
          </div>'''
content = content.replace(old_caption_loc, new_caption_loc)

# Chunk 3: Popular Gift Emoji removal
content = re.sub(r"\{\s*isComplimentaryGift \? 'Complimentary Gift' : '[^']*Popular Gift'\s*\}", "{isComplimentaryGift ? 'Complimentary Gift' : 'Popular Gift'}", content)

# Chunk 4: Arrow correction
content = re.sub(r"Register Your Interest [^\x00-\x7F]*", "Register Your Interest \u2192", content)

# Chunk 5: Add When to Use
old_zone4 = '''            </div>
          </AccordionSection>

          {/* Zone 4'''
new_zone4 = '''            </div>
          </AccordionSection>

          {/* New Zone: When to Use Comfort Shape */}
          {product.whenToUse && product.whenToUse.length > 0 && (
            <div className="py-8 border-b border-[rgba(28,28,24,0.1)]">
              <h2 className="text-lg sm:text-xl font-semibold text-[#1c1c18] mb-6 tracking-tight">When to Use Comfort Shape</h2>
              <div className="flex flex-col sm:flex-row gap-4">
                {product.whenToUse.map((card, i) => (
                  <div key={i} className="bg-[#f5f0e8] rounded-xl p-5 flex-1">
                    <h3 className="text-[14px] font-medium text-[#1c1c18] mb-2">{card.heading}</h3>
                    <p className="text-[13px] text-[#7a6f6a] leading-[1.7]">{card.body}</p>
                  </div>
                ))}
              </div>
              {product.whenToUseNote && (
                <div className="mt-3 border border-[rgba(28,28,24,0.15)] rounded-lg px-4 py-3 text-[12px] text-[#7a6f6a]">
                  {product.whenToUseNote}
                </div>
              )}
            </div>
          )}

          {/* Zone 4'''
content = content.replace(old_zone4, new_zone4)

# Chunk 6: Update What's Included format
old_included = '''              ) : (
                <dl className="space-y-0">
                  {product.whatsIncluded.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 py-2.5 border-b border-[rgba(28,28,24,0.06)] last:border-b-0">
                      <CheckCircle2 className="w-4 h-4 text-[#884d53] flex-shrink-0 mt-0.5" />
                      <dt className="text-sm font-medium text-[#1c1c18]">{item}</dt>
                    </div>
                  ))}
                </dl>
              )}'''
new_included = '''              ) : (
                <dl className="space-y-0">
                  {product.whatsIncluded.map((item, i) => {
                    const isObj = typeof item === 'object' && item !== null;
                    return (
                      <div key={i} className="flex items-start gap-3 py-2.5 border-b border-[rgba(28,28,24,0.06)] last:border-b-0">
                        <Check className="w-[14px] h-[14px] text-[#446651] flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <dt className="text-sm font-medium text-[#1c1c18]">{isObj ? item.item : item}</dt>
                          {isObj && item.detail && <dd className="text-xs text-[#7a6f6a] mt-0.5">{item.detail}</dd>}
                        </div>
                      </div>
                    )
                  })}
                </dl>
              )}'''
content = content.replace(old_included, new_included)

# Chunk 7: Update CheckCircle2 in features to Check icon
old_features = '''<CheckCircle2 className="w-3.5 h-3.5 text-[#884d53] flex-shrink-0 mt-0.5" />'''
new_features = '''<Check className="w-[14px] h-[14px] text-[#446651] flex-shrink-0 mt-0.5" />'''
content = content.replace(old_features, new_features)

# And fix any weird unicode in the file
content = content.replace('G', '—')
content = content.replace('G', '₹')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
print("Done writing fixes")
