from flask import Flask, render_template      

app = Flask(__name__)

@app.route("/")
def home():
	print("Se ha conectado una persona")
	return render_template("index.html")
    
    
if __name__ == "__main__":
	app.run(debug=True)
