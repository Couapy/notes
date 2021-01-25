from django.http import JsonResponse


def login_required(function=None):
    """
    Decorator for views that checks that the user is logged in, sending error
    message if necessary.
    """
    def decorator(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            return function(self, request, *args, **kwargs)
        return JsonResponse({
            'detail': 'You must be login.'
        })
    return decorator
