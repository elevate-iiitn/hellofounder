"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function FAQs() {
  const faqItems = [
    {
      id: "item-1",
      question: "What happens after I apply?",
      answer:
        "After submitting the application form, our team reviews your responses to understand your interest, clarity, and drive. You will receive an email + WhatsApp confirmation with next steps, community access, and onboarding details.",
    },
    {
      id: "item-2",
      question: "What is the duration of the program?",
      answer:
        "ISF is a 6-week (45-day) intensive program. You’ll attend 18+ live sessions, complete weekly assignments, and learn to build with the support of mentors and the community.",
    },
    {
      id: "item-3",
      question: "What is the cost and refund policy?",
      answer:
        "The Founding Cohort is priced at ₹7,499. This includes all sessions, mentorship, community access, and lifetime consulting. Refunds are available only before the cohort officially begins.",
    },
    {
      id: "item-4",
      question: "Who should apply?",
      answer:
        "This program is perfect for students who want to start building early, aspiring founders with or without an idea, working professionals planning to build their own projects, and creators or innovators seeking clarity, execution skills, and a supportive community. If you want to build, you belong here.",
    },
    {
      id: "item-5",
      question: "Do I need a startup idea to join?",
      answer:
        "No — not at all. Many of our best founders started with zero clarity. Week 1 and Week 2 are designed to help you find, validate, and refine your idea.",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-8 md:grid-cols-5 md:gap-12">
          {/* LEFT */}
          <div className="md:col-span-2">
            <p className="text-muted-foreground mt-4 text-balance text-lg">
              Everything you need to know about ISF
            </p>
            <p className="text-muted-foreground mt-6 hidden md:block">
              Can’t find what you’re looking for? Reach out to our{" "}
              <a
                href="mailto:krishna@indianschooloffounders.com"
                className="text-teal-400 font-medium hover:underline"
              >
                ISF support team
              </a>{" "}
              for assistance.
            </p>
          </div>

          {/* RIGHT */}
          <div className="md:col-span-3">
            <Accordion type="single" collapsible>
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-b border-gray-200 dark:border-gray-600"
                >
                  <AccordionTrigger
                    className="
                      text-base font-medium transition-colors
                      hover:no-underline
                      data-[state=open]:text-teal-400
                    "
                  >
                    {item.question}
                  </AccordionTrigger>

                  <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* MOBILE FOOTNOTE */}
          <p className="text-muted-foreground mt-6 md:hidden">
            Can't find what you're looking for? Contact our{" "}
            <a
              href="mailto:krishna@indianschooloffounders.com"
              className="text-teal-400 font-medium hover:underline"
            >
              ISF support team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
