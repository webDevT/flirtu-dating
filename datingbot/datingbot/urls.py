from django.conf.urls import url, include
from django.contrib import admin
from django.views.generic.base import TemplateView
from i18n_template_view import TemplateI18NView
from django.conf.urls.static import static
from django.conf import settings
from _user.views import Main
from django.conf.urls.i18n import i18n_patterns


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^i18n/',include('django.conf.urls.i18n')),
    url(r'^contact-us/$', TemplateView.as_view(template_name='contact-us.html'), name='contact_us'),
    url(r'^foo/$', TemplateView.as_view(template_name='foo.html'), name='foo'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT2)

urlpatterns += i18n_patterns(
    url(r'^$', Main, name='index'),
    url(r'^launch-bot/$', Main, name='launch_bot'),
    url(r'^agreement/$', TemplateI18NView.as_view(template_name='agreement.html'), name='agreement'),
    url(r'^about-us/$', TemplateI18NView.as_view(template_name='about-us.html'), name='about_us'),
    url(r'^faq/$', TemplateI18NView.as_view(template_name='faq.html'), name='faq'),
    url(r'^privacy/$', TemplateI18NView.as_view(template_name='privacy.html'), name='privacy'),
    # prefix_default_language=False
)
