'use client';

import { Card, CardHeader, CardBody, CardFooter, Button } from "@nextui-org/react";
import { Autocomplete, AutocompleteItem, Input } from "@nextui-org/react";
import Image from 'next/image';
import { useState } from 'react';
import { listToken } from '../constants/listToken';

interface listToken {
    name: string;
}

export default function SwapCard() {
    const [selectedTokenIn, setSelectedTokenIn] = useState<listToken | null>(null);
    const [selectedTokenOut, setSelectedTokenOut] = useState<listToken | null>(null);
    const [amount, setAmount] = useState('');

    const handleTokenSelectedIn = (selectedKey: React.Key) => {

        const selectedTokenObject = listToken.find(token => token.name === selectedKey);

        if (selectedTokenObject) {
            setSelectedTokenIn(selectedTokenObject);
            console.log('Token In Selected:', selectedTokenObject);
        } else {
            console.log('Error when selection');
        }
    };

    const handleTokenSelectedOut = (selectedKey: React.Key) => {

        const selectedTokenObject = listToken.find(token => token.name === selectedKey);

        if (selectedTokenObject) {
            setSelectedTokenOut(selectedTokenObject);
            console.log('Token Out Selected:', selectedTokenObject);
        } else {
            console.log('Error when selection');
        }
    };

    const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(event.target.value); // Update the amount state with the new input value
    };

    const handleSwap = () => {
    }


    return (

        <Card isBlurred className="mx-auto py-4 bg-lavender bg-opacity-75 max-w-lg w-full">
            <CardHeader className="pb-5 pt-2 px-4 flex flex-col items-center justify-center text-center">
                <p className="text-3xl font-bold pb-4">Swap</p>
            </CardHeader>
            <CardBody className="overflow-visible py-2 px-10">
                <div key={'bordered'} className="flex flex-col w-full mb-6 gap-4">
                    <p>Token In:</p>
                    <Autocomplete
                        placeholder='ETH'
                        className="mb-4"
                        variant={'bordered'}
                        onSelectionChange={handleTokenSelectedIn}
                        startContent={
                            <Image
                                src="/images/icon/search.svg"
                                alt="Logo"
                                width={24}
                                height={24}
                                className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0"
                            />}
                    >
                        {listToken.map((Token) => (
                            <AutocompleteItem key={Token.name} value={Token.name} className='text-black'>
                                {Token.name}
                            </AutocompleteItem>
                        ))}
                    </Autocomplete>
                    <Input type="number" variant={'bordered'} label="Amount" placeholder="0" value={amount} onChange={handleAmountChange} />
                    <p>Token Out:</p>
                    <Autocomplete
                        placeholder='ETH'
                        className="mb-4"
                        variant={'bordered'}
                        onSelectionChange={handleTokenSelectedOut}
                        startContent={
                            <Image
                                src="/images/icon/search.svg"
                                alt="Logo"
                                width={24}
                                height={24}
                                className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0"
                            />}
                    >
                        {listToken.map((Token) => (
                            <AutocompleteItem key={Token.name} value={Token.name} className='text-black'>
                                {Token.name}
                            </AutocompleteItem>
                        ))}
                    </Autocomplete>
                </div>

            </CardBody>
            <CardFooter className="flex flex-col justify-center items-center space-y-2">
                <Button onClick={handleSwap} className='bg-tiffany_blue' size="lg" >
                    Swap
                </Button>
            </CardFooter>
        </Card>
    );
}