import React from "react";
import WelcomeMessage from "./components/WelcomeMessage";

type Props = {};

export default function HomePageScene({}: Props) {
  return (
    <div>
      <WelcomeMessage />
    </div>
  );
}
