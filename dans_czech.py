from flask import Flask, render_template, url_for, redirect, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('dashboard.html')



@app.route('/grammar<lesson>', methods=['GET'])
def grammar_uni(lesson):

    if lesson == "1":
        html_address = 'grammar_overview_universal.html'
    if lesson == "2":
        html_address = 'grammar_overview_universal2.html'
    if lesson == "3":
        html_address = 'grammar_overview_universal3.html'
    if lesson == "4":
        html_address = 'grammar_overview_universal4.html'
    if lesson == "5":
        html_address = 'grammar_overview_universal5.html'
    return render_template(html_address)


@app.route('/translate-test-l<lesson>', methods=['GET', 'POST'])
def translate_test(lesson):
    try_again_url = "/translate-test-l" + lesson

    lesson_number = lesson

    return render_template('translate.html', try_again_url=try_again_url, lesson_number=lesson_number)


@app.route('/mix-test-l<lesson>',  methods=['GET', 'POST'])
def mixtest(lesson):
    try_again_url = "/mix-test-l" + lesson
    lesson_number = lesson

    return render_template('mixed-sentences.html', try_again_url=try_again_url, lesson_number=lesson_number)




@app.route('/memory-game-l<lesson>', methods=['GET', 'POST'])
def memoryGame(lesson):
    try_again_url = "/memory-game-l" + lesson
    lesson_number = lesson

    return render_template("memory-game.html", try_again_url=try_again_url, lesson_number=lesson_number)


