from django.shortcuts import render_to_response, render


def Main(request):
    prevent_cookie_policy_to_be_shown = request.COOKIES.get('__cp') or request.GET.get('cp') == "0"
    return render(request, 'index.html', {
        'query_string': request.META['QUERY_STRING'],
        'prevent_cookie_policy_to_be_shown': prevent_cookie_policy_to_be_shown
    })
