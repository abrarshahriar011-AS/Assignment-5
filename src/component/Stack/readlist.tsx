import type { TypeStack } from "../../types/StackTypes";

type YourStackProps = {
  selected: TypeStack[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
};

const YourStack = ({
  selected,
  onRemove,
  onRemoveAll,
}: YourStackProps) => {
  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-bold text-slate-900">Your Stack</h2>

      <p className="mb-4 text-sm text-slate-400">
        {selected.length}{" "}
        {selected.length === 1 ? "technology" : "technologies"} selected
      </p>

      {selected.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-200 py-7 text-center text-sm text-slate-400">
          Your stack is empty.
        </div>
      ) : (
        <>
          <div className="space-y-2">
            {selected.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center justify-between rounded-lg border border-slate-200 p-3"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={technology.icon}
                    alt=""
                    className="h-8 w-8 object-contain"
                  />

                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {technology.name}
                    </p>
                    <p className="text-xs text-slate-400">
                      {technology.category}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onRemove(technology.id)}
                  aria-label={`Remove ${technology.name}`}
                  className="text-2xl text-slate-400 hover:text-slate-700"
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={onRemoveAll}
            className="mt-6 w-full rounded-lg border border-red-200 py-2 text-red-600 hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
};

export default YourStack;