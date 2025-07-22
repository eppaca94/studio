'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { QbocoinIcon } from "@/components/icons/qbocoin-icon";
import { useToast } from "@/hooks/use-toast";

const transactions = [
    { id: 1, date: '2024-06-10', description: 'Deposit from VISA **** 4242', amount: 1000, type: 'deposit' },
    { id: 2, date: '2024-06-10', description: 'Entry Fee: Weekly Alien Hunt', amount: -50, type: 'fee' },
    { id: 3, date: '2024-06-08', description: 'Tournament Winnings: Pixel Perfect Sprint', amount: 500, type: 'win' },
    { id: 4, date: '2024-06-07', description: 'Entry Fee: Pixel Perfect Sprint', amount: -20, type: 'fee' },
];

export default function WalletPage() {
    const { toast } = useToast();

    const handleDeposit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const amount = (event.currentTarget.elements.namedItem('amount') as HTMLInputElement).value;
        toast({
            title: "Deposit Successful",
            description: `You've added ${amount} Qbocoins to your wallet.`,
        });
        event.currentTarget.reset();
    }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-2">
          My Wallet
        </h1>
        <p className="text-lg text-muted-foreground">
          Manage your Qbocoins and transaction history.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Deposit Qbocoins</CardTitle>
                    <CardDescription>1 USD = 100 Qbocoins. Add funds to enter tournaments.</CardDescription>
                </CardHeader>
                <form onSubmit={handleDeposit}>
                    <CardContent>
                        <Label htmlFor="amount" className="sr-only">Amount</Label>
                        <div className="relative">
                            <QbocoinIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input id="amount" name="amount" type="number" placeholder="Enter amount to deposit" className="pl-10" required />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit" className="w-full">Deposit Now</Button>
                    </CardFooter>
                </form>
            </Card>
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Transaction History</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Date</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead className="text-right">Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {transactions.map(tx => (
                                <TableRow key={tx.id}>
                                    <TableCell className="text-muted-foreground">{tx.date}</TableCell>
                                    <TableCell>{tx.description}</TableCell>
                                    <TableCell className={`text-right font-semibold ${tx.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                        {tx.amount > 0 ? '+' : ''}{tx.amount.toLocaleString()} <QbocoinIcon className="w-4 h-4 inline-block" />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
        <div className="md:col-span-1">
            <Card className="shadow-lg sticky top-28">
                <CardHeader className="items-center text-center">
                    <CardTitle className="font-headline text-lg">Current Balance</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center">
                    <div className="flex items-center gap-2 text-5xl font-bold text-primary">
                        <QbocoinIcon className="w-12 h-12" />
                        <span>1,250</span>
                    </div>
                    <p className="text-muted-foreground mt-2">Qbocoins</p>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
