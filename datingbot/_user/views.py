from django.shortcuts import render_to_response, render


def Main(request):
    return render(request, 'index.html', {
    })