from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^list$', views.girls_covers_list, name='covers'),
    url(r'^detail$', views.girls_detail_list, name='detail'),
]

