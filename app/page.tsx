import { ActDivider } from "@/components/ui/ActDivider";
import { ActEightPromise } from "@/components/sections/ActEight_Promise";
import { ActFiveSolution } from "@/components/sections/ActFive_Solution";
import { ActFourReckoning } from "@/components/sections/ActFour_Reckoning";
import { ActOneSilence } from "@/components/sections/ActOne_Silence";
import { ActSevenXFactor } from "@/components/sections/ActSeven_XFactor";
import { ActSixApp } from "@/components/sections/ActSix_App";
import { ActThreeCrime } from "@/components/sections/ActThree_Crime";
import { ActTwoEvidence } from "@/components/sections/ActTwo_Evidence";

export default function Page() {
  return (
    <main>
      <ActOneSilence />
      <ActDivider />
      <ActTwoEvidence />
      <ActDivider />
      <ActThreeCrime />
      <ActDivider />
      <ActFourReckoning />
      <ActDivider />
      <ActFiveSolution />
      <ActDivider />
      <ActSixApp />
      <ActDivider />
      <ActSevenXFactor />
      <ActDivider />
      <ActEightPromise />
    </main>
  );
}
