import Image from "next/image";
import { Card } from "@repo/ui/card";
import { Navbar } from "@repo/ui/navbar"
import { Landing } from "@repo/ui/landing"

export default function Page(): JSX.Element {
  return (
    <div>
      {/* <Card buttonPlaceholder2="Sign up" buttonPlaceholder1="Next" title="Log in" placeholder="Enter email, mobile, or username"/> */}
      <Navbar />
      <Landing />
    </div>
  );
}
