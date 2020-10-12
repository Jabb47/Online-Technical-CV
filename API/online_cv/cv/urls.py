from rest_framework import routers
from .views import PersonalDetailViewSet , SkillViewSet , EducationViewSet , WorkExperienceViewSet, ProjectViewSet , TestimonialViewSet

router = routers.DefaultRouter()
router.register('personal-details',PersonalDetailViewSet, 'persoanl-Details')
router.register('skills',SkillViewSet,'Skill-list')
router.register('education',EducationViewSet,'Education-list')
router.register('workexperience',WorkExperienceViewSet,'experinece-list')
router.register('projects',ProjectViewSet, 'project-list')
router.register('testimonials',TestimonialViewSet, 'testimonial-list')
urlpatterns = router.urls
