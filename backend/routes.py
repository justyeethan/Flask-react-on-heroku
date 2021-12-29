from flask import Blueprint, jsonify


main = Blueprint('main', __name__)


@main.route('/api')
def api():
    return jsonify({'data': "Data from the API"})
