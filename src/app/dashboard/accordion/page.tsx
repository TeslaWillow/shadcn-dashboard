import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const items = [
  {
    id: "item-1",
    question: "Is it accesible?",
    answer: "Yes. it adheres to the WAI-ARIA design pattern",
  },
  {
    id: "item-2",
    question: "Is it styled?",
    answer: "Yes. It comes with default styles that matches the other components&apos; aesthetic.",
  },
  {
    id: "item-3",
    question: "Is it animated?",
    answer: "Yes. It's animated by default, but you can disable it if you prefer.",
  },
  {
    id: "item-4",
    question: "Item 4",
    answer: "Yes. It's animated by default, but you can disable it if you prefer.",
  },
];

export default function Page() {
  return (
    <div>
      <Accordion type="single" className="w-full">
        {
          items.map((item) => (
            <AccordionItem value={item.id} key={item.id}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))
        }
        
      </Accordion>
    </div>
  );
}