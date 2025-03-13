'use client';


import { Container } from '../../components/landing/Container';

export default function PrivacyPolicy() {
    return (
        <section className="py-16 bg-white">
            <Container>
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-3xl font-semibold text-gray-900">Privacy Policy</h1>
                    <p className="mt-4 text-lg text-gray-700">
                        At Jozi Online Language School, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                    </p>

                    <h2 className="mt-8 text-2xl font-semibold text-gray-900">1. Information We Collect</h2>
                    <p className="mt-2 text-gray-700">
                        We collect information about you in a variety of ways. This includes:
                    </p>
                    <ul className="mt-2 text-gray-700 list-disc list-inside">
                        <li>Personal Data: Name, email address, phone number, and payment information when you book a lesson or register for an account.</li>
                        <li>Usage Data: Information about your interactions with our website, including IP address, browser type, and pages visited.</li>
                        <li>Cookies and Tracking Technologies: We use cookies and similar technologies to track user activity and enhance your experience on our website.</li>
                    </ul>

                    <h2 className="mt-8 text-2xl font-semibold text-gray-900">2. How We Use Your Information</h2>
                    <p className="mt-2 text-gray-700">
                        We use your personal information to:
                    </p>
                    <ul className="mt-2 text-gray-700 list-disc list-inside">
                        <li>Provide and manage our services, including scheduling and conducting classes.</li>
                        <li>Process payments and manage transactions.</li>
                        <li>Communicate with you regarding your account, bookings, and support requests.</li>
                        <li>Improve our website, services, and customer experience.</li>
                    </ul>

                    <h2 className="mt-8 text-2xl font-semibold text-gray-900">3. Sharing Your Information</h2>
                    <p className="mt-2 text-gray-700">
                        We may share your information with third-party service providers for purposes such as processing payments, sending emails, and improving our services. We do not sell or rent your personal information to third parties.
                    </p>

                    <h2 className="mt-8 text-2xl font-semibold text-gray-900">4. Data Security</h2>
                    <p className="mt-2 text-gray-700">
                        We use administrative, technical, and physical security measures to protect your personal information. While we strive to protect your data, no method of transmission over the internet or method of electronic storage is 100% secure.
                    </p>

                    <h2 className="mt-8 text-2xl font-semibold text-gray-900">5. Your Rights</h2>
                    <p className="mt-2 text-gray-700">
                        You have the right to access, update, or delete your personal information at any time. If you wish to exercise these rights, please contact our support team.
                    </p>

                    <h2 className="mt-8 text-2xl font-semibold text-gray-900">6. Changes to This Privacy Policy</h2>
                    <p className="mt-2 text-gray-700">
                        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                    </p>

                    <h2 className="mt-8 text-2xl font-semibold text-gray-900">7. Contact Us</h2>
                    <p className="mt-2 text-gray-700">
                        If you have any questions about this Privacy Policy, please contact us by clicking on the contact support button on the website, or by contacting us via email or phone call.
                    </p>
                </div>
            </Container>
        </section>
    );
}
