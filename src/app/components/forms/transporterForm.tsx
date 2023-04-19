import React, { FC, MouseEvent, useState } from "react";
import { useStepHook } from "../../../setup/hooks/useStepIncrement.hook";
import { useUser } from "../../../setup/context/user.context";
import { ResponseCard } from "../responseCard";
import { Button } from "../button";

export const TransporterForm: FC = () => {
    const { setStep, step, progressBar, setProgressBar } = useUser();
    const useStep = new useStepHook();

    const [response, setResponse] = useState([
        {
          label: "Entre 1 et 5",
        },
        {
          label: "Entre 5 et 10",
        },
        {
          label: "Entre 10 et 20",
        },
        {
          label: "Plus de 20",
        },
      ]);
    
      const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
      };

    return (
    <div>
        <p className="text-[#022AB1] text-center font-medium text-xl">Combien votre entreprise dépense-t-elle en prestation de transport ?</p>
        <form action="" className="flex justify-between flex-wrap items-center mt-8">
        {response.map((item, index) => (
          <ResponseCard
            label={item.label}
            handleClick={handleClick}
            index={index}
          />
        ))}
      </form>
        <br />
        <div className="fixed left-0 right-0 bottom-20 flex justify-around items-center">
        <Button type={"Previous"} />
        <Button type={"Next"} />
      </div>
    </div>
    );
};