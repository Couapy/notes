from django.contrib.auth.models import AnonymousUser, User
from django.test import RequestFactory, TestCase
from core.views import UserView

import json


class UserViewTest(TestCase):
    """Suite test for the user api view."""

    def setUp(self):
        """Prepare the tests with user data."""
        self.user = User.objects.create_user("userview")
        self.factory = RequestFactory()

    def test_get_user_disconnected(self):
        """Check if we get error message."""
        request = self.factory.get("/api/user/")
        request.user = AnonymousUser()
        response = UserView.as_view()(request)
        self.assertIn("detail", json.loads(response.content).keys())
        self.assertEqual(response.status_code, 200)

    def test_get_user_connected(self):
        """Check if we get error message."""
        request = self.factory.get("/api/user/")
        request.user = self.user
        response = UserView.as_view()(request)
        self.assertNotIn("detail", json.loads(response.content).keys())
        self.assertEqual(response.status_code, 200)
