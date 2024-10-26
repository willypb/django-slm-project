from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from ..models import County, State
from ..serializer import CountySerializer

@api_view(['GET'])
def get_counties(request):
    counties = County.objects.all()
    serialized_data = CountySerializer(counties, many=True).data
    return Response(serialized_data)

@api_view(['GET'])
def get_county(request, id):
    try: 
        county = County.objects.get(pk=id)
    except County.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    serialized_data = CountySerializer(county).data
    return Response(serialized_data)

@api_view(['POST'])
def create_county(request):
    data = request.data
    state_id = data.get('state')

    try:
        state = State.objects.get(pk=state_id)
    except State.DoesNotExist:
        return Response({'error': 'State not found.'}, status=status.HTTP_404_NOT_FOUND)
    
    serializer = CountySerializer(data=data)
    if serializer.is_valid():
        serializer.save(state = state)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def update_county(request, id):
    try:
        county = County.objects.get(pk=id)
    except County.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'DELETE':
        county.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    elif request.method == 'PUT':
        data = request.data
        serializer = CountySerializer(county, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
