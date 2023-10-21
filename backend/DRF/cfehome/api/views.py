from django.shortcuts import render
from django.http import JsonResponse
import json

# Create your views here.
def api_home(request,*args,**kwargs):
    data={}
    res=request.body
    try:
        data=json.loads(res)
        print(data)
    except:
        print("didn't get any data")
    print(request.headers)
    return JsonResponse({"message":"hello world!"})
