from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from ..models import City, State
from ..serializer import CitySerializer

@api_view(['GET'])
def get_cities(request):
    cities = City.objects.all()
    serialized_data = CitySerializer(cities, many=True).data
    return Response(serialized_data)

@api_view(['GET'])
def get_city(request, id):
    try: 
        city = City.objects.get(pk=id)
    except City.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    serialized_data = CitySerializer(city).data
    return Response(serialized_data)

@api_view(['POST'])
def create_city(request):
    data = request.data
    state_id = data.get('state')

    try:
        state = State.objects.get(pk=state_id)
    except State.DoesNotExist:
        return Response({'error': 'State not found.'}, status=status.HTTP_404_NOT_FOUND)
    
    serializer = CitySerializer(data=data)
    if serializer.is_valid():
        serializer.save(state = state)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def update_city(request, id):
    try:
        city = City.objects.get(pk=id)
    except City.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'DELETE':
        city.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    elif request.method == 'PUT':
        data = request.data
        serializer = CitySerializer(city, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
