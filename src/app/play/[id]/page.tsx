import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type PlayPageProps = {
  params: {
    id: string;
  };
};

// In a real app, you would fetch this data from your backend based on the id
const getGameData = (id: string) => {
  const title = id
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  return {
    id,
    title,
    description: `This is the dedicated play page for ${title}. The game would be loaded into the frame above. Get ready for an exciting adventure!`,
  };
};

export default function PlayPage({ params }: PlayPageProps) {
  const game = getGameData(params.id);

  return (
    <div className="bg-gray-800 text-white min-h-[calc(100vh-5rem)] flex flex-col">
      <header className="bg-gray-900/50 p-4 flex items-center justify-between shadow-lg">
        <h1 className="font-headline text-2xl font-bold">{game.title}</h1>
        <Button asChild variant="secondary">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Games
          </Link>
        </Button>
      </header>
      
      <div className="flex-grow flex flex-col md:flex-row p-4 gap-4">
        <main className="flex-grow-[3] bg-black rounded-lg shadow-inner overflow-hidden flex items-center justify-center">
            <div className="aspect-video w-full h-full bg-gray-900 flex flex-col items-center justify-center text-center p-4">
                <Image
                    src="https://placehold.co/1280x720.png"
                    alt="Game placeholder"
                    width={1280}
                    height={720}
                    className="w-full h-full object-cover"
                    data-ai-hint="gameplay screenshot"
                />
            </div>
        </main>
        
        <aside className="flex-grow-[1] bg-gray-900/50 rounded-lg p-6 flex flex-col">
          <h2 className="font-headline text-xl border-b border-gray-700 pb-2 mb-4">About the game</h2>
          <p className="text-gray-300">{game.description}</p>
        </aside>
      </div>
    </div>
  );
}
