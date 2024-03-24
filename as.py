
import requests

parameters = {'key': '19ac8gik5lfy8tqx040l04howwc7ncjewihhdt5x',
              'place_id': 'london'}

url = "https://www.meteosource.com/api/v1/free/point"

data = requests.get(url, params=parameters).json()

print('Current temperature in London is {} °C.'.format(data['current']['temperature']))

