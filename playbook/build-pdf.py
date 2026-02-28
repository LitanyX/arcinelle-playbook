#!/usr/bin/env python3
"""Build The Arcinelle Playbook PDF from markdown."""

import markdown
from weasyprint import HTML

INPUT = "THE-ARCINELLE-PLAYBOOK.md"
OUTPUT = "The-Arcinelle-Playbook.pdf"

CSS = """
@page {
    size: letter;
    margin: 1in;
    @bottom-center {
        content: "arcinelle.com";
        font-size: 9px;
        color: #666;
        font-family: 'Helvetica Neue', Arial, sans-serif;
    }
}
body {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    font-size: 11pt;
    line-height: 1.7;
    color: #1a1a1a;
    max-width: 100%;
}
h1 {
    font-size: 28pt;
    font-weight: 300;
    color: #7c6bbf;
    margin-top: 2em;
    margin-bottom: 0.5em;
    page-break-before: always;
}
h1:first-of-type { page-break-before: avoid; }
h2 {
    font-size: 18pt;
    font-weight: 400;
    color: #7c6bbf;
    margin-top: 1.5em;
    border-bottom: 1px solid #e0d8f0;
    padding-bottom: 0.3em;
}
h3 {
    font-size: 13pt;
    font-weight: 600;
    color: #333;
    margin-top: 1.2em;
}
code {
    background: #f5f2ff;
    padding: 2px 6px;
    border-radius: 3px;
    font-size: 10pt;
    color: #5a4a8a;
}
pre {
    background: #0a0a0f;
    color: #c9b8ff;
    padding: 16px;
    border-radius: 8px;
    font-size: 9.5pt;
    line-height: 1.5;
    overflow-x: auto;
    page-break-inside: avoid;
}
pre code {
    background: none;
    padding: 0;
    color: #c9b8ff;
}
blockquote {
    border-left: 3px solid #c9b8ff;
    padding-left: 1em;
    color: #555;
    margin: 1em 0;
}
table {
    border-collapse: collapse;
    width: 100%;
    margin: 1em 0;
    font-size: 10pt;
}
th, td {
    border: 1px solid #ddd;
    padding: 8px 12px;
    text-align: left;
}
th {
    background: #f5f2ff;
    color: #5a4a8a;
}
hr {
    border: none;
    border-top: 1px solid #e0d8f0;
    margin: 2em 0;
}
a { color: #7c6bbf; }
strong { color: #333; }
"""

with open(INPUT, "r") as f:
    md_content = f.read()

html_content = markdown.markdown(
    md_content,
    extensions=["fenced_code", "tables", "smarty"]
)

full_html = f"""
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><style>{CSS}</style></head>
<body>{html_content}</body>
</html>
"""

HTML(string=full_html).write_pdf(OUTPUT)
print(f"✓ Built {OUTPUT}")
