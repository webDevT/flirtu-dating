from django.views.generic.base import TemplateView

class TemplateI18NView(TemplateView):

    def get(self, request, *args, **kwargs):
        context = self.get_context_data(**kwargs)
        self.template_name = request.LANGUAGE_CODE + '/' + self.template_name
        return self.render_to_response(context)