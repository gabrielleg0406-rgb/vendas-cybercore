const stack = [
  { name: "Item one", desc: "Category" },
  { name: "Item two", desc: "Category" },
  { name: "Item three", desc: "Category" },
  { name: "Item four", desc: "Category" },
  { name: "Item five", desc: "Category" },
  { name: "Item six", desc: "Category" },
  { name: "Item seven", desc: "Category" },
  { name: "Item eight", desc: "Category" },
  { name: "Item nine", desc: "Category" },
  { name: "Item ten", desc: "Category" },
  { name: "Item eleven", desc: "Category" },
  { name: "Item twelve", desc: "Category" },
];

const Stack = () => {
  return (
    <section id="stack" className="relative py-32">
      <div className="absolute inset-0 bg-gradient-hero opacity-50" aria-hidden />
      <div className="container-tight relative">
        <div className="mx-auto max-w-2xl text-center">
          <div className="badge-pill">Section label</div>
          <h2 className="mt-6 font-display text-4xl font-bold tracking-tight md:text-5xl">
            <span className="text-gradient-cyber">Lorem ipsum.</span>{" "}
            <span className="text-muted-foreground">Dolor sit amet.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {stack.map((item) => (
            <div
              key={item.name}
              className="card-premium group flex flex-col items-start p-5 transition-all hover:-translate-y-1"
            >
              <span className="font-mono text-xs text-primary">{item.desc}</span>
              <span className="mt-2 font-display text-lg font-semibold">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
