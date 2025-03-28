'use client';
import { useState, useEffect, use } from 'react';
import { Toggle } from '@/components/ui/toggle';

import { Input } from '@/components/ui/input';

export default function ArrayMaker() {
    const [rows, setRows] = useState(3);
    const [columns, setColumns] = useState(5);
    const [reelCaseGrid, setReelCaseGrid] = useState([]); // for the reel case
    const [winLine, setWinLine] = useState([]); // for a single winline
    const [winLinesArray, setWinLinesArray] = useState([]); // for all winlines

    /* useEffect(() => {
    setArray((prev) => {
      const tempArray = Array.from({ length: rows }).map(() =>
        Array.from({ length: columns }).fill(0)
      );

      console.log(tempArray);

      return tempArray;
    });
  }, []); */

    useEffect(() => {
        // const length = rows * columns;
        // const tempArray = new Array(length);
        // const tempArray = [];
        setReelCaseGrid(Array.from({ length: rows }).map(() => Array.from({ length: columns })));
    }, [rows, columns]);

    /* const handleToggle = (i, j) => {
    setArray((prev) => {
      const temp = [...prev];
      temp[i][j] = !temp[i][j];
      return temp;
    });
    console.log(`toggle ${i}:${j}`);
  }; */

    const handleToggle = (i, j) => {
        setReelCaseGrid(prev => {
            const temp = prev.map((row, rowIndex) =>
                row.map((cell, colIndex) => {
                    if (rowIndex === i && colIndex === j) {
                        const newCellValue = !cell;
                        // console.log(cell);

                        const winCellIndex = i * columns + j;
                        if (newCellValue) {
                            const tempWinLine = [...winLine];
                            tempWinLine.push(winCellIndex);
                            setWinLine(tempWinLine);
                        } else {
                            const tempWinLine = winLine.filter(cell => cell !== winCellIndex);
                            setWinLine(tempWinLine);
                        }

                        return newCellValue;
                    } else {
                        return cell;
                    }
                })
            );
            return temp;
        });
    };

    useEffect(() => {
        console.log('Array: ', reelCaseGrid);
    }, [reelCaseGrid]);

    useEffect(() => {
        console.log('WinArray: ', winLine);
    }, [winLine]);

    return (
        <div className="flex flex-col items-center gap-8">
            <h1>Array Maker</h1>

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

            {rows > 0 && columns > 0 && (
                <div>
                    {reelCaseGrid.map((row, i) => (
                        <div key={i}>
                            {row.map((cell, j) => (
                                <Toggle className="m-1" key={j} variant="outline" pressed={cell} onClick={() => handleToggle(i, j)} />
                            ))}
                            <br />
                        </div>
                    ))}
                </div>
            )}

            <div>
                <h2>Winlines</h2>
                <div>
                    <span>{'['}</span>
                    {winLine.map((cell, i) => (
                        <span key={i}>{i === winLine.length - 1 ? <span key={i}>{cell}</span> : <span key={i}>{cell}, </span>}</span>
                    ))}
                    <span>{']'}</span>
                </div>
            </div>
        </div>
    );
}
