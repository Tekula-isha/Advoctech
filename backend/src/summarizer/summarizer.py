from flask import Flask, request, jsonify
from transformers import pipeline
from flask_cors import CORS
import fitz  # PyMuPDF for extracting text from PDFs

app = Flask(__name__)
CORS(app)  # Enable CORS

# ✅ Explicitly load the Hugging Face summarization model
summarizer = pipeline(
    "summarization",
    model="sshleifer/distilbart-cnn-12-6",
    revision="a4f8f3e",
    device=-1  # Use CPU
)

@app.route("/summarize", methods=["POST"])
def summarize():
    if "document" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files["document"]
    file_ext = file.filename.split(".")[-1].lower()

    text = ""

    try:
        if file_ext == "txt":
            text = file.read().decode("utf-8")

        elif file_ext == "pdf":
            with fitz.open("pdf", file.stream) as doc:
                for page in doc:
                    text += page.get_text("text") + "\n"

            if not text.strip():
                return jsonify({"error": "Could not extract text from PDF"}), 400

        else:
            return jsonify({"error": "Unsupported file type. Upload a TXT or PDF."}), 400

        # ✅ Ensure text is extracted before summarizing
        if not text.strip():
            return jsonify({"error": "No readable text found in document"}), 400

        # ✅ Summarize the extracted text
        summary = summarizer(text, max_length=150, min_length=50, do_sample=False)

        return jsonify({"summary": summary[0]["summary_text"]})

    except Exception as e:
        print(f"❌ Error: {str(e)}")  # ✅ Log error in the terminal
        return jsonify({"error": f"Internal Server Error: {str(e)}"}), 500

if __name__ == "__main__":
    app.run(port=5001, debug=True)
