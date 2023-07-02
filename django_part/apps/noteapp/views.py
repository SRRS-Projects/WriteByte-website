import datetime

from django.shortcuts import render, redirect
from .models import Note


# Create your views here.
def index(request):
    if request.method == "POST":
        print(request.POST)
        return redirect(index)
    else:
        note_data = Note.objects.all()
        return render(request, "noteapp/index.html", {"note_data": note_data})


def new(request):
    if request.method == "POST":
        title = request.POST.get("title")
        content = request.POST.get("content")
        created_at = datetime.datetime.now()

        new_note = Note(title=title, content=content, created_at=created_at)
        new_note.save()
        print(new_note)
        return redirect(index)
    return render(request, "noteapp/new.html")
