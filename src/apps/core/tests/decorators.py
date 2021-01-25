import json

from core.decorators import login_required
from django.contrib.auth.models import AnonymousUser, User
from django.http import JsonResponse
from django.test import RequestFactory, TestCase
from django.views.generic import TemplateView


class FakeView(TemplateView):
    """Fake view for tests."""

    @login_required
    def get(self, request, *args, **kwargs):
        return JsonResponse({"success": True})


class LoginRequiredTest(TestCase):
    """Suite test for the login_required decorator."""

    def setUp(self):
        """Prepare the tests with user data."""
        self.user = User.objects.create_user("userview")
        self.factory = RequestFactory()

    def test_authorized(self):
        """Check if the view is allowed when the user is authenticated."""
        request = self.factory.get("test/path/")
        request.user = self.user
        response = FakeView.as_view()(request)
        self.assertIn("success", json.loads(response.content).keys())

    def test_unautorized(self):
        """
        Check if the view is forbidden when the user is not
        authenticated.
        """
        request = self.factory.get("test/path/")
        request.user = AnonymousUser()
        response = FakeView.as_view()(request)
        self.assertIn("detail", json.loads(response.content).keys())
