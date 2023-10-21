import requests
endpoint='http://localhost:8000/api/'
get_response=requests.get(endpoint,params={'abc':2},json={'quer':'hi kids'}) #Api->function
print(get_response.json())
print(get_response.status_code)