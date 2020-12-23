from django.contrib.auth.models import AnonymousUser, User
from django.test import RequestFactory, TestCase


class UserViewTest(TestCase):
    """Suite test for the user api view."""

    def setUp(self):
        """Prepare the tests with user data."""
        self.user = User.objects.create_user("username")
        self.factory = RequestFactory()

    def test_get_user_disconnected(self):
        """Check if we get the user data."""
        request = self.factory.get("/api/user/")
        request.user = AnonymousUser()
        response = UserView(request)
        self.assertContains("detail", response.json().keys())

    def test_get_user_connected(self):
        """Check if we get the user data."""
        request = self.factory.get("/api/user/")
