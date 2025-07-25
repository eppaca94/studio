
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gamepad2, Users, Trophy, Star, ShieldCheck, UserPlus, Gamepad, Award } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const featuredGames = [
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
];

const howItWorks = [
    {
        icon: UserPlus,
        title: "1. Sign Up",
        description: "Create your free QBOGame account in seconds to start your journey.",
    },
    {
        icon: Gamepad,
        title: "2. Pick a Game",
        description: "Explore our library of classic and new 2D games, ready to play instantly.",
    },
    {
        icon: Award,
        title: "3. Compete & Win",
        description: "Join tournaments, challenge other players, and win exciting prizes.",
    },
];

const testimonials = [
  {
    name: "Gamer_Alex",
    avatar: "https://placehold.co/100x100.png",
    text: "QBOGame is my go-to for a quick gaming fix. The tournaments are intense and the community is awesome!",
  },
  {
    name: "PixelQueen",
    avatar: "https://placehold.co/100x100.png",
    text: "I love the retro vibes of the games here. It's like a trip down memory lane but with a modern competitive twist.",
  },
  {
    name: "ProLeaguer_T",
    avatar: "https://placehold.co/100x100.png",
    text: "The platform is smooth, the competition is fierce, and the prize pools are great. Highly recommended for any serious 2D gamer.",
  },
];


export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-background/70 z-10" />
        <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
            poster="https://placehold.co/1920x1080/000000/000000.png"
            data-ai-hint="gameplay montage"
            >
            {/* NOTE: Please replace this with a real video file. This is a placeholder. */}
            <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" type="video/mp4" />
        </video>
        <div className="container mx-auto px-4 z-20 relative text-white flex flex-col items-center">
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary mb-4" style={{ textShadow: '0 0 15px hsl(var(--primary))' }}>
                Tu Arena de Juegos 2D
            </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-neutral-200" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
            Juega a los clásicos y nuevos juegos de navegador 2D, compite en emocionantes torneos y gana premios increíbles.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-7 px-10 shadow-[0_0_20px_hsl(var(--primary))]">
            <Link href="/">
                <Gamepad2 className="mr-3" />
                Explorar Juegos
            </Link>
          </Button>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-2" style={{ textShadow: '0 0 10px hsl(var(--primary))' }}>
              Comienza en Minutos
            </h2>
            <p className="text-lg text-muted-foreground">
              Unirte a la diversión es tan fácil como contar hasta tres.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {howItWorks.map((step) => (
              <div key={step.title} className="flex flex-col items-center">
                <div className="bg-primary/10 p-6 rounded-full mb-6 border-2 border-primary/50 shadow-[0_0_15px_hsl(var(--primary)/0.5)]">
                    <step.icon className="w-12 h-12 text-primary" />
                </div>
                <h3 className="font-headline text-2xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Games Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-2" style={{ textShadow: '0 0 10px hsl(var(--primary))' }}>
              Juegos Destacados
            </h2>
            <p className="text-lg text-muted-foreground">
              Sumérgete en un mundo de juegos 2D. Listos para jugar, directamente en tu navegador.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredGames.map((game) => (
              <Card key={game.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-card border-primary/20 hover:border-primary/50">
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
                <CardFooter className="p-6 bg-secondary/50">
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
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
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-2" style={{ textShadow: '0 0 10px hsl(var(--primary))' }}>
              Lo que dicen los Jugadores
            </h2>
             <p className="text-lg text-muted-foreground">
              Estamos orgullosos de tener una comunidad vibrante y en crecimiento.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="flex flex-col justify-center items-center p-8 text-center shadow-xl bg-card border-primary/20 hover:border-primary/50">
                 <Avatar className="w-20 h-20 mb-4 border-4 border-primary/50 shadow-[0_0_20px_hsl(var(--primary)/0.7)]">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                <CardContent className="p-0">
                  <p className="italic text-muted-foreground mb-4">&quot;{testimonial.text}&quot;</p>
                  <p className="font-bold font-headline text-primary">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
        <section className="py-20 text-white" style={{ background: 'linear-gradient(45deg, hsl(var(--secondary)), hsl(var(--background)))' }}>
            <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4 text-primary" style={{ textShadow: '0 0 10px hsl(var(--primary))' }}>
                ¿Listo para Unirte a la Batalla?
            </h2>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-neutral-300">
                Crea tu cuenta hoy y comienza tu viaje para convertirte en un campeón de QBOGame. ¡Es gratis!
            </p>
            <Button asChild size="lg" className="text-lg py-7 px-10 bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-[0_0_20px_hsl(var(--primary))]">
                <Link href="/signup">Regístrate Gratis</Link>
            </Button>
            </div>
        </section>
    </div>
  );
}
