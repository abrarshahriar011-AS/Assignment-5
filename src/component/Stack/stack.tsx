import type { TypeStack } from "../../types/StackTypes";

type StackoneProps = {
  technology: TypeStack;
  handleTechnologySelect: (item: TypeStack) => void;
};

const Stackone = ({
  technology,
  handleTechnologySelect,
}: StackoneProps) => {
  return (
    <article className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <div className="mb-5 flex items-start justify-between">
        <img
          src={technology.icon}
          alt={`${technology.name} logo`}
          className="h-8 w-8 object-contain"
        />

        <span className="rounded-full bg-sky-50 px-3 py-1 text-xs text-sky-500">
          {technology.badge}
        </span>
      </div>

      <h3 className="text-lg font-bold text-slate-900">{technology.name}</h3>

      <p className="mt-2 min-h-12 text-sm leading-5 text-slate-500">
        {technology.description}
      </p>

      <div className="my-4 border-t border-slate-100" />

      <div className="flex items-center justify-between text-xs text-slate-500">
        <span className="rounded bg-slate-50 px-2 py-1">
          {technology.category}
        </span>

        <span className="text-amber-400">★ {technology.rating}</span>
      </div>

      <button
        type="button"
        className="mt-4 w-full rounded-lg bg-slate-950 py-2 text-sm text-white hover:bg-slate-800"
        onClick={() => handleTechnologySelect(technology)}
      >
        Add to Stack
      </button>
    </article>
  );
};

export default Stackone;