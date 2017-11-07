from django.shortcuts import render
from django.http import HttpResponse
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .models import Girl

# Create your views here.
def index(request):
    return HttpResponse('Hello bbfat.')

def girls_covers_list(request):
    girls_list = Girl.objects.filter(cover=1).order_by('-update_at')
    paginator = Paginator(girls_list, 10)

    page = request.GET.get('page')
    try:
        girls = paginator.page(page)
    except PageNotAnInteger:
        girls = paginator.page(1)
    except EmptyPage:
        girls = paginator.page(paginator.num_pages)

    source = girls[0].path.split('/')[0] if len(girls) else 'unknown'
    return render(request, 'girls/covers.html', {'images': girls, 'by': source})

def girls_detail_list(request):
    key = request.GET.get('key')
    girls_list = Girl.objects.filter(cover=0, parent=key)
    girls = list(girls_list)
    source = girls[0].path.split('/')[0] if len(girls) else 'unknown'
    return render(request, 'girls/detail.html', {'images': girls, 'by': source})

