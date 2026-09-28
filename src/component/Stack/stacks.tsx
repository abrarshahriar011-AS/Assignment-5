import { use, useState } from "react";
import type { TypeStack } from "../../types/StackTypes";
import Stackone from "./stack";
import YourStack from "./readlist";

type StackProps = {
  stackPromise: Promise<TypeStack[]>;
};

const Stack = ({ stackPromise }: StackProps) => {
  const technologies = use(stackPromise);
  const [selectedTechnology, setSelectedTechnology] = useState<TypeStack[]>([]);

  const handleTechnologySelect = (item: TypeStack) => {
    setSelectedTechnology((current) => {
      // Prevent adding the same technology more than once.
      if (current.some((technology) => technology.id === item.id)) {
        return current;
      }

      return [...current, item];
    });
  };

  const handleTechnologyRemove = (id: string) => {
    setSelectedTechnology((current) =>
      current.filter((technology) => technology.id !== id)
    );
  };

  const handleRemoveAll = () => {
    setSelectedTechnology([]);
  };

  return (
    <section className="mx-auto my-10 max-w-6xl px-4">
      <h2 className="text-4xl font-bold">
        Explore the{" "}
        <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
          Technologies
        </span>
      </h2>

      <p className="mb-6 text-gray-600">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-4">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
          {technologies.length === 0 ? (
            <p className="text-gray-600">No technologies available.</p>
          ) : (
            technologies.map((technology) => (
              <Stackone
                key={technology.id}
                technology={technology}
                handleTechnologySelect={handleTechnologySelect}
              />
            ))
          )}
        </div>

        <YourStack
          selected={selectedTechnology}
          onRemove={handleTechnologyRemove}
          onRemoveAll={handleRemoveAll}
        />
      </div>
    </section>
  );
};

export default Stack;