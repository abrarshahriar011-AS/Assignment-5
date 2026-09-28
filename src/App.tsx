import { Suspense } from "react";
import NavBar from "./component/nevBar.tsx";
import HeaderBar from "./component/headerBar.tsx";
import Stack from "./component/Stack/stacks.tsx";
import type { TypeStack } from "./types/StackTypes.ts";
import UperNav from "./component/uperNav.tsx";
import Footer from "./component/Footer.tsx";

const stackData = async (): Promise<TypeStack[]> => {
  const response = await fetch("/Stack.json");

  if (!response.ok) {
    throw new Error("Could not load Stack.json");
  }

  return response.json() as Promise<TypeStack[]>;
};

const stackPromise = stackData();

const App = () => {
  return (
    <>
      <NavBar />
      <HeaderBar />

      <main>
        <Suspense fallback={<p className="my-10 text-center">Loading technologies...</p>}>
          <Stack stackPromise={stackPromise} />
        </Suspense>
      </main>
      <UperNav />
      <Footer />
    </>
  );
};

export default App;