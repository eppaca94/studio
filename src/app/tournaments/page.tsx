import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Gamepad2, Trophy, Calendar, Users } from "lucide-react";
import Image from 'next/image';
import { QbocoinIcon } from "@/components/icons/qbocoin-icon";

const tournaments = [
  {
    id: 'space-invaders-weekly-1',
    title: "Weekly Alien Hunt",
    game: 'Space Invaders Retro',
    prizePool: 5000,
    entryFee: 50,
    schedule: 'Starts: June 15, 8:00 PM UTC',
    participants: 128,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'arcade space'
  },
  {
    id: 'puzzle-quest-monthly-masters',
    title: 'Monthly Dragon Slayer',
    game: 'Puzzle Quest: Dragons',
    prizePool: 25000,
    entryFee: 200,
    schedule: 'Starts: July 1, 12:00 PM UTC',
    participants: 64,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'puzzle fantasy'
  },
  {
    id: 'platform-peril-sprint',
    title: 'Pixel Perfect Sprint',
    game: 'Platform Peril',
    prizePool: 2000,
    entryFee: 20,
    schedule: 'Live Now! Ends in 2 hours',
    participants: 256,
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'platformer pixel'
  },
];

export default function TournamentsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-2">
          Game Tournaments
        </h1>
        <p className="text-lg text-muted-foreground">
          Compete against other players and win amazing prizes!
        </p>
      </div>

      <div className="space-y-8">
        {tournaments.map((tournament) => (
            <Card key={tournament.id} className="grid md:grid-cols-3 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="md:col-span-1">
                    <Image
                        src={tournament.imageUrl}
                        alt={tournament.game}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                        data-ai-hint={tournament.imageHint}
                    />
                </div>
                <div className="md:col-span-2 flex flex-col">
                    <CardHeader>
                        <CardTitle className="font-headline text-3xl text-primary">{tournament.title}</CardTitle>
                        <CardDescription className="flex items-center gap-2 text-md">
                            <Gamepad2 className="w-5 h-5" /> {tournament.game}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-4">
                        <div className="flex items-center gap-2 text-lg font-semibold text-amber-500">
                            <Trophy className="w-6 h-6" /> Prize Pool: {tournament.prizePool.toLocaleString()} <QbocoinIcon className="w-5 h-5 inline-block" />
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="w-5 h-5" /> {tournament.schedule}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                             <Users className="w-5 h-5" /> {tournament.participants} Participants
                        </div>
                    </CardContent>
                    <CardFooter className="bg-slate-50 dark:bg-slate-900 p-4 flex items-center justify-between">
                        <div className="font-semibold">
                            Entry Fee: {tournament.entryFee} <QbocoinIcon className="w-4 h-4 inline-block" />
                        </div>
                        <Button className="bg-accent hover:bg-accent/90">
                            Enter Tournament
                        </Button>
                    </CardFooter>
                </div>
            </Card>
        ))}
      </div>
    </div>
  );
}
