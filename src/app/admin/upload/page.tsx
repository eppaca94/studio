'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { UploadCloud } from "lucide-react";

export default function AdminUploadPage() {
    const { toast } = useToast();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        toast({
            title: "Upload Submitted",
            description: "In a real app, the game would now be processing.",
        });
    }

  return (
    <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center">
            <Card className="w-full max-w-2xl shadow-xl">
                <form onSubmit={handleSubmit}>
                    <CardHeader>
                        <CardTitle className="font-headline text-3xl">Upload New Game</CardTitle>
                        <CardDescription>
                            Add a new 2D game to the QBOGame platform.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="game-title">Game Title</Label>
                            <Input id="game-title" placeholder="e.g., Pixel Adventure" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="game-description">Description</Label>
                            <Textarea id="game-description" placeholder="A short, catchy description of the game." required />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="game-file">Game File (.zip)</Label>
                                <Input id="game-file" type="file" accept=".zip" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="thumbnail-image">Thumbnail Image</Label>
                                <Input id="thumbnail-image" type="file" accept="image/*" required />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit" className="w-full" size="lg">
                            <UploadCloud className="mr-2 h-5 w-5" />
                            Upload Game
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    </div>
  );
}
