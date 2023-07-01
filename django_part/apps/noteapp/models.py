from django.db import models


# Create your models here.
class Note(models.Model):
    title = models.CharField("Заголовок нотатки", max_length=100)
    content = models.TextField("Текст нотатки")
    created_at = models.DateTimeField("Час створення")

    def __str__(self):
        return self.title
