import Hero from "@/components/Hero";
import React from "react";

export async function generateMetadata() {
  return {
    title: "Privacy Policies",
    description:
      "Welcome to GoEdu - The ultimate guide to the best schools in the United Arab Emirates! ",
  };
}

export default function page() {
  return (
    <>
      {/* <Hero /> */}
      <div className="mt-5 p-[35px] md:p-[100px] ">
        <div className=" bg-[#F8F8F8] p-[40px] space-y-5">
          <p className="text-[32px] font-semibold">Privacy Policy</p>
          <div className="flex  justify-center mt-4">
            <img
              className="w-[400px] h-[300px] lg:w-[500px] lg:h-[500px]"
              src="/privacy.svg"
              alt=""
            />
          </div>
          <p className="text-[24px] font-semibold">Introduction</p>
          <p>
            Welcome to Edu 123. Your privacy is paramount to us, and this policy
            outlines our commitment to safeguarding it. This document explains:
            The nature of the information we collect from you or that you might
            provide when you visit our website, Edu 123, a platform dedicated to
            listing boarding schools in India. How we handle, use, protect, and
            disclose the information collected. This policy is only applicable
            to information gathered through the Edu 123 website, and in emails,
            texts, and other electronic messages related to Edu 123.
          </p>
          <p>
            {" "}
            <p className="text-[24px] font-semibold">
              Information Collection and Usage
            </p>
            Our website gathers various types of information from its users,
            including: Identifiable personal details such as name, email
            address, postal address, and phone number. Information on your
            internet connection, the device you use to access our website, and
            usage specifics. User-provided content: feedback, comments, and
            other forms of communication. Transactional information: necessary
            details to process your inquiries and payment details.
          </p>
          <p>
            <p className="text-base font-semibold mb-1">
              Usage Details, IP Addresses, Cookies, and Other Technologies
            </p>
            As you interact with our website, we employ automated data
            collection technologies to gather specific information about your
            device, browsing activities, and patterns.
          </p>
          <p>
            <p className="text-base font-semibold mb-1">
              We utilize this information to:
            </p>
            Deliver Edu 123 services to you. Send notifications related to your
            account. Fulfill our contractual obligations and enforce our rights
            from any agreements made between you and us. Inform you about
            changes to our website or any products or services we offer or
            provide through it. Improve our service quality and personalize your
            experience.
          </p>
          <p>
            <p className="text-[24px] font-semibold">Data Security</p>
            We have put in place measures aimed at safeguarding your information
            from accidental loss and from unauthorized access, use, alteration,
            and disclosure. However, the transmission of information over the
            internet is not completely secure. While we strive to protect your
            data, we cannot ensure its absolute security.
          </p>
          <p>
            <p className="text-[24px] font-semibold">
              Disclosure of Your Information{" "}
            </p>
            We may disclose aggregated user information and information that
            does not identify individuals. We may share personal information
            that we collect or that you provide, as outlined in this privacy
            policy: With our subsidiaries and affiliates. To contractors,
            service providers, and other third parties that support our
            business. For the purpose for which you provided it. For any other
            purpose disclosed by us when you provide the information. With your
            consent.
          </p>
          <p>
            <p className="text-[24px] font-semibold">
              Changes to Our Privacy Policy
            </p>
            We regularly update our privacy policy on this page. Significant
            changes in how we handle user information will be communicated
            through a notice on the website's homepage.
          </p>
          <p>
            <p className="text-[24px] font-semibold">Contact Information</p>
            For inquiries or feedback regarding this privacy policy and our
            privacy practices, please contact us at:
            <p>Email: info@edu123.in</p>
            <p>Contact Number: 9557695360</p>
          </p>
        </div>
      </div>
    </>
  );
}
