import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { getNotesData } from "@/database/services/note_service";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { formatDate } from "@/lib/date_formatter";
import { Link } from "react-router-dom";
import CSimmer from "@/components/simmer";
import { handleDeleteNote } from "@/database/controllers/note_controller";

export default function Home() {
  const revalidate = useQueryClient();
  const { data, isError, isLoading } = useQuery({
    queryKey: ["notesDatas"],
    queryFn: getNotesData,
  });

  const deleteNote = async (_id: string) => {
    await handleDeleteNote(_id);
    await revalidate.invalidateQueries();

    console.log("delete succesfully");
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-3 gap-4 m-6">
        <CSimmer />
        <CSimmer />
        <CSimmer />
        <CSimmer />
      </div>
    );
  }

  if (isError) {
    return <p>Error when Fetching Data</p>;
  }

  return (
    <main>
      {data != undefined ? (
        <div className="grid sm:grid-cols-4 grid-flow-col-1 gap-4 m-6">
          {data.map((item) => (
            <div key={item._id}>
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-end text-xs">
                    {formatDate(item.createdAt)}
                  </CardTitle>
                  <CardDescription>{item.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{item.note}</p>
                  <div className="flex justify-end">
                    <Button onClick={() => deleteNote(item._id)}>❌</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      ) : (
        <p>zonk</p>
      )}
    </main>
  );
}
