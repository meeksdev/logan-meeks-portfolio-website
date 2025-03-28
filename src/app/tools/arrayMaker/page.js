'use client';
import { useState, useEffect } from 'react';
import { Toggle } from '@/components/ui/toggle';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
    SidebarProvider,
    SidebarTrigger,
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarSeparator,
} from '@/components/ui/sidebar';
import { CirclePlus, Trash } from 'lucide-react';

export default function ArrayMaker() {
    const [rows, setRows] = useState(3);
    const [columns, setColumns] = useState(5);
    const [reelCaseGrid, setReelCaseGrid] = useState([]); // for the reel case
    const [winLine, setWinLine] = useState([]); // for a single winline
    const [winLinesArray, setWinLinesArray] = useState([[]]); // for all winlines
    const [currentWinLine, setCurrentWinLine] = useState(0); // for the current winline

    useEffect(() => {
        setReelCaseGrid(Array.from({ length: rows }).map(() => Array.from({ length: columns })));
    }, [rows, columns]);

    const handleToggle = (i, j) => {
        // console.log("handleToggle");

        setReelCaseGrid(prev => {
            const tempGrid = prev.map(row => [...row]); // Deep copy the grid
            tempGrid[i][j] = !tempGrid[i][j]; // Toggle the cell
            // console.log("tempCell", tempGrid[i][j]);
            return tempGrid;
        });

        setWinLinesArray(prev => {
            const tempArray = prev.map(row => [...row]);
            const winCellIndex = i * columns + j;
            let tempWinLine = [...tempArray[currentWinLine]];

            if (tempWinLine.includes(winCellIndex)) {
                tempWinLine = tempWinLine.filter(cell => cell !== winCellIndex);
            } else tempWinLine.push(winCellIndex);

            tempArray[currentWinLine] = tempWinLine;
            return tempArray;
        });
    };

    const AddWinLine = () => {
        setWinLinesArray(prev => {
            const temp = [...prev];
            temp.push([]);
            setCurrentWinLine(temp.length - 1);
            return temp;
        });
    };

    const RemoveWinLine = winLineToRemove => {
        setWinLinesArray(prev => prev.filter(winline => winline !== winLineToRemove));
    };

    useEffect(() => {
        /* let temp = Array.from({ length: rows }).map(() =>
      Array.from({ length: columns })
    );
    if (winLinesArray.length > 0 && winLinesArray[currentWinLine].length > 0) {
      temp = winLinesArray[currentWinLine].map((element) => {
        const i = Math.floor(element / columns);
        const j = element % columns;
        return { i, j };
      });
      console.log("heres the reelcase", temp);
      setReelCaseGrid(temp);
    }

    setReelCaseGrid(temp); */

        setReelCaseGrid(() => {
            // Create a new grid with all cells set to false
            const tempGrid = Array.from({ length: rows }).map(() => Array.from({ length: columns }).fill(false));

            // If the current winline exists, update the grid
            if (winLinesArray[currentWinLine] && winLinesArray[currentWinLine].length > 0) {
                winLinesArray[currentWinLine].forEach(cellIndex => {
                    const i = Math.floor(cellIndex / columns); // Calculate row index
                    const j = cellIndex % columns; // Calculate column index
                    tempGrid[i][j] = true; // Set the corresponding cell to true
                });
            }

            return tempGrid; // Return the updated grid
        });
    }, [currentWinLine]);

    useEffect(() => {
        console.log('ReelCase: ', reelCaseGrid);
    }, [reelCaseGrid]);

    /* useEffect(() => {
    console.log("WinArray: ", winLinesArray);
  }, [winLinesArray]); */

    return (
        <>
            <h1 className="text-center font-semibold text-4xl py-12 bg-black w-full">Array Maker</h1>
            <SidebarProvider className="h-screen">
                <div className="w-full flex flex-col items-center gap-16 mt-32">
                    <div className="flex flex-col items-center gap-2">
                        <Label className="text-lg">Reel Size</Label>
                        <div className="flex items-baseline gap-2">
                            <Input
                                className="w-14 text-center"
                                value={rows}
                                onChange={e => {
                                    // console.log(e.target.value);
                                    setRows(e.target.value);
                                }}
                            />
                            X
                            <Input
                                className="w-14 text-center"
                                value={columns}
                                onChange={e => {
                                    // console.log(e.target.value);
                                    setColumns(e.target.value);
                                }}
                            />
                        </div>
                    </div>

                    {rows > 0 && columns > 0 && (
                        <div>
                            {reelCaseGrid.map((row, i) => (
                                <div key={i}>
                                    {row.map((cell, j) => (
                                        <Toggle className="m-1 size-12" key={j} variant="outline" pressed={cell === true} onClick={() => handleToggle(i, j)} />
                                    ))}
                                    <br />
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="mt-8">
                        <h2 className="text-center font-semibold text-lg mb-2">Win Lines Array</h2>
                        <div className="w-full p-4 border-2 border-border rounded-lg min-w-96 whitespace-break-spaces">
                            <span>{'['}</span>
                            <br />
                            {winLinesArray.map((winLine, i) => (
                                <div key={i}>
                                    <span key={`span1${i}`}>{'\t['}</span>
                                    {winLine.map((cell, j) => (
                                        <span key={j}>{j === winLine.length - 1 ? <span key={j}>{cell}</span> : <span key={j}>{cell}, </span>}</span>
                                    ))}
                                    <span key={`span2${i}`}>{`], // Winline ${i}`}</span>
                                    <br />
                                </div>
                            ))}
                            <span>{']'}</span>
                        </div>
                    </div>
                </div>

                <Sidebar side="right" collapsible="none" className="w-72 border-l-2 border-border">
                    <SidebarContent>
                        <SidebarMenu className="text-center mt-32 h-full font-semibold text-lg">
                            Win Lines
                            {winLinesArray.map((winLine, i) => (
                                <div key={i}>
                                    <SidebarSeparator key={`separator_${i}`} />
                                    <SidebarMenuItem
                                        key={`menuItem_${i}`}
                                        className={`flex items-center justify-between px-2 ${i === currentWinLine ? 'border-l-4 border-accent' : ''}`}
                                    >
                                        <SidebarMenuButton onClick={() => setCurrentWinLine(i)} className={`${i === currentWinLine ? 'text-accent' : ''}`}>
                                            Winline {i + 1}
                                        </SidebarMenuButton>
                                        <SidebarMenuButton onClick={() => RemoveWinLine(winLine)} className="w-fit text-red-500 hover:text-red-700">
                                            <Trash />
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </div>
                            ))}
                            <SidebarSeparator />
                            <SidebarMenuItem>
                                <SidebarMenuButton className="mx-auto w-fit h-fit" onClick={() => AddWinLine()}>
                                    <CirclePlus style={{ width: '24px', height: '24px' }} />
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarContent>
                </Sidebar>
            </SidebarProvider>
        </>
    );
}
