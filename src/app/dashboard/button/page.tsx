"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight, Loader2, MailOpen } from "lucide-react";

export default function Page() {
  return (
    <div className="grid grid-cols-5 gap-2">
      <Button>Default</Button>
      <Button variant={"destructive"}>Descructive</Button>
      <Button variant={"ghost"}>ghost</Button>
      <Button variant={"secondary"}>secondary</Button>
      <Button variant={"link"}>link</Button>
      <Button variant={"success"}>link</Button>
      <Button disabled>Disabled</Button>
      <Button onClick={() => console.log("Hola mundo")}>Click me</Button>
      <Button capitalize={false}>capitalize false</Button>
      <Button variant="outline" size="icon">
        <ChevronRight />
      </Button>
      <Button>
        <MailOpen /> Login with Email
      </Button>
      <Button disabled>
        <Loader2 className="animate-spin" />
        Please wait
      </Button>
    </div>
  );
}