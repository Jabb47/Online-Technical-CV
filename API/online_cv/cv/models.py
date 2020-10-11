from django.db import models

# Create your models here
class PersonalDetail(models.Model):
    photo           = models.ImageField(upload_to='photos' , blank=True)
    professions     = models.CharField(blank=True , max_length=255)
    description     = models.TextField(max_length=255 , blank=True)
    address          = models.TextField(max_length=255 , blank=True)
    date_of_birth   = models.DateField()
    first_names     = models.CharField(max_length=100 , blank=True)
    last_name       = models.CharField(max_length=100,  blank=True)
    email           = models.EmailField(blank=True)
    twitter         = models.URLField(blank=True)
    linkedIn        = models.URLField(blank=True)
    phone_number    = models.CharField(max_length=10)
    facebook        = models.URLField(blank=True)
    instagram       = models.URLField(blank=True)
    gitHub          = models.URLField(blank=True)
    cv_file         = models.FileField(blank=True)


    def __str__(self):
        return self.first_names


class Skill(models.Model):
    name = models.CharField(max_length=100,  blank=True)
    percentage = models.PositiveIntegerField()
    description = models.TextField(max_length=255 , blank=True)
    def __str__(self):
        return self.name
    

class Project(models.Model):
    DEVELOPMENT = 'D'
    PRODUCTION = 'P'
    MODE_CHOICES = [
        (DEVELOPMENT, 'Development'),
        (PRODUCTION, 'Production')
    ]
    name = models.CharField(max_length=100,  blank=True)
    picture = models.ImageField(upload_to='photos' , blank=True)
    description = models.TextField(max_length=255 , blank=True)
    link = models.URLField(blank=True)
    mode = models.CharField(
							max_length=1,
							choices=MODE_CHOICES,
							default=DEVELOPMENT,
						)
    def __str__(self):
        return self.name

class WorkExperience(models.Model):
    VOLUNTEER = 'V'
    PERMANENT = 'P'
    CONTRACT = 'C'
    JOB_TYPE_CHOICES = [
        (VOLUNTEER, 'Volunteer'),
        (PERMANENT, 'PERMENENT'),
        (CONTRACT, 'Contract')
    ]
    companyName = models.CharField(max_length=100,  blank=True)
    start_date = models.DateField()
    end_date = models.DateField()
    position = models.CharField(max_length=100,  blank=True)
    job_type = models.CharField(
							max_length=1,
							choices=JOB_TYPE_CHOICES,
							default=VOLUNTEER,
						)
    description =  models.TextField()
    def __str__(self):
        return self.companyName

class Education(models.Model):
    institutionName = models.CharField(max_length=100,  blank=True)
    qualification = models.CharField(max_length=100,  blank=True)
    start_date = models.DateField()
    end_date = models.DateField()
    academic_record =  models.ImageField(blank = True , upload_to='photos')

    def __str__(self):
        return self.qualification


class Testimonial(models.Model):
    MISTER = 'MR'
    MISSES = 'MRS'
    MISS = 'MSS'
    DOCTOR = 'DR'
    HONARABLE = 'HON'
    TITLE_CHOICES = [
        (MISTER, 'Mr'),
        (MISSES, 'Mrs'),
        (DOCTOR, 'Dr'),
        (MISS, 'Ms'),
        (HONARABLE, 'Hon')
    ]
    title = models.CharField(
							max_length=3,
							choices=TITLE_CHOICES,
							default=MISTER,
						)
    first_names = models.CharField(max_length=100 , blank=True)
    last_name = models.CharField(max_length=100,  blank=True)
    email = models.EmailField(blank=True)
    phone_number = models.CharField(max_length=10)
    testimony =  models.TextField()

    
    

