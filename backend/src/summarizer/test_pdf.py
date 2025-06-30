import fitz  # PyMuPDF

def extract_text_from_pdf(pdf_path):
    try:
        doc = fitz.open(pdf_path)
        text = ""
        for page in doc:
            text += page.get_text("text") + "\n"
        return text
    except Exception as e:
        print(f"Error extracting text: {e}")

# Replace 'sample.pdf' with an actual PDF file path
pdf_text = extract_text_from_pdf("sample.pdf")
print(pdf_text)
