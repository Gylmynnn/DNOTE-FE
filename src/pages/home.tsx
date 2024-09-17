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
        <div className="grid grid-cols-1 gap-4">
          {data.map((item) => (
            <div key={item._id}>
              <Card className="border-orange-400 border-2 hover:bg-orange-400 hover:text-white transition-all duration-500 ease-out">
                <CardHeader>
                  <CardTitle className="text-lg font-bold">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="w-10/12">
                    {item.note}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <p className="text-xs">{formatDate(item.createdAt)}</p>
                    <Button onClick={() => deleteNote(item._id)}>X</Button>
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
