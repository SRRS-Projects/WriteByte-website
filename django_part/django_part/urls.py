"""
URL configuration for django_part project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from ninja import NinjaAPI, Schema
from apps.noteapp.models import Note
import datetime

api = NinjaAPI()


class NoteSchema(Schema):
    title: str
    content: str


@api.post("/note/new")
def createnote(request, data: NoteSchema):
    note = Note(title=data.title, content=data.content, created_at=datetime.datetime.now())
    note.save()
    return {"create_success": "true"}


@api.get("/note/{id}")
def getnote(request, id: int):
    data = Note.objects.filter(id=id) if id else Note.objects.filter()
    return {"notes": [
        {
            "id": note.id,
            "title": note.title,
            "content": note.content,
            "created_at": note.created_at,
        }
        for note in data]}


@api.put("/note/{id}")
def editnote(request, id: int, data: NoteSchema):
    note = Note.objects.get(id=id)
    note.title = data.title
    note.content = data.content
    note.created_at = datetime.datetime.now()
    note.save()
    return {"edit_success": "true"}


@api.delete("/note/{id}")
def delnote(request, id: int):
    note = Note.objects.get(id=id)
    note.delete()
    return {"delete_success": "true"}


urlpatterns = [
    path('', include("apps.noteapp.urls")),
    path('admin/', admin.site.urls),
    path('api/', api.urls),
]
