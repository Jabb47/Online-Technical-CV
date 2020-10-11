from django.contrib import admin
from .models import  PersonalDetail , Skill , WorkExperience , Education , Project, Testimonial
# Register your models here.
admin.site.register( PersonalDetail)
admin.site.register(Skill)
admin.site.register(WorkExperience)
admin.site.register(Education)
admin.site.register(Project)
admin.site.register(Testimonial)