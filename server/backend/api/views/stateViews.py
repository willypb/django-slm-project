from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from ..models import Country, State
from ..serializer import StateSerializer

@api_view(['GET'])
def get_states(request):
    states = State.objects.all()
    serialized_data = StateSerializer(states, many=True).data
    return Response(serialized_data)

@api_view(['GET'])
def get_state(request, id):
    try: 
        state = State.objects.get(pk=id)
    except State.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    serialized_data = StateSerializer(state).data
    return Response(serialized_data)

@api_view(['POST'])
def create_state(request):
    print("Received request to create state")
    data = request.data
    country_id = data.get('country')

    try:
        country = Country.objects.get(pk=country_id)
    except Country.DoesNotExist:
        return Response({'error': 'Country not found.'}, status=status.HTTP_404_NOT_FOUND)

    serializer = StateSerializer(data=data)
    if serializer.is_valid():
        serializer.save(country=country)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def update_state(request, id):
    try:
        state = State.objects.get(pk=id)
    except State.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'DELETE':
        state.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    elif request.method == 'PUT':
        data = request.data
        serializer = StateSerializer(state, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
