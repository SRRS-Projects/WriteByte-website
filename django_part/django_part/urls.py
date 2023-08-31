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
from asgiref.sync import sync_to_async
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
async def createnote(request, data: NoteSchema):
    note = Note(title=data.title, content=data.content, created_at=datetime.datetime.now())
    await note.asave()
    return {"create_success": "true"}


@api.get("/note/{id}")
async def getnote(request, id: int):
    data = await sync_to_async(Note.objects.filter)(id=id) if id else await sync_to_async(Note.objects.filter)()
    return {"notes": [
        {
            "id": note.id,
            "title": note.title,
            "content": note.content,
            "created_at": note.created_at,
        }
        async for note in data]}


@api.put("/note/{id}")
async def editnote(request, id: int, data: NoteSchema):
    note = await Note.objects.aget(id=id)
    note.title = data.title
    note.content = data.content
    note.created_at = datetime.datetime.now()
    await note.asave()
    return {"edit_success": "true"}


@api.delete("/note/{id}")
async def delnote(request, id: int):
    note = await Note.objects.aget(id=id)
    await note.adelete()
    return {"delete_success": "true"}


urlpatterns = [
    path('', include("apps.noteapp.urls")),
    path('admin/', admin.site.urls),
    path('api/', api.urls),
]

