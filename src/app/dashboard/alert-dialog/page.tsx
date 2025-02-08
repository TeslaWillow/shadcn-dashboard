'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { useState } from "react";

export default function Page() {

  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="grid grid-cols-2 gap-4">
      <AlertDialog 
        open={ dialogOpen }
        // onOpenChange={ value => console.log(value)}
        onOpenChange={setDialogOpen}
      >

      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => console.log("Cancel")} >Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => console.log("Continue")} >Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>

    </AlertDialog>

      <Button onClick={() => setDialogOpen(true)}>Open Dialog Manual</Button>
    </div>
  );
}