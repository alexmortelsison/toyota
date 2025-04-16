import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ThePowerOfChoice() {
  return (
    <>
      <h1 className="text-6xl font-semibold pt-48 max-w-3xl mx-auto">
        The Power Of Choice
      </h1>
      <p className="w-[60%] text-center text-2xl pt-6">
        Take charge of your future and choose from Toyota’s diverse range of
        powertrains.
      </p>
      <div className="flex flex-wrap justify-between gap-48 pt-12 pb-16">
        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-5xl font-semibold border-t py-8">
                Hybrid EV
              </AccordionTrigger>
              <AccordionContent className="max-w-70">
                Hybrid Electric Vehicles start, refuel and handle like the
                gas-only Toyotas you already know and love—just with better mpg
                ratings. Even though they run on a combination of gas and
                battery-powered electric motor(s), they don&apos;t use a plug to
                charge their battery. Instead, they recycle the kinetic energy
                captured from the vehicle&apos;s braking motion to recharge on
                their own.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-5xl font-semibold border-t py-8">
                Plug-In Hybrid EV
              </AccordionTrigger>
              <AccordionContent className="max-w-70">
                Plug-in Hybrid Electric Vehicles run just like hybrids, using a
                combination of fuel and battery-powered electric motor(s), but
                thanks to their larger battery pack, they can run farther on
                electric power alone. When your Plug-in Hybrid EV&apos;s battery
                uses up its charge, it carries on like a regular Hybrid EV,
                using a combination of gas and energy stored from the
                vehicle&apos;s battery system to power it. When you&apos;re
                ready, plug it in to recharge it and return to the efficiency of
                operating on all-electric power. their own.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-5xl font-semibold border-t py-8">
                Fuel Cell EV
              </AccordionTrigger>
              <AccordionContent className="max-w-70">
                Fuel Cell Electric Vehicles use a chemical reaction involving
                oxygen in the air and hydrogen from its tanks to generate their
                own electric charge and power the motor. When it comes to
                tailpipe emissions? Nothing but water. To refuel, visit your
                nearest hydrogen station that utilizes a pump-and-nozzle system
                to fill up.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-5xl font-semibold border-t py-8">
                Battery EV
              </AccordionTrigger>
              <AccordionContent className="max-w-70">
                These pure Electric Vehicles replace gasoline and combustion
                engines with battery-powered electric motors, providing smooth
                and almost instantaneous torque. They use the same technology of
                our Hybrid EVs to harness kinetic energy generated from the
                braking motion of the vehicle, but source the rest of their
                power when you plug them in and charge them up.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Image
            src={"/bz1.avif"}
            alt="bz photo"
            width={500}
            height={500}
            className="object-cover rounded-2xl"
          />
        </div>
      </div>
    </>
  );
}
