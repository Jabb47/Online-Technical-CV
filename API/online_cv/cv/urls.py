from rest_framework import routers
from .views import PersonalDetailViewSet , SkillViewSet , EducationViewSet , WorkExperienceViewSet, ProjectViewSet , TestimonialViewSet

router = routers.DefaultRouter()
router.register('api/personal-details',PersonalDetailViewSet, 'persoanl-Details')
router.register('api/skills',SkillViewSet,'Skill-list')
router.register('api/education',EducationViewSet,'Education-list')
router.register('api/workexperience',WorkExperienceViewSet,'experinece-list')
router.register('api/projects',ProjectViewSet, 'project-list')
router.register('api/testimonials',TestimonialViewSet, 'testimonial-list')
urlpatterns = router.urls
