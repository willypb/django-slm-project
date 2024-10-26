from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from ..models import Country
from ..serializer import CountrySerializer

@api_view(['GET'])
def get_countries(request):
    print("get_countries called")
    countries = Country.objects.all()
    serializedData = CountrySerializer(countries, many=True).data
    return Response(serializedData)

@api_view(['GET'])
def get_country(request, id):
    try: 
        country = Country.objects.get(pk=id)
    except Country.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    serializedData = CountrySerializer(country).data
    return Response(serializedData)

@api_view(['POST'])
def create_country(request):
    data = request.data
    serializer = CountrySerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def update_country(request, id):
    try:
        country = Country.objects.get(pk=id)
    except Country.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'DELETE':
        country.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    elif request.method == 'PUT':
        data = request.data
        serializer = CountrySerializer(country, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)