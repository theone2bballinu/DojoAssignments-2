from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template('index.html')

@app.route('/success')
def success():
    return render_template('success.html', var1="testing", var2="testing2")

app.run(debug=True)
