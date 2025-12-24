import streamlit as st
from pathlib import Path

st.set_page_config(layout="wide")

html = Path("index.html").read_text(encoding="utf-8")
css = Path("style.css").read_text(encoding="utf-8")
js = Path("script.js").read_text(encoding="utf-8")

st.components.v1.html(
    f"""
    <html>
    <head>
        <style>{css}</style>
    </head>
    <body>
        {html}
        <script>{js}</script>
    </body>
    </html>
    """,
    height=1200,
)
