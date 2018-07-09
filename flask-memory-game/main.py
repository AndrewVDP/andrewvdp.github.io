from flask import Flask, render_template, json, request
import time

from Game import Game

app = Flask(__name__)

@app.route('/showMemoryGame')
def showMemoryGame():
    return render_template('memoryGame.html')

@app.route('/reset-game')
def resetGame():
    # del game
    global game
    game = Game()
    new_char = game.add_move()    
    return json.dumps({'data': new_char})


@app.route('/memorygame', methods=['POST', 'GET'])
def memorygame():
    try:
        _letters = request.form['inputLetters']
        _char_list = request.form['charList']

        print('_letters: {0}'.format(_letters))
        print('_char_list: {0}'.format(_char_list))

        if len(_char_list) == 0:
            new_char = game.add_move()
            return json.dumps(
            {
                'data': new_char
            })

        if _letters and game.is_matching_list(_letters, _char_list):
            new_char = game.add_move()
            return json.dumps(
            {
                'data': new_char,
                'result': 'pass'
            })
        else:
            return json.dumps(
            {
                'data': 'your score: {0}'.format(game.score),
                'result': 'fail'
            })
    except Exception as e:
        return json.dumps({'error':str(e)})

@app.route('/')
def main():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(host='0.0.0.0')
