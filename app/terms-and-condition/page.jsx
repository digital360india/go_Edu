import Hero from "@/components/Hero";

export async function generateMetadata() {
  return {
    title: "Terms and Condition",
    description:
      "Welcome to GoEdu - The ultimate guide to the best schools in the United Arab Emirates! ",
  };
}

const TermsAndCondition = () => {
  return (
    <>
      {/* <Hero /> */}
      <div className="mt-5 p-[35px] md:p-[100px] ">
        <div className=" bg-[#F8F8F8] p-[40px] space-y-5">
          <p className="text-[32px] font-semibold">Terms And Condition</p>
          <div className="flex  justify-center mt-4">
            <img
              className="w-[400px] h-[300px] lg:w-[500px] lg:h-[500px]"
              src="/term.svg"
              alt=""
            />
          </div>
          <p className="text-[24px] font-semibold">Introduction</p>
          <p>
            Terms and Conditions of Edu 123 Introduction Welcome to Edu 123.
            Your access and use of our website and services indicate your
            agreement to comply with and be bound by these terms and conditions.
          </p>
          Please read these terms carefully.
          <p>
            {" "}
            <p className="text-base font-semibold mb-1">Terms Acceptance</p>
            By using our services, you agree to adhere to the terms outlined
            here. If you disagree with these terms, please refrain from using
            our website and services.
            <p>
              <p className="text-base font-semibold mb-1">Usage of Website</p>
              <p>
                {" "}
                Lawful Usage: You agree to use our website and services solely
                for lawful purposes.
              </p>
              Prohibited Activities: You must not transmit any malicious code or
              engage in activities that disrupt the operation of our website.
            </p>
            <p>
              <p className="text-base font-semibold mb-1">
                Service Changes and Pricing
              </p>{" "}
              Edu 123 reserves the right to modify or discontinue any service or
              feature without prior notice. Prices for our services are subject
              to change without warning.
            </p>
            <p>
              <p className="text-base font-semibold mb-1">User Accounts </p>
              When creating an account on Edu 123, you must provide accurate and
              complete information. You are responsible for keeping your account
              information and password confidential.
            </p>{" "}
            <p className="text-base font-semibold mb-1">Information Accuracy</p>
            While we aim to ensure that information on our website is accurate,
            we do not guarantee its completeness or precision.
            <p>
              <p className="text-base font-semibold mb-1">
                Links to Third-Party Websites
              </p>
              Our website may include links to websites not associated with Edu
              123. We are not responsible for the content or practices of these
              third-party websites.
            </p>
            <p>
              <p className="text-base font-semibold mb-1">
                User Feedback and Comments
              </p>
              Feedback or comments submitted to Edu 123 may be used at our
              discretion. We are not obligated to maintain the confidentiality
              of any comments or to compensate for them.
            </p>
            <p>
              <p className="text-base font-semibold mb-1">
                Personal Information
              </p>
              The submission of personal information through our website is
              governed by our Privacy Policy.
            </p>
            <p>
              <p className="text-base font-semibold mb-1">
                Corrections and Updates
              </p>
              We reserve the right to correct any errors, inaccuracies, or
              omissions and to change or update information at any time without
              prior notice.
            </p>
            <p>
              <p className="text-base font-semibold mb-1">Restricted Uses</p>
              You are prohibited from using the site or its content for any
              illegal purpose, soliciting others to perform or participate in
              unlawful acts, or violating any international, federal, or state
              laws.
            </p>
            <p>
              <p className="text-base font-semibold mb-1">
                Warranty Disclaimer;
              </p>
              Limitation of Liability Edu 123 does not guarantee uninterrupted
              or error-free use of our service, and we are not liable for any
              interruptions or errors.
            </p>{" "}
            <p>
              <p className="text-base font-semibold mb-1">Indemnity</p>
              You agree to indemnify and hold harmless Edu 123 and our
              affiliates from any claims, demands, and reasonable attorney's
              fees.
            </p>
            <p>
              <p className="text-base font-semibold mb-1">Severability</p>
              If any provision of these Terms is found to be unlawful, void, or
              unenforceable, that provision is severable and does not affect the
              validity of the remaining provisions.
            </p>
            <p>
              <p className="text-base font-semibold mb-1">Termination</p>
              These Terms remain effective until terminated by either you or Edu
              123.
            </p>
            <p>
              <p className="text-base font-semibold mb-1">Applicable Law</p>
              These Terms and any separate agreements through which we provide
              services to you shall be governed and interpreted in accordance
              with the laws of the country.
            </p>
            <p>
              <p className="text-base font-semibold mb-1">
                Terms of Service Amendments
              </p>
              We reserve the right to update, change, or replace any part of
              these Terms of Service by posting updates on our website.
            </p>
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
};

export default TermsAndCondition;
