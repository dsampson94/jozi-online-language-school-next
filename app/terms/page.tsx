'use client';


import { Container } from '../../components/landing/Container';

export default function TermsAndConditions() {
    return (
        <section className="py-16 bg-white">
            <Container>
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-3xl font-semibold text-gray-900">Terms and Conditions</h1>
                    <p className="mt-4 text-lg text-gray-700">
                        At Jozi Online Language School, you don&apos;t sign a long-term contract. However, you must accept our rules for conducting classes. Please read through the terms carefully.
                    </p>

                    <h2 className="mt-8 text-2xl font-semibold text-gray-900">1. What are our services?</h2>
                    <p className="mt-2 text-gray-700">
                        Jozi Online Language School offers individual conversational and business English classes via the Internet (Google Meet). Classes are held throughout the calendar year and are conducted by qualified native TEFL certified teachers.
                    </p>

                    <h2 className="mt-8 text-2xl font-semibold text-gray-900">2. Teaching materials</h2>
                    <p className="mt-2 text-gray-700">
                        We provide all necessary teaching materials at no extra charge.
                    </p>

                    <h2 className="mt-8 text-2xl font-semibold text-gray-900">3. Deadlines and delays</h2>
                    <p className="mt-2 text-gray-700">
                        The dates of classes are set individually by the student using our Calendly booking system. If a student is late, this time will be deducted from the duration of the class. If the teacher is late, this time will be added to the class time. The maximum delay for a participant is 15 minutes. If the teacher is late, please inform us immediately by clicking on the customer support button on the Jozi Online Language School website.
                    </p>

                    <h2 className="mt-8 text-2xl font-semibold text-gray-900">4. Rescheduling classes</h2>
                    <p className="mt-2 text-gray-700">
                        You have the right to reschedule your classes. You must report your desire to reschedule your classes at least 24 hours before the original meeting. Simply, email the teacher with whom you have a class scheduled.
                    </p>

                    <h2 className="mt-8 text-2xl font-semibold text-gray-900">5. Payments</h2>
                    <p className="mt-2 text-gray-700">
                        Payments for classes are made via the Stripe payment gateway when you book a lesson.
                    </p>

                    <h2 className="mt-8 text-2xl font-semibold text-gray-900">6. System requirements</h2>
                    <p className="mt-2 text-gray-700">
                        To take part in the classes, you need a computer with a webcam or smartphone with internet access, and headphones with a microphone.
                    </p>

                    <h2 className="mt-8 text-2xl font-semibold text-gray-900">7. Complaints</h2>
                    <p className="mt-2 text-gray-700">
                        Contact support if you have any issues related to the school. We will do our best to resolve the problem.
                    </p>

                    <h2 className="mt-8 text-2xl font-semibold text-gray-900">8. Important Notice</h2>
                    <p className="mt-2 text-gray-700">
                        Remember that this is just a summary of our Terms and Conditions. If you have any questions, please contact our support team by clicking on the contact support button on the website, or by contacting us via email or phone call.
                    </p>
                </div>
            </Container>
        </section>
    );
}
