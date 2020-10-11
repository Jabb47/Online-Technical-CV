from .models import PersonalDetail , Skill , Education , WorkExperience , Project, Testimonial
from .Serializers import (PersonalDetailSerializer , 
SkillSerializer ,
 EducationSerializer ,
  WorkExperienceSerializer , TestimonialSerializer,
   ProjectSerializer)
from rest_framework import permissions , viewsets


class PersonalDetailViewSet(viewsets.ModelViewSet):
    queryset = PersonalDetail.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class =  PersonalDetailSerializer

class SkillViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    permission_classes =[
        permissions.AllowAny
    ]
    serializer_class = SkillSerializer

class EducationViewSet(viewsets.ModelViewSet):
    queryset = Education.objects.all()
    permission_classes =[
        permissions.AllowAny
    ]
    serializer_class = EducationSerializer


class WorkExperienceViewSet(viewsets.ModelViewSet):
    queryset = WorkExperience.objects.all()
    permission_classes =[
        permissions.AllowAny
    ]
    serializer_class = WorkExperienceSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    permission_classes =[
        permissions.AllowAny
    ]
    serializer_class = ProjectSerializer

class TestimonialViewSet(viewsets.ModelViewSet):
    queryset = Testimonial.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class =  TestimonialSerializer