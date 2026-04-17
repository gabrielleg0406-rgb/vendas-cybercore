import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "O que exatamente eu recebo?",
    a: "Acesso ao repositório completo do VibeKit com +15 templates, design system, componentes premium, integrações de auth/database/payments e documentação. Tudo pronto pra clonar e começar a vibecodar.",
  },
  {
    q: "Preciso saber programar?",
    a: "O VibeKit foi feito para Vibecoders — pessoas que constroem com IA (Cursor, Lovable, Claude). Conhecimento básico de React ajuda, mas a stack foi pensada para fluir bem com IA generativa.",
  },
  {
    q: "Posso usar em projetos comerciais?",
    a: "Sim. Licença para uso ilimitado em projetos próprios e de clientes. Sem royalties.",
  },
  {
    q: "Recebo atualizações?",
    a: "Sim, atualizações vitalícias incluídas. Novos templates, melhorias e correções entram no seu acesso automaticamente.",
  },
  {
    q: "E se não gostar?",
    a: "Garantia incondicional de 7 dias. Se não fizer sentido pra você, devolvemos 100% do valor.",
  },
  {
    q: "Esse preço é por quanto tempo?",
    a: "R$97 é o preço de lançamento e vai subir em breve para R$297. Garantindo agora você trava esse valor para sempre.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="relative py-32">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <div className="badge-pill">FAQ</div>
          <h2 className="mt-6 font-display text-4xl font-bold tracking-tight md:text-5xl">
            <span className="text-gradient">Perguntas frequentes</span>
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="card-premium border-border/40 px-6"
              >
                <AccordionTrigger className="py-5 text-left font-display text-base font-semibold hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
