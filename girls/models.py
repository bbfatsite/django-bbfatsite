from django.db import models

# Create your models here.
class Girl(models.Model):
    title = models.CharField(max_length=128)
    path = models.CharField(max_length=128)
    cover = models.IntegerField(default=0)
    parent = models.IntegerField(default=0)
    update_at = models.DateTimeField('date published')

    def __str__(self):
        return self.path

