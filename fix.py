import sys

content_path = r'D:\nuvaanah\app\products\[slug]\ProductPageClient.tsx'
with open(content_path, 'r', encoding='utf-8') as f:
    content = f.read()

old1 = """return (
                    <div key={i} className="flex items-start gap-3 py-2.5 border-b border-[rgba(28,28,24,0.06)] last:border-b-0">
                      <Check className="w-[14px] h-[14px] text-[#446651] flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <dt className="text-sm font-medium text-[#1c1c18]">{isObj ? item.item : item}</dt>
                        {isObj && item.detail && <dd className="text-xs text-[#7a6f6a] mt-0.5">{item.detail}</dd>}
                      </div>
                    </div>
                  )"""

new1 = old1.replace("{isObj ? item.item : item}", "{isObj ? String((item as any).item) : String(item)}")
new1 = new1.replace("{isObj && item.detail &&", "{isObj && (item as any).detail &&")
new1 = new1.replace("{item.detail}", "{String((item as any).detail)}")

content = content.replace(old1, new1)

old2 = """<div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[rgba(28,28,24,0.08)]">
                    <div className="w-7 h-7 rounded-lg bg-[#884d53] text-white flex items-center justify-center flex-shrink-0 font-bold text-xs">{i + 1}</div>
                    <span className="text-xs font-medium text-[#1c1c18]">{typeof item === 'object' ? item.item : item}</span>
                  </div>"""

new2 = old2.replace("{typeof item === 'object' ? item.item : item}", "{typeof item === 'object' ? String((item as any).item) : String(item)}")

content = content.replace(old2, new2)

with open(content_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Replaced!")
