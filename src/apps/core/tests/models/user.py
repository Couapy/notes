from django.contrib.auth.models import User
from django.test import TestCase


class UserModelTest(TestCase):
    """Suite test for User model."""

    def setUp(self):
        """Prepare a user for the suite test."""
        self.user = User.objects.create_user("username")

    def test_profile_auto_create(self):
        """Check if the profile is automatically created."""
        self.assertIsNotNone(self.user.profile)

    def test_notespace_auto_create(self):
        """Check if the note space is automatically created."""
        self.assertIsNotNone(self.user.notespace)
