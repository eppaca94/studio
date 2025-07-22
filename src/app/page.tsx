import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gamepad2 } from 'lucide-react';

const games = [
  {
    id: 'space-invaders-retro',
    title: 'Space Invaders Retro',
    description: 'The classic arcade shooter, reimagined for the modern web.',
    imageUrl: 'https://placehold.co/600x400.png',
    hint: 'arcade space'
  },
  {
    id: 'puzzle-quest-dragons',
    title: 'Puzzle Quest: Dragons',
    description: 'Match gems to power up your attacks and defeat mythical dragons.',
    imageUrl: 'https://placehold.co/600x400.png',
    hint: 'puzzle fantasy'
  },
  {
    id: 'platform-peril',
    title: 'Platform Peril',
    description: 'Jump and run through challenging levels in this pixel-art platformer.',
    imageUrl: 'https://placehold.co/600x400.png',
    hint: 'platformer pixel'
  },
  {
    id: 'asteroid-belt',
    title: 'Asteroid Belt',
    description: 'Navigate your ship through a dangerous asteroid field.',
    imageUrl: 'https://placehold.co/600x400.png',
    hint: 'space action'
  },
  {
    id: 'card-clash-champions',
    title: 'Card Clash Champions',
    description: 'A strategic card game of wits and tactics. Build your deck, defeat your foes.',
    imageUrl: 'https://placehold.co/600x400.png',
    hint: 'card strategy'
  },
  {
    id: 'speed-racers-go',
    title: 'Speed Racers Go',
    description: 'Top-down racing action with nitro boosts and tight corners.',
    imageUrl: 'https://placehold.co/600x400.png',
    hint: 'racing car'
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-2">
          Explore Our Games
        </h1>
        <p className="text-lg text-muted-foreground">
          Dive into a world of 2D games. Ready to play, right in your browser.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {games.map((game) => (
          <Card key={game.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="p-0">
              <Image
                src={game.imageUrl}
                alt={game.title}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                data-ai-hint={game.hint}
              />
            </CardHeader>
            <CardContent className="flex-grow p-6">
              <h2 className="font-headline text-2xl font-bold mb-2">{game.title}</h2>
              <p className="text-muted-foreground">{game.description}</p>
            </CardContent>
            <CardFooter className="p-6 bg-slate-50 dark:bg-slate-900">
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <Link href={`/play/${game.id}`}>
                  <Gamepad2 className="mr-2 h-4 w-4" />
                  Play Now
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
