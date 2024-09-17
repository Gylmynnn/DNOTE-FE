import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { handleCreateNote } from "@/database/controllers/note_controller";
import { Link, useNavigate } from "react-router-dom";
import { FormEvent } from "react";

export default function Create() {
  const navigate = useNavigate();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    await handleCreateNote(e);
    navigate("/");
  };
  return (
    <main className="pt-8">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center mx-4"
      >
        <Label htmlFor="title" className="tracking-wider font-bold text-base">
          🚀 TITTLE
        </Label>
        <Input
          name="title"
          id="title"
          className="mt-2 mb-4 border-2"
          placeholder="enter your tittle"
          required
        />
        <Label htmlFor="note" className="tracking-wider text-base">
          ✨ NOTE
        </Label>
        <Textarea
          name="note"
          id="note"
          className="my-2 min-h-80 border-2"
          placeholder="write your note"
          required
        />

        <div className="flex justify-end gap-4">
          <Button className="mt-2 font-bold" asChild variant="destructive">
            <Link to="/">🔙 CANCLE</Link>
          </Button>

          <Button type="submit" className="mt-2 font-bold">
            CREATE 🎈
          </Button>
        </div>
      </form>
    </main>
  );
}
